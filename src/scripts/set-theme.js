let bodyTheme = document.body;
let modeButton = document.getElementById("mode-toggle");
let endSquare = document.getElementById("end-square");

function setTheme() {
	if (localStorage.getItem("theme") === null) {
		localStorage.setItem("theme", "light");
		modeButton.innerText = "🌙";
		endSquare.innerText = "⬛";
	} else if (localStorage.getItem("theme") === "light") {
		modeButton.innerText = "🌙";
		endSquare.innerText = "⬛";
	} else if (localStorage.getItem("theme") === "dark") {
		bodyTheme.classList.toggle("dark-mode");
		modeButton.innerText = "☀️";
		endSquare.innerText = "⬜";
	}
}

setTheme();