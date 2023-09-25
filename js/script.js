const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})

		if (iconMenu.classList.contains('_active')) {
			document.body.classList.remove('_lock');
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
		}
	})
	
}

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}



const swiper1 = new Swiper('.info-icons__tablet', {
	direction: 'horizontal',
	loop: false,
	loopedlides: 0,

	freeMode: true,

	navigation: {
		nextEl: '.arrow-swiper-next',
		prevEl: '.arrow-swiper-prev',
	},

	slidesPerView: 1,

	spaceBetween: 24,

	slidesPerGroup: 1,

	speed: 800,
});

const swiper2 = new Swiper('.cards-block', {
	direction: 'horizontal',
	loop: false,
	loopedlides: 0,

	freeMode: true,

	navigation: {
		nextEl: '.cards-block__button-swiper-next',
		prevEl: '.cards-block__button-swiper-prev',
	},

	slidesPerView: 1,

	spaceBetween: 24,

	slidesPerGroup: 1,

	speed: 800,
});

