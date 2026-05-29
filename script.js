const hdr=document.getElementById('hdr');
  const onScroll=()=>{hdr.classList.toggle('scrolled',window.scrollY>40)};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();