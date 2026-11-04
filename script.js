(() => {
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
 const close=()=>{nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Open navigation');};
 toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 const items=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
  items.forEach(item=>observer.observe(item));
 }else{items.forEach(item=>item.classList.add('visible'));}
})();