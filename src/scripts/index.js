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

			function toggleTheme() {
				if (localStorage.getItem("theme") === "light") {
					bodyTheme.classList.toggle("dark-mode");
					localStorage.setItem("theme", "dark");
					toggleUi();
				} else if (localStorage.getItem("theme") === "dark") {
					bodyTheme.classList.toggle("dark-mode");
					// modeButton.innerText = "🌙";
					localStorage.setItem("theme", "light");
					toggleUi();
				}
			}

			function toggleUi() {
				if (modeButton.innerText === "🌙") {
					modeButton.innerText = "☀️";
				} else if (modeButton.innerText === "☀️") {
					modeButton.innerText = "🌙";
				}

				console.log(endSquare.innerText);
				if (endSquare.innerText === "⬛") {
					endSquare.innerText = "⬜";
				} else if (endSquare.innerText === "⬜") {
					endSquare.innerText = "⬛";
				}
			}

			modeButton.addEventListener("click", toggleTheme);