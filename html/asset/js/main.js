// $('.slider1').slick({
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
// });

$('.slider').slick({
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// product

$('.slider1').slick({
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// quantity counter

function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}


// price range


// dropdown


$(document).ready(function () {
    $('.pages').click(function () {
        $('.pages-drp').slideToggle(100);
        $('.location-drp').slideUp(0);
    });
    $('.user-btn').click(function () {
        $('.location-drp').slideToggle(100);
        $('.pages-drp').slideUp(0);
    });
    $('main').click(function () {
        $('.pages-drp').slideUp(0);
        $('.location-drp').slideUp(0);
    });
    $('.drd').click(function () {
        $('.pages-drp').slideUp(0);
        $('.location-drp').slideUp(0);
    });
});
