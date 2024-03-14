const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextbutton = document.querySelector('.--right');
const prevbutton = document.querySelector('.--left');
const dotsnav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsnav.children);
const slidewidth = slides[0].getBoundingClientRect().width;

//slides
//slides[0].style.left = slidewidth * 0 + 'px';
//slides[1].style.left = slidewidth * 1 + 'px';
//slides[2].style.left = slidewidth * 2 + 'px';
//slides[3].style.left = slidewidth * 3 + 'px';
//slides[4].style.left = slidewidth * 4 + 'px';

const setslideposition = (slide, index) => {
    slide.style.left = slidewidth * index + 'px';
};

slides.forEach(setslideposition);

const movetoslide = (track, currentslide, targetslide) => {
  
    track.style.transform = 'translateX(-' + targetslide.style.left + ')';
    currentslide.classList.remove('current-slide');
    targetslide.classList.add('current-slide');  
}

const updatedots = (currentdots, targetdot) => {
    currentdots.classList.remove('current-slide');
    targetdot.classList.add('current-slide');  

}

prevbutton.addEventListener('click', e =>{
    const currentslide = track.querySelector('.current-slide');
    const prevslide = currentslide.previousElementSibling;
    const currentdots = dotsnav.querySelector('.current-slide');
    const prevdot = currentdots.previousElementSibling;
    movetoslide(track, currentslide, prevslide);
    updatedots(currentdots, prevdot);

})


    nextbutton.addEventListener('click', e =>{
    const currentslide = track.querySelector('.current-slide');
    const nextslide = currentslide.nextElementSibling;
    const currentdots = dotsnav.querySelector('.current-slide');
    const nextdot = currentdots.nextElementSibling;
  
    movetoslide(track, currentslide, nextslide);
    updatedots(currentdots, nextdot);

})

dotsnav.addEventListener('click', e =>{
    const targetdot = e.target.closest('button');

    if (!targetdot) return;

    const currentslide = track.querySelector('.current-slide');
    const currentdots = dotsnav.querySelector('.current-slide');
    const targetindex = dots.findIndex(dot => dot === targetdot);
    const targetslide = slides[targetindex];
    movetoslide(track, currentslide, targetslide);
    updatedots(currentdots, targetdot);
})







