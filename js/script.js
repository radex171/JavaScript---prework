const playGame = function (playerInput)
{ 
	clearMessages();

	const printMessage = function(msg){
			var div = document.createElement('div');
			div.innerHTML = msg;
			document.getElementById('messages').appendChild(div);
	}

	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}

	const getMoveName = function (argMoveId){
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

	const randomNumber = Math.floor(Math.random() * 3 + 1);

	const argComputerMove = getMoveName(randomNumber) ;

	const argPlayerMove = getMoveName(playerInput);

	console.log('moves:', argComputerMove, argPlayerMove);

	const displayResult = function (argComputerMove, argPlayerMove){
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

	const rock = document.getElementById('rock');{
	rock.addEventListener('click', function(){
	playGame(1);
	});};
	const paper = document.getElementById('paper');{
		paper.addEventListener('click', function(){
		playGame(2);
	});};
	const scissors = document.getElementById('scissors');{
		scissors.addEventListener('click', function(){
		playGame(3);
	});
}
