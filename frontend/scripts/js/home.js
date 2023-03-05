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

// search for study rooms
inputSearch.addEventListener('submit', (event) => {
	event.preventDefault();
	const data = Object.fromEntries(new FormData(event.target).entries());
	getData
		.then((response) => response.json())
		.then((contents) => {
			contents.forEach((content) => {
				console.log(getData);
				const dataLowerCase = data['search'].toLowerCase()
				const contentLowerCase = content['roomName'].toLowerCase()
				if (dataLowerCase == contentLowerCase) return 'found';
				return 'search not found';
			});
		}).catch(error => {
			console.log('Error loading file: ' + error);
		});
	inputSearch.reset();
	return false;
});

// join a room and show if user has joined a room
joined.forEach((join) => {
	join.addEventListener('click', (event) => {
		event.preventDefault();
		event.target.parentElement.style.visibility = 'hidden';
		for (paragraph in joinedShow) {
			let promptParagraph = event.currentTarget.nextSibling.nextSibling
			if (promptParagraph == joinedShow[paragraph]) {
				promptParagraph.style.visibility = 'visible';
				let interestData = event.target.parentElement.parentElement.parentElement.parentElement;
				console.log(interestData);
			}
			joinedParagraph = event.currentTarget.nextSibling;
		}
	})
});
