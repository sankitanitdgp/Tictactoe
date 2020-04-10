

// Restart Game Button
console.log('connected');
var restart = document.querySelector('#b');

// Grabs all the squares
var squares = document.querySelectorAll('td');

// Clear all the squares
function clearBoard() {
	// body...
	for (var i = 0; i < squares.length; i++) {
		squares[i].textContent = '';
	}
	
}

restart.addEventListener('click',clearBoard);

// Check the square marker

function changemarker(){
	if(this.textContent===''){
		this.textContent='X';
	}else if(this.textContent==='X'){
		this.textContent='O';
	}else{
		this.textContent='';
	}
}

for(let i=0;i<squares.length;i++){
	squares[i].addEventListener('click',changemarker); 
}


// For loop to add event listeners to all the sqquares