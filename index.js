
// create boardstate of [[q,w,e],[a,s,d],[z,x,c]]
// create playerstate of "x"
// create move counter to check for stalemate after 9 moves with no winner

//prompts player to move using qweasdzxc to pick cells
  //accept inputs from qweasdzxc to choose cell to place players selection
  //movecounter %2 === 0 means x player, others are 'o's
  //increment move counter
//after each move check win conditions to see if a player has won
  //if no win yet continue on with prompting player to move


//checkWin = function() {
  //if each in matrix[i] === player
  //if matrix[sameInt][j] === player 
  //if matrix[0[0]] matrix[1[1]] matrix[1[1]] === player
  //if matrix[0[2]] matrix[1[1]] matrix[2[0]] === player
//}

//checkIf

var TicTacToe = function() {
  this.boardState = [[(q),(w),(e)],[(a),(s),(d)],[(z),(x),(c)]];
  this.playerState = 'x';
  this.moveCounter = 0;

}