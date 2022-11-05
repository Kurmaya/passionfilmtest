var toggleButton =document.querySelector(".toggle-button");
var navbarLinks = document.querySelector(".navbar-links");
var navbarItems= document.querySelectorAll('.navbar-item');
var navbar = document.querySelector("nav");





toggleButton.addEventListener('click', function()  {

  toggleButton.classList.toggle("active");
document.querySelector('.page').classList.toggle('active');

  navbarLinks.classList.toggle("active");

  navbar.classList.toggle("active");
});

// active nav link //
const currentLocation=location.href;

navbarItems.forEach( item => {
  if(item.href===currentLocation){
    // console.log(item.href);
    item.classList.add('active');
  }
})



const header = document.querySelector('nav');
const homeMain = document.querySelector('.hero');
const homeMainOptions = {
  rootMargin: "-150px 0px 0px 0px",

};


const navObserver = new IntersectionObserver(function(entries, navObserver) {
  entries.forEach(entry => {

    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  })
}, homeMainOptions)

navObserver.observe(homeMain);

// animations on scroll //
var call = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle('active', entry.isIntersecting)
    if (entry.isIntersecting){
      observer2.unobserve(entry.target)
    }

  });
}



const midP= document.getElementById('middle-p');
const showcase =document.querySelectorAll(".grid-content");
const swipe= document.querySelector('.swi-container');
const swipes= document.querySelectorAll('.swi-container .swiper-slide');
const observer2= new IntersectionObserver(call,{
  threshold: .1,
})
observer2.observe(midP);

showcase.forEach(show =>{
  observer2.observe(show);
})



observer2.observe(swipe);
const lightbox =document.getElementById('lightbox');
const lightHolder=document.getElementById('light-holder');
const close=lightbox.querySelector('span');
const inText=document.querySelectorAll('.films-title');

inText.forEach( tex => {
  tex.addEventListener('click', function(e){
      // console.log(e.target.parentNode.querySelector('p').innerHTML);
      let text= e.target.parentNode.querySelector('p').innerHTML;
      lightbox.classList.add('active');
      document.body.style.overflow="hidden";

      lightHolder.querySelector('iframe').src=text;


  })
})
swipes.forEach(swipe => {
  swipe.addEventListener('click', function(e){

    // if(e.target==e.target.querySelector('.films-title')){
    //   console.log(e.target);
    // }
let text=e.target.querySelector('p').innerHTML;
    // console.log( e.target.getBoundingClientRect().width );
    lightbox.classList.add('active');
    document.body.style.overflow="hidden";

    lightHolder.querySelector('iframe').src=text;
  })
})
// inText.forEach(intext => {
//   int.addEventListener('click', ev=>{
//
//     let text=ev.target.parentElement.querySelector('p').textContent;
//     console.log(intext);
//     lightbox.classList.add('active');
//
//     lightHolder.querySelector('iframe').src=text;
//   })
// })

close.addEventListener('click',function(){
  lightbox.classList.remove('active');
  document.body.style.overflow="auto";
  lightHolder.querySelector('iframe').src= "";
})
lightbox.addEventListener('click', e => {
  if(e.target!== e.currentTarget) return
  document.body.style.overflow="auto";
  lightbox.classList.remove('active');
  lightHolder.querySelector('iframe').src= "";

})
