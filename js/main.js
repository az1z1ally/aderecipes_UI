document.addEventListener('DOMContentLoaded', function() {


	const menu = document.querySelector('#menu-bars')
	const navbar = document.querySelector('.navbar')

	menu.onclick = () => {
		menu.classList.toggle('fa-times')
		navbar.classList.toggle('active')
	}


	// CHANGE HEADER BACKGROUND ON-SCROLL

	function scrollHeader(){
		const header = document.querySelector('header')

		// When the scroll is > 50vh, add the scroll-header class
		if (this.scrollY >= 50){
			header.classList.add('scroll-header')
		}else {
			header.classList.remove('scroll-header')
		}
	}


	// SHOW SCROLL

	function scrollTop(){
		const scroll = document.querySelector('#scroll-top')

		// When the scroll is higher than 560vh, add the show-scroll class to scroll-top button
		if (this.scrollY >= 560){
			scroll.classList.add('show-scroll')
		}else {
			scroll.classList.remove('show-scroll')
		}
	}

	const section = document.querySelectorAll('section');
	const navLinks = document.querySelectorAll('header .navbar a');

	window.onscroll = () => {
		menu.classList.remove('fa-times')
		navbar.classList.remove('active')

		scrollHeader()
		scrollTop()

		section.forEach(sec =>{

		    let top = window.scrollY;
		    let height = sec.offsetHeight;
		    let offset = sec.offsetTop - 150;
		    let id = sec.getAttribute('id');

		    if(top >= offset && top < offset + height){
		      navLinks.forEach(links =>{
		        links.classList.remove('active');
		        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
		      });
		    };

		});
	}



	// Make an ajax call when the category change

	document.querySelector('#filter').onchange = () => {
		fetch('?category=category')
	}


	// Scroll reveal animation
	const sr = ScrollReveal({
		origin: 'top',
		distance: '30px',
		duration: 2000,
		reset: true
	})

	sr.reveal(`.home-content, .about__content, 
		.about__img, .recipe__box, .offer__content, .special__item, 
		.special__right, .media__one, .media__two, .whyus__left, 
		.whyus__right, .newsletter__wrapper`, {
		interval: 200
	})



})


