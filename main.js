const hero = document.querySelector('.hero');
const headline = document.querySelector('.headline');
const slider = document.querySelector('.slider');


const tl = new TimelineMax();

tl.fromTo(hero,1, {height:"0%"},{height:"80%", ea : Power2.easeInOut})
.fromTo(hero,1.2, {width:"100%"},{width:"90%", ea : Power2.easeInOut})
.fromTo(slider, 0.7, {x:"-100%"}, {x:"0%", ease:Power2.easeInOut}, "-=1.2")
.fromTo(headline, 0.5, {opacity:0, x:30}, {opacity: 1, x:0}, "-=0.5"); 


window.addEventListener('scroll',()=>{
    let content = document.querySelector('.intro');
    let contentPosition = content.getBoundingClientRect().top; 
    let screenPosition = window.innerHeight / 1.7; 
    if (contentPosition < screenPosition) {
        content.classList.add('active');
    } /*else {
        content.classList.remove('active')
    }*/
});