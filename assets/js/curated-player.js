/* Eli Hanover curated media: static, no dependencies, no HTML injection. */
(() => {
  'use strict';
  const groups = [
    ['music', 'Music & Shared Songs', 'Songs shared by the family and collections from the earlier website.'],
    ['film', 'Films & Documentary', 'Eli’s documentary and selected film clips.'],
    ['motivational', 'Words & Inspiration', 'Talks and speeches saved for inspiration.'],
    ['memories', 'Pastimes & Memories', 'Horse racing, comedy and period entertainment connected to the story.'],
    ['boxing', 'Historic Boxing Film', 'The 15 selections from the earlier Global Boxing History exhibit.']
  ];
  const root = document.querySelector('[data-curated-library]');
  if (!root) return;
  const cleanId = id => typeof id === 'string' && /^[a-zA-Z0-9_-]{11}$/.test(id);
  function node(tag, cls, text) {
    const e=document.createElement(tag); if(cls)e.className=cls;
    if (text!==undefined)e.textContent=String(text); return e;
  }
  function embedUrl(id) {
    return 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
  }
  function renderGroup(key, label, description, tracks) {
    const section=node('section','ehc-section'); section.id=key;
    const head=node('div','ehc-section-head');
    head.append(node('h2','',label),node('p','',description));section.append(head);
    if (!tracks.length) {section.append(node('p','ehc-empty','No approved selections in this collection.'));return section;}
    let selected=0;
    const player=node('div','ehc-player');
    const stage=node('div','ehc-stage');
    const title=node('h3','ehc-current-title');
    const desc=node('p','ehc-current-desc');
    const external=node('a','ehc-youtube','Open on YouTube');
    external.target='_blank';external.rel='noopener noreferrer';
    const controls=node('div','ehc-controls');
    const prev=node('button','ehc-control','← Previous');prev.type='button';
    const count=node('span','ehc-counter');count.setAttribute('aria-live','polite');
    const next=node('button','ehc-control','Next →');next.type='button';
    controls.append(prev,count,next);
    const rail=node('div','ehc-rail');rail.setAttribute('aria-label',label+' selections');
    function select(i) {
      selected=(i+tracks.length)%tracks.length;
      const item=tracks[selected];stage.replaceChildren();
      // The YouTube iframe is created only on an explicit visitor click.
      const play=node('button','ehc-poster');play.type='button';
      const img=node('img','ehc-poster-image');
      img.alt='';img.loading='lazy';img.referrerPolicy='no-referrer';
      img.src='https://i.ytimg.com/vi/'+item.youtube_id+'/hqdefault.jpg';
      play.append(img,node('span','ehc-play-symbol','▶'),node('span','ehc-play-text','Play selected video'));
      play.setAttribute('aria-label','Play '+item.title);
      play.addEventListener('click',()=>{
        const frame=node('iframe','ehc-frame');
        frame.src=embedUrl(item.youtube_id); frame.title=item.title;
        frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
        frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';
        stage.replaceChildren(frame);
      });
      stage.append(play);title.textContent=item.title;
      desc.textContent=item.description||'';
      external.href=item.url;
      count.textContent=(selected+1)+' of '+tracks.length;
      [...rail.children].forEach((b,j)=>{b.setAttribute('aria-current',j===selected?'true':'false');b.classList.toggle('is-selected',j===selected);});
      // Keep initial page position stable; the thumbnail rail remains scrollable.
    }
    tracks.forEach((item,i)=>{
      const button=node('button','ehc-thumb');button.type='button';
      const thumb=node('img');thumb.alt='';thumb.loading='lazy';
      thumb.src='https://i.ytimg.com/vi/'+item.youtube_id+'/mqdefault.jpg';
      button.append(thumb,node('span','',item.title));
      button.addEventListener('click',()=>select(i));rail.append(button);
    });
    prev.addEventListener('click',()=>select(selected-1));
    next.addEventListener('click',()=>select(selected+1));
    player.append(stage,title,desc,external,controls,rail);
    section.append(player);select(0);return section;
  }
  const manifestUrl=new URL('../../data/public/curated-media.json',document.currentScript?.src||document.baseURI);
  fetch(manifestUrl,{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json();}).then(data=>{
    const all=Array.isArray(data.items)?data.items:[];
    const valid=all.filter(x=>x&&x.approved===true&&cleanId(x.youtube_id)&&typeof x.title==='string'&&typeof x.category==='string'&&typeof x.url==='string'&&x.url==='https://www.youtube.com/watch?v='+x.youtube_id);
    const nav=node('nav','ehc-jumps');nav.setAttribute('aria-label','Media categories');
    groups.forEach(([key,label,description])=>{
      const a=node('a','',label);a.href='#'+key;nav.append(a);
    });
    root.append(nav);
    groups.forEach(([key,label,description])=>root.append(renderGroup(key,label,description,valid.filter(i=>i.category===key))));
  }).catch(()=>root.append(node('p','ehc-error','The media catalog could not be loaded. Use the local preview server and check the JSON file.')));
})();
