// query selectors
const toggleMenu = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu__user');
const inputSearch = document.querySelector('form');
const joined = document.querySelectorAll('.form');
const joinedShow = document.querySelectorAll('.join p');
const join__form = document.querySelector('.join__form');

// fetch data
const getData = fetch('/frontend/data/chatRooms.json');

// show home/profile menu
toggleMenu.addEventListener('click', (event) => {
	menu.classList.toggle('menu__user__show');
});

// reading file
getData;
// .then((response) => response.json())
// .then((contents) => {
// 	// Do something with the contents of the file
// 	console.log(contents[1]);
// })
// .catch((error) => {
// 	// Handle errors
// 	console.error('Error loading file: ' + error);
// });

// search for study rooms
inputSearch.addEventListener('submit', (event) => {
	event.preventDefault();
	const data = Object.fromEntries(new FormData(event.target).entries());
	getData
		.then((response) => response.json())
		.then((contents) => {
			contents.forEach((content) => {
				if (
					data['search'].toLowerCase() ==
					content['roomName'].toLowerCase()
				) {
					console.log('found!!');
				} else {
					console.log('search not found');
				}
			});
		});
	inputSearch.reset();
	return false;
});

// join a room and show if user has joined a room
joined.forEach((join) => {
	join.addEventListener('click', (event) => {
		event.target.parentElement.style.visibility = 'hidden';
		joinedShow.forEach((joinedParagraph) => {
			joinedParagraph.style.visibility = 'visible';
			for (let i = 0; i < joinedParagraph; i++) {
				if (join[i] == event.currentTarget) {
					joinedParagraph[i].style.visibility = 'hidden';
				}
			}
		});
		for (let i = 0; i < join.length; i++) {
			if (join[i] !== event.target) {
				join[i].style.visibility = 'visible';
			}
		}
		// console.log('clicked');
		// join.style.visibility = 'hidden';
		// joinedShow.forEach((joinedParagraph) => {
		// 	joinedParagraph.style.visibility = 'visible';
		// });
	});
});

document.body.addEventListener('click', function (event) {
	// Check if a div element was clicked
	if (event.target.classList.contains('myDiv')) {
		// Show the clicked div element
		event.target.style.display = 'block';
		// Hide the other div elements
		for (var i = 0; i < divs.length; i++) {
			if (divs[i] !== event.target) {
				divs[i].style.display = 'none';
			}
		}
	}
});
