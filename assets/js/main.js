// main.js — minimal interactions for prototype
document.addEventListener('DOMContentLoaded',function(){
  const navToggle=document.getElementById('nav-toggle');
  const mainNav=document.getElementById('main-nav');
  if(navToggle){
    navToggle.addEventListener('click',function(){
      if(mainNav.style.display==='flex'){mainNav.style.display='none'}else{mainNav.style.display='flex'}
    });
  }
  const bookBtns=document.querySelectorAll('#hero-book,#book-top');
  const modal=document.getElementById('book-modal');
  const modalClose=document.getElementById('modal-close');
  function openModal(e){
    e && e.preventDefault();
    if(modal){modal.setAttribute('aria-hidden','false')}
  }
  function closeModal(){if(modal){modal.setAttribute('aria-hidden','true')}}
  bookBtns.forEach(b=>b&&b.addEventListener('click',openModal));
  modalClose&&modalClose.addEventListener('click',closeModal);
  // gallery filters
  const filters=document.querySelectorAll('.gallery-filters button');
  const items=document.querySelectorAll('.gallery-item');
  filters.forEach(f=>f.addEventListener('click',function(){
    filters.forEach(x=>x.classList.remove('active'));
    this.classList.add('active');
    const cat=this.getAttribute('data-filter');
    items.forEach(i=>{if(cat==='all')i.style.display='block';else i.style.display=(i.dataset.category===cat?'block':'none')});
  }));
});
