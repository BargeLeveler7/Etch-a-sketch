let container = document.getElementById('container');
let numSquares = 32;
let timesHovered = 0;
let rainbow = false;
createBoard();

$('.reset').on('click', function() {
	// clear the grid
	clearBoard();
	// ask how many squares for the new board
	askUser();
});

$('.rainbow').on('click', function() {
	$(this).toggleClass('selected');
	clearBoard();
	rainbow = !rainbow;
	createBoard();
});

function createBoard() {
	for (x = 0; x < numSquares; x++) {
		for (i = 0; i < numSquares; i++) {
			let div = document.createElement('div');
			div.classList.add('square');
			div.style.width = 100 / numSquares + '%';
			div.style.height = 500 / numSquares + 'px';
			div.style.background = 'rgba(50,50,150,0.5)';
			div.style.margin = '0';
			div.style.float = 'left';
			div.style.padding = '0';

			container.appendChild(div);
		}
	}
	$('.square').on('mouseenter', function() {
		if (timesHovered > 200) {
			console.log("you've hovered a lot!");
		}
		if (!rainbow) {
			$(this).css('background-color', 'whitesmoke');
		} else {
			$(this).css('background-color', randomColor());
		}
		timesHovered++;
	});
}

function askUser() {
	let num = prompt('How many squares per side would you like? (1-64)');
	// check that the number works
	if (num >= 1 && num <= 64) {
		numSquares = num;
		createBoard();
		return;
	} else {
		alert('Whoops! Your selection must be between 1-64.');
		askUser();
	}
}

function clearBoard() {
	$('.square').remove();
}

function randomColor() {
	// pick a random rgb color
	var red = Math.floor(Math.random() * 100 + 156);
	var green = Math.floor(Math.random() * 100 + 156);
	var blue = Math.floor(Math.random() * 100 + 156);
	var randomColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
	return randomColor;
}
