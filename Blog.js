// const galleryContainer = document.querySelector('.gallery-container');
// const galleryControlsContainer = document.querySelector('.gallery-controls');
// const galleryControls = ['previous', 'next'];
// const galleryItems = document.querySelectorAll('.gallery-item');

// class Carousel {
//     constructor(container, items, controls){
//         this.carouselContainer = container;
//         this.carouselControls = controls;
//         this.carouselArray = [...items];
//     }

//     updateGallery(){
//         this.carouselArray.forEach(el => {
//             el.classlist.remove('gallery-item-1');
//             el.classlist.remove('gallery-item-2');
//             el.classlist.remove('gallery-item-3');
//             el.classlist.remove('gallery-item-4');
//             el.classlist.remove('gallery-item-5');
//         });

//         this.carouselArray.slice(0, 5).forEach((el , i) => {
//             el.classlist.add('gallery-item-${i+1}');
//         });
//     }

//     setCurrentState(direction){
//         if (direction.className == 'gallery-controls-previous'){
//             this.carouselArray.unshift(this.carouselArray.pop());
//         }else{
//             this.carouselArray.push(this.carouselArray.shift());
//         }

//         this.updateGallery();
//     }

//     setControls() {
//         this.carouselControls.forEach(control => {
//             galleryControlsContainer.appendChild(document.createElement('button')).className = 'gallery-controls-${control}';
//             document.querySelector('.gallery-controls-${control}').innerText = control;
//         });
//     }

//     useControls(){
//         const triggers = [...galleryControlsContainer.childNodes];
//         triggers.forEach(control => {
//             control.addEventListener('click', e => {
//                 e.preventDefault();
//                 this.setCurrentState(control);
//             });
//         });
//     }
// }

// const exampleCarousel =  new Carousel(galleryContainer, galleryItems, galleryControls);

// exampleCarousel.setControls();
// exampleCarousel.useControls();

// owlCarousel
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 3,
        loop:true,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });
    
});
// owlCarousel
