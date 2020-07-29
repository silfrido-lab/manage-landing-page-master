// cuando cargue la ventana añadimos un evento notificador
window.addEventListener('load', function() {
    new Glider(document.querySelector('.slider-list'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots: '.slider-indicator',

    });
    console.log('iniciado');
});