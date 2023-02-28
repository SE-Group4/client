// query selectors
const toggleMenu = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu__user');
const inputSearch = document.querySelector('form');
const joined = document.querySelectorAll('.join form');
const joinedShow = document.querySelector('.join__paragraph');
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
				}
			});
		});
	inputSearch.reset();
	return false;
});

// join a room and show if user has joined a room
// joined.forEach((join) => {
// 	join.addEventListener('click', (event) => {
// 		console.log('clicked join');
// 	});
// });
