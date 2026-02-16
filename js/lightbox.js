(function(){
  const imgs = Array.from(document.querySelectorAll('.gallery-item img'));
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const closeBtn = document.getElementById('lb-close');
  const prevBtn = document.getElementById('lb-prev');
  const nextBtn = document.getElementById('lb-next');
  let current = -1;

  function show(index){
    if(index<0||index>=imgs.length) return;
    current = index;
    lbImg.src = imgs[current].src;
    lb.classList.remove('hidden');
  }
  function hide(){ lb.classList.add('hidden'); lbImg.src=''; }
  function next(){ show((current+1)%imgs.length); }
  function prev(){ show((current-1+imgs.length)%imgs.length); }

  imgs.forEach((el,i)=> el.addEventListener('click', ()=> show(i)));
  closeBtn.addEventListener('click', hide);
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  lb.addEventListener('click', (e)=>{ if(e.target===lb) hide(); });
  window.addEventListener('keydown',(e)=>{
    if(lb.classList.contains('hidden')) return;
    if(e.key==='Escape') hide();
    if(e.key==='ArrowRight') next();
    if(e.key==='ArrowLeft') prev();
  });
})();
