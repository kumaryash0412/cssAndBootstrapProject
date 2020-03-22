$(document).ready(function () {
    $('.img-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// owl logo
$(document).ready(function () {
    $('#logo').owlCarousel({
        loop: true,
        smartSpeed: 4000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

//owl work
$(document).ready(function () {
    $('#owl-work').owlCarousel({
        loop: true,
        smartSpeed: 4000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});