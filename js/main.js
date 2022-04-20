'use strict';

{
  const header = document.getElementById('header');
  const target = document.getElementById('target');
  const footer = document.getElementById('footer');
  const top = document.getElementById('top');
  const bottom = document.getElementById('bottom');
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const openMenu = document.getElementById('openMenu');
  const li = document.querySelectorAll('li');
  const section = document.querySelectorAll('section');

  function headerCallback(entries){
    if(!entries[0].isIntersecting){
      header.classList.add('minimum');
      top.classList.add('hello');
    } 
    else{
      header.classList.remove('minimum');
      top.classList.remove('hello');
    } 
  }

  function sectionCallback(entries, obs){
    entries.forEach(entry =>{
      if(!entry.isIntersecting) return;

      entry.target.classList.add('appear');
      obs.unobserver(entry.target);
    });
  }

  function footerCallback(entries){
    if(entries[0].isIntersecting) bottom.classList.add('hello');
    else bottom.classList.remove('hello');
  }

  const headerObserver = new IntersectionObserver(headerCallback);
  headerObserver.observe(target);

  const sectionObserver = new IntersectionObserver(sectionCallback, {threshold: 0.3});
  section.forEach(el =>{
    sectionObserver.observe(el);
  });

  const footerObserver = new IntersectionObserver(footerCallback);
  footerObserver.observe(footer);

  top.addEventListener('click', e =>{
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  bottom.addEventListener('click', () =>{
    bottom.classList.remove('hello');
  });

  function imgChange(){
    if(li[0].classList.contains('show')){
      li[0].classList.remove('show');
      li[1].classList.add('show');
    } 
    else if(li[1].classList.contains('show')){
      li[1].classList.remove('show');
      li[2].classList.add('show');
    } 
    else{
      li[2].classList.remove('show');
      li[0].classList.add('show');
    }
    setTimeout(imgChange, 4000);
  }

  setTimeout(imgChange, 4000);

  open.addEventListener('click', () =>{
    open.classList.add('hidden');
    close.classList.remove('hidden');
    openMenu.classList.add('open');
  });

  close.addEventListener('click', () =>{
    close.classList.add('hidden');
    open.classList.remove('hidden');
    openMenu.classList.remove('open');
  });
}