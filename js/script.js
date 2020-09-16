{
  const playGame = function(playerInput){

    clearMessages();

    const getMoveName = function(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      } else if(argMoveId == 2){
        return 'papier';
      } else if(argMoveId == 3){
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
  
    console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove);

    console.log('Gracz wpisał: ' + playerInput);

    const argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);

    const displayResult = function(argComputerMove, argPlayerMove){
      console.log('moves:', argComputerMove, argPlayerMove);
      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz!';
      } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        return 'Mamy remis!';
      } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return 'Ja wygrywam!';
      } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        return 'Mamy remis!';
      } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return 'Ja wygrywam!';
      } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Ty wygrywasz!';
      } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return 'Ja wygrywam!';
      } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz!';
      } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        return 'Mamy remis!';
      } else {
        return 'Nie wybrałeś ruchu zgodnie z poleceniem, musimy zacząć od początku!';
      }
    }

    printMessage('REZULTAT: ' + displayResult(argComputerMove, argPlayerMove));

  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

}