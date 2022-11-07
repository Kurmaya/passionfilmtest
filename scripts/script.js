//navbar and toggle button//
var toggleButton =document.querySelector(".toggle-button");
var navbarLinks = document.querySelector(".navbar-links");
var navbarItems= document.querySelectorAll('.navbar-item');
var navbar = document.querySelector("nav");
var rotate=document.querySelectorAll('.rotate-card');
var awardImg=document.querySelectorAll('.award-holder .main-awards-list');
var awardText=document.querySelectorAll('.award-text');
var fadeInText=document.querySelectorAll('.fade-in-text h1');

// for(let i=0;i<fadeInText.length;i++){
//   fadeInText[i].classList.add('active');
//   setTimeout(function () {
// fadeInText[i].classList.remove('active');
//
//   }, 5000);
//
// }

setInterval(function(){
var container = document.getElementById('content');
var tmp = container.innerHTML;
container.innerHTML= tmp;
}, 35100 // length of the whole show in milliseconds
);



// awardImg.forEach(e =>{
//   e.addEventListener('click',function(){
// console.log(e.parentElement);
//     e.parentElement.classList.toggle('active');
//
//   })
//
// })


rotate.forEach(rot =>{
  rot.addEventListener('click',function(){

    rot.previousElementSibling.classList.toggle('active');
  })
})



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



// video play and pause on hover//
var vids = document.querySelectorAll('.text');
var secVid=document.querySelectorAll('.cat')

if(window.matchMedia("(pointer: coarse)").matches) {
    // console.log('hello');
    secVid.forEach(sec=>{
      sec.play();
    })

}

vids.forEach(function(e) {

  e.addEventListener('mouseover', function() {





        e.parentElement.parentElement.parentElement.querySelector('video').play();




  });
  e.addEventListener('mouseleave', function() {
    e.parentElement.parentElement.parentElement.querySelector('video').pause();

  })
});

// const cardFront= document.querySelectorAll('.card-front');
// const cardContent=document.querySelectorAll('.card-content')
//
// cardFront.forEach(function(e){
//   e.addEventListener('click',function(){
//     e.parentElement.classList.toggle('active');
//   });
// });


//  navbar hide and show on scroll//
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
    if (entry.isIntersecting) observer.unobserve(entry.target)
  });
}
const content = document.querySelector(".content");
const conts = document.querySelectorAll(".catergory");
const about = document.querySelectorAll(".about");
const awards = document.querySelectorAll(".main-awards-list")
const mid = document.getElementById('middle');

const cards= document.querySelectorAll(".card");

const observer = new IntersectionObserver(call, {
  threshold: .08,
})
conts.forEach(cont => {
  observer.observe(cont);
})


observer.observe(content);

observer.observe(mid);


awards.forEach(award => {
  observer.observe(award);

})

about.forEach(ab => {
  observer.observe(ab);

})
cards.forEach(card=>{
  observer.observe(card);
})

awardImg.forEach(img =>{
  observer.observe(img);
})

awardText.forEach(text =>{
  observer.observe(text);
})
