var $jq = jQuery.noConflict();
$jq(document).ready(function() {
});

$(function(){
    $('.slider-cat').slick({
        fade: true,
        arrows: true,
        prevArrow: '<button class="slick-btn slick-prev"><img class="arrow__img-cat" src="../img/arrow-prev.svg" alt="prev" ></button>',
        nextArrow: '<button class="slick-btn slick-next"><img class="arrow__img-cat" src="../img/arrow-next.svg" alt="next" ></button>',
        asNavFor: '.navigate-list',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.navigate-list').slick({
        asNavFor: '.slider-cat',
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true
    });

});