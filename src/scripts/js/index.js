// query selectors
const toggleMenu = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu__user");
const inputSearch = document.querySelector("form");
const joined = document.querySelectorAll(".form");
const joinedShow = document.querySelectorAll(".join p");
const join__form = document.querySelector(".join__form");

import axios from 'axios'

// show home/profile menu
toggleMenu.addEventListener("click", (event) => {
	menu.classList.toggle("menu__user__show");
});

const sendHttpRequest = (method, url, data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: data ? {'Content-Type': 'application/json'} : {}
 	}).then(response => {
		return response.json();
	})
}

const getRooms = async (url) => {
	try {
		const response = await axios.get(url);
		console.log(response.data)
	} catch (error) {
		console.log(error);
	}
}

getRooms('http://127.0.0.1:/api/v1/room/rooms')

// search for study rooms
inputSearch.addEventListener("submit", (event) => {
	event.preventDefault();
	getResponse().then((contents) => {
		contents.forEach((content) => {
			const dataLowerCase = data["search"].toLowerCase();
			const contentLowerCase = content["roomName"].toLowerCase();
			if (dataLowerCase == contentLowerCase) return "found";
			return "search not found";
		});
	});
	inputSearch.reset();
	return false;
});

// join a room and show if user has joined a room
joined.forEach((join) => {
	join.addEventListener("click", (event) => {
		event.preventDefault();
		event.target.parentElement.style.display = "none";
		let joinedParagraph;
		for (let paragraph in joinedShow) {
			let promptParagraph = event.currentTarget.nextSibling.nextSibling;
			if (promptParagraph == joinedShow[paragraph]) {
				promptParagraph.style.visibility = "visible";
				let interestData = event.currentTarget;
			}
			joinedParagraph = event.currentTarget;
		}

	});
});


