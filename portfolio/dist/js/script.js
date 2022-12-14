const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});


const counter = document.querySelectorAll('.skills-level__value'),
	actual = document.querySelectorAll('.actual');

counter.forEach((item, i) => {
	actual[i].style.width = item.innerHTML;
});


