// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon i");
let navbar = document.querySelector("#navbar");
let logo = document.querySelector("#logo") ;





menuIcon.onclick = () => {
  navbar.classList.toggle('max-[774px]:top-full');
  
}
window.onscroll = () => {
  navbar.classList.remove('max-[774px]:top-full');
}
window.addEventListener('scroll', () => {
 if(window.scrollY > 0) {
    header.classList.add('bg-bgColor');
    logo.classList.add('text-textColor');
    navbar.classList.add('text-textColor');
    menuIcon.classList.add('text-textColor');
  }
  else  {
    header.classList.remove('bg-bgColor','shadow');
    logo.classList.remove('text-textColor');
    navbar.classList.remove('text-textColor');
    menuIcon.classList.remove('text-textColor');
  }
});

