function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log ('wylosowana liczba to: ' + randomNumber) ;

let computerMove = 'nieznany ruch' ;

if(randomNumber == 1) {
   computerMove = 'kamień';
   }
   else if (randomNumber == 2) {
   computerMove = 'papier';
   }
   else {
	   computerMove = 'nożyce' ;
   }
	
 printMessage ('Mój ruch to:' + computerMove);

 let playerInput = prompt ('wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');

 console.log('gracz wpisał: ' + playerInput);

 let playerMove = 'nieznany ruch';

 	if (playerInput == '1') {
		 playerMove = 'kamień';
 	}
	else if (playerInput == '2'){
		 playerMove = 'papier';
	}
	else if (playerInput == '3'){
		 playerMove = 'nożyce';
	 
	}
	
 printMessage ('twój ruch to:' + playerMove);

 if ( computerMove == 'kamień' && playerMove == 'papier'){
 printMessage ('Wygrałeś');
 }
else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
printMessage('przegrałeś');
}
else if ( computerMove == 'kamień' && playerMove == 'kamień'){
printMessage('remis');
}
else if ( computerMove == 'papier' && playerMove == 'kamień'){
printMessage('przegrałeś');
}
else if ( computerMove == 'papier' && playerMove == 'papier'){
printMessage('remis');
}
else if ( computerMove == 'papier' && playerMove == 'nożyce'){
printMessage('Wygrałeś');
}
else if ( computerMove == 'nożyce' && playerMove == 'kamień'){
printMessage('wygrałeś');
}
else if ( computerMove == 'nożyce' && playerMove == 'papier'){
printMessage('przegrałeś');
}
else if ( computerMove == 'nożyce' && playerMove == 'nożyce'){
printMessage('remis');
}
else {
	printMessage('coś poszło nie tak, spróbuj jeszcze raz wpisując poprawną wartość');
}
	
