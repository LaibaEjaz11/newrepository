// carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    margin:40,
    loop:true,
    navigation:true,
    navigationText:["",""],
    pagination:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600:{
            items:2,
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1000:{
            items:3
        },
        1200: {
            items: 3
        },
        1920: {
            items: 4
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})