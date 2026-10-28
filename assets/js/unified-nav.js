/* Header is fully present in HTML; JS enhances only mobile disclosure behavior. */
(() => {
  for (const header of document.querySelectorAll('.eh-global-nav')) {
    const toggle = header.querySelector('.eh-toggle');
    const menu = header.querySelector('.eh-links');
    if (!toggle || !menu) continue;
    const close = () => {toggle.setAttribute('aria-expanded','false');menu.classList.remove('is-open');};
    toggle.addEventListener('click', () => {
      const expand = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded',String(expand));
      menu.classList.toggle('is-open',expand);
    });
    menu.addEventListener('click', event => {if(event.target.closest('a'))close();});
    header.addEventListener('keydown',event => {if(event.key==='Escape'){close();toggle.focus();}});
    document.addEventListener('click',event => {if(!header.contains(event.target))close();});
  }
})();
