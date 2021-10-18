const prev = document.getElementById('btn-prev'),
next = document.getElementById('btn-next'),
slides = document.querySelectorAll('.slide'),
dots = document.querySelectorAll('.btn-item'),
texts = document.querySelectorAll('.slider-text')

let index = 0;


const activeSlide = n =>{
for(slide of slides){
    slide.classList.remove('active');
}
slides[n].classList.add('active');
}

const activeDot = n =>{
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const activeText = n =>{
    for(text of texts){
        text.classList.remove('active');
    }
    texts[n].classList.add('active');
}


const prepareCurrentSlide = ind =>{
    activeDot(ind);
    activeSlide(ind);
    activeText(ind);
}

dots.forEach((item,indexDot)=>{
    item.addEventListener('click', () =>{
        index = indexDot;
        prepareCurrentSlide(index);


    })
})