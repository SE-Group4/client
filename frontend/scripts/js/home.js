// query selectors
const toggleMenu = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu__user');
const inputSearch = document.querySelector('form');
const joined = document.querySelectorAll('.join form');
console.log(joined);
const joinedShow = document.querySelector('.join__paragraph');
const join__form = document.querySelector('.join__form');

// show home/profile menu
toggleMenu.addEventListener('click', (event) => {
	menu.classList.toggle('menu__user__show');
});

// reading file
// fetch('/frontend/data/chatRooms.json')
// 	.then((response) => response.json())
// 	.then((contents) => {
// 		// Do something with the contents of the file
// 		console.log(contents);
// 	})
// 	.catch((error) => {
// 		// Handle errors
// 		console.error('Error loading file: ' + error);
// 	});

// search for study rooms
// inputSearch.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	const data = Object.fromEntries(new FormData(event.target).entries());
// 	console.log(data);
// 	inputSearch.reset();
// 	return false;
// });

// join a room and show if user has joined a room
// joined.forEach((join) => {
// 	join.addEventListener('click', (event) => {
// 		console.log('clicked join');
// 	});
// });
