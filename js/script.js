$(document).ready(function () {
	$('.portfolio__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
				}
			},
		]
	});
});

$(document).ready(function () {
	$(".header__burger").click(function () {
		$(".header__burger, .header__menu").toggleClass("active");
		$("html, body").toggleClass("scroll");
	});

	$(".header__menu li a").click(function (e) {
		e.preventDefault();
		$(".header__burger, .header__menu").toggleClass("active");
		$("html, body").removeClass("scroll");
	});

	var btn = $('.container-scroll__top');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '800');
	});

	$("a.scroll-to").on("click", function (e) {
		e.preventDefault();
		var anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top - 0
		}, 800);
	});

	$("#phone, #phone-two").mask("+7 (999) 999-99-99");

});

$(document).ready(function () {
	$(".modal-btn").click(function () {
		$("#modal-one").fadeIn();
		$(".popup__overlay").animate({
			opacity: 1,
		}, 800);
		$("html, body").addClass("scroll");
	});

	$(".popup__body-close").click(function (e) {
		e.preventDefault();
		$("#modal-one").fadeOut(800);
		$(".popup__overlay").animate({
			opacity: 0,
		}, 800);
		$("html, body").removeClass("scroll");
	});

	$('#modal-one').click(function (e) {
		if ($(e.target).closest('.popup__body').length == 0) {
			$(this).fadeOut(800);
			$(".thanks-popup").fadeOut(800);
			$(".popup__overlay").animate({
				opacity: 0,
			}, 800);
			$("html, body").removeClass("scroll");
		}
	});
});

$(document).ready(function () {
	$(".modal-btn-two").click(function () {
		$("#modal-two").fadeIn();
		$(".popup__overlay").animate({
			opacity: 1,
		}, 800);
		$("html, body").addClass("scroll");
	});

	$(".popup__body-close").click(function (e) {
		e.preventDefault();
		$("#modal-two").fadeOut(800);
		$("html, body").removeClass("scroll");
		$(".thanks-popup").fadeOut(800);
	});

	$('#modal-two').click(function (e) {
		if ($(e.target).closest('.popup__body').length == 0) {
			$(this).fadeOut(800);
			$(".thanks-popup").fadeOut(800);
			$(".popup__overlay").animate({
				opacity: 0,
			}, 800);
			$("html, body").removeClass("scroll");
		}
	});
});

$(document).ready(function () {
	$('#popup-form_two').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			name: {
				required: "Поле обязательно к заполнению",
				minlength: "Введите не менее 2-х символов в поле 'Имя'"
			},
			email: {
				required: "Поле обязательно к заполнению",
				email: "Необходим формат адреса email"
			},
			tel: {
				required: "Поле обязательно к заполнению"
			},
			checkbox: {
				required: "Необходимо согласие"
			}
		},

		errorPlacement: function (error, element) {
			if (element.attr("type") == "checkbox") {
				return element.next('label').append(error);
			}
			error.insertAfter($(element));
		},
		submitHandler(form) {
			let th = $(form);
			$.ajax({
				type: 'POST',
				url: 'mail.php',
				data: th.serialize(),
				// eslint-disable-next-line func-names
			}).done(() => {
				$('.popup__body').addClass("none");
				$('.thanks-popup').fadeIn();
				th.trigger('reset');
			});
			return false;
		}
	});

	$('#popup-form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			}
		},

		messages: {
			name: {
				required: "Поле обязательно к заполнению",
				minlength: "Введите не менее 2-х символов в поле 'Имя'"
			},

			tel: {
				required: "Поле обязательно к заполнению"
			},

			checkbox: {
				required: "Необходимо согласие"
			}
		},

		errorPlacement: function (error, element) {
			if (element.attr("type") == "checkbox") {
				return element.next('label').append(error);
			}
			error.insertAfter($(element));
		},

		submitHandler(form) {
			let th = $(form);
			$.ajax({
				type: 'POST',
				url: 'mail.php',
				data: th.serialize(),
				// eslint-disable-next-line func-names
			}).done(() => {
				$('.popup__body').addClass("none");
				$('.thanks-popup').fadeIn();
				th.trigger('reset');
			});
			return false;
		}
	});

	$(".modal-btn-two, .modal-btn").click(function () {
		$(".popup__body").removeClass("none");
	});
});













