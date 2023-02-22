$(function(){
  $('.team__items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
    ]
  });

  $(".menu a, .header__content-link, .header__log-in, .header__link, .footer__link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });
});
