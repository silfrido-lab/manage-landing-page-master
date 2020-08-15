// cuando cargue la ventana añadimos un evento notificador
window.addEventListener('load', function() {
    new Glider(document.querySelector('.slider-list'), {
        // Mobile-first defaults
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        dots: '.slider-indicator',
        autoplay: 0.15,

        responsive: [{
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '1',
                itemWidth: 150,
                duration: 0.15
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 1000
            }
        }]
    });
});

//autoplay del slider
// var input = document.querySelector('#options-autoplay-input')

// var glide = new Glide('#options-autoplay', {
//     autoplay: input.value,
//     hoverpause: false,
//     perView: 3
// })

// input.addEventListener('input', function(event) {
//     glide.update({
//         autoplay: (event.target.value != 0) ? event.target.value : false
//     })
// })

// glide.mount()

//cambio de menu
const button = document.querySelector('#button');
button.addEventListener('click', function() {
    console.log('click');
    document.getElementById('icon-hamburguer').classList.toggle('active');
    document.getElementById('icon-close').classList.toggle('active')
    document.getElementById('menu').classList.toggle('active')
});