/* Eli Hanover media page: classifications are explicit, no content guessed from URLs. */
(async function () {
  'use strict';
  const el = (tag, className, txt) => { const node = document.createElement(tag); if (className) node.className=className; if (txt !== undefined) node.textContent=String(txt); return node; };
  const byId = id => document.getElementById(id);
  function describe(card,item) {
    card.appendChild(el('h3','',item.title || 'Recording — details to be confirmed'));
    if (item.description) card.appendChild(el('p','',item.description));
  }
  function mediaCard(item) {
    if (item.approved !== true) return null;
    const id=String(item.youtube_id || '');
    const youtube=Boolean(item.youtube_id || item.type==='youtube');
    if (!youtube && !item.src) return null;
    const card=el('article','media-card');
    if (youtube) {
      if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return null;
      const frame=el('iframe');
      frame.src='https://www.youtube-nocookie.com/embed/'+id;
      frame.title=item.title || 'YouTube recording';
      frame.loading='lazy';frame.referrerPolicy='strict-origin-when-cross-origin';
      frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen=true;
      frame.style.width='100%';frame.style.aspectRatio='16 / 9';frame.style.border='0';
      card.appendChild(frame);
    } else {
      const audio=String(item.type || '').startsWith('audio') || /\.(mp3|m4a|ogg|wav|flac)(\?|$)/i.test(item.src);
      const player=el(audio?'audio':'video');player.controls=true;player.preload='none';player.src='../'+item.src;
      if (!audio && item.poster) player.poster='../'+item.poster;
      card.appendChild(player);
    }
    describe(card,item);return card;
  }
  function render(items,gridId,emptyId) {
    const grid=byId(gridId);if(!grid)return;
    let count=0;for(const item of items){const card=mediaCard(item);if(card){grid.appendChild(card);count++;}}
    const empty=byId(emptyId);if(empty)empty.hidden=count>0;return count;
  }
  function renderPhotos(items) {
    const grid=byId('photo-grid');if(!grid)return;
    for(const item of items) {
      if(item.approved!==true || item.category!=='family' || !item.src) continue;
      const fig=el('figure','photo-card'),img=el('img'),cap=el('figcaption');
      img.src='../'+item.src;img.alt=item.alt || item.description || item.title || 'Archival photograph';
      img.loading='lazy';img.decoding='async';fig.appendChild(img);describe(cap,item);fig.appendChild(cap);grid.appendChild(fig);
    }
  }
  try {
    const response=await fetch('../data/public/media-library.json',{cache:'no-store'});
    if(!response.ok)throw Error('Media manifest could not be loaded: '+response.status);
    const data=await response.json(), videos=(data.videos || []);
    const category=v => v.media_section==='music'?'music':v.media_section==='film'?'film':'review';
    render(videos.filter(v=>category(v)==='film'),'video-grid','video-empty');
    const music=videos.filter(v=>category(v)==='music');
    render(music,'music-grid',null);
    const approvedAudio=(data.audio||[]).filter(v=>v.approved===true);
    render(approvedAudio,'audio-grid',null);
    const emptyAudio=byId('audio-empty'); if(emptyAudio) emptyAudio.hidden=music.some(v=>v.approved===true)||approvedAudio.length>0;
    render(videos.filter(v=>category(v)==='review'),'review-grid','review-empty');
    renderPhotos(data.photos || []);
  } catch(error) {
    const grid=byId('video-grid');if(grid)grid.appendChild(el('p','empty','The media catalog could not be loaded. Please refresh or try again later.'));
    console.warn(error);
  }
})();
