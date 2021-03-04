const carouselSide = document.querySelector('.carousel-side');
const carouselImages = document.querySelectorAll('.carousel-side img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

 carouselSide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listener
nextBtn.addEventListener('click', ()=>
{
    if(counter >= carouselImages.length - 1) return;
    carouselSide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click', ()=>
{
    if(counter <= 0) return;
    carouselSide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
carouselSide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone'){
        carouselSide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(carouselImages[counter].id === 'firstClone'){
        carouselSide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});