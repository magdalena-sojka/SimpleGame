var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'nożyce';
} else if (randomNumber == '3') {
  computerMove = 'papier';
}
printMessage('Mój ruch: ' + computerMove);
computerMove = 'nieznany ruch';