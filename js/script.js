
function playGame (playerInput){
clearMessages();
	function printMessage(msg){
		var div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}

	function getMoveName(argMoveId){
		if(argMoveId == 1){
		return 'kamień';
		}
		else if(argMoveId == 2){
			return 'papier';
		}
		else if(argMoveId == 3){
		return 'nożyce';
		}
		else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
		}
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	let argComputerMove = getMoveName(randomNumber) ;

	let argPlayerMove = getMoveName(playerInput);

	console.log('moves:', argComputerMove, argPlayerMove);

	function displayResult(argComputerMove, argPlayerMove){
		printMessage ('Zagrałem ' + argComputerMove + ', Twój wybór to: ' + argPlayerMove);

		if ( argComputerMove === argPlayerMove) {
			return 'remis';
		}

		else if (( argComputerMove ==='nożyce' && argPlayerMove === 'kamień') ||
		( argComputerMove ==='papier' && argPlayerMove === 'nożyce') ||
		( argComputerMove ==='kamień' && argPlayerMove === 'papier')) {
			return 'wygrałeś!';
		}

		else {
			return 'przegrałeś :( - spróbuj ponownie';
		}	
	}

	printMessage (displayResult(argComputerMove, argPlayerMove));
};
document.getElementById('rock').addEventListener('click', function(){
	playGame(1);
});
document.getElementById('paper').addEventListener('click', function(){
	playGame(2);
});
document.getElementById('scissors').addEventListener('click', function (){
	playGame(3);
});