const hero = document.querySelector('.hero');
const headline = document.querySelector('.headline');
const slider = document.querySelector('.slider');


const tl = new TimelineMax();

tl.fromTo(hero,1, {height:"0%"},{height:"80%", ea : Power2.easeInOut})
.fromTo(slider, 0.7, {x:"-100%"}, {x:"0%", ease:Power2.easeInOut})
.fromTo(headline, 0.5, {opacity:0, x:30}, {opacity: 1, x:0}, "-=0.5");