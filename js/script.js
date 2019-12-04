function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

 let computerMove = `kamień` ;
 let playerMove = `papier`;

 printMessage (`Zagrałem ` +computerMove + `! jeśli twój ruch to papier, to wygrywasz`);