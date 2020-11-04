const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.control__next',
		prevEl: '.control__prev',
	},
	effect: 'flip',
	grabCursor: true,
});
