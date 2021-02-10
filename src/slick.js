(() => {
  $('.comments-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    dots: true,
    focusOnSelect: false,
    adaptiveHeight: true,
  });
})();