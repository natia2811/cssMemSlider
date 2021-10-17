const prev = document.getElementById('btn-prev'),
next = document.getElementById('btn-next'),
slides = document.querySelectorAll('.slide'),
dots = document.querySelectorAll('.btn-item');

let index = 0;

console.log(slides);
const activeSlide = n =>{
for(slide of slides){
    slide.classList.remove('active');
}
slides[n]classList.add('active');
}