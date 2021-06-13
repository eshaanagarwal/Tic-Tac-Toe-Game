function doublePlayer(p1,p2,opponent,player,player2) {
    document.getElementById("restart").style.display = "initial";
    document.getElementById("resetScore").style.display = "initial";
    document.getElementById("owin").style.display = "initial";
    document.getElementById("xwin").style.display = "initial";
    let currentPlayer = p1;
    let gameAct = true;
    let gameState = ["", "", "", "", "", "", "", "", ""];
    let turnName= player;
    let p1s = 0;
    let p2s = 0;
    console.log("In the second game");
    console.log(p1s,p2s);
    var scoreText;
    const winningMessage = () => `Congratulations ! ${turnName} has won. ${player}'s points are ${p1s} and ${player2}'s points are ${p2s}.`;
    const drawMessage = () => `Game ended in a draw!`;
    const currentPlayerTurn = () => `It's ${turnName}'s turn`;
    const player2Score = ()  => `${player2} won  `;
    const player1Score = ()  => `${player} won  `;
    player1Id.innerHTML= player1Score();
    player2Id.innerHTML= player2Score();
    statusDisplay.innerHTML = currentPlayerTurn();
  
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];
  function scoreX(xPlayer) {
    return xPlayer;
  }
  function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
  }
  function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if(currentPlayer==p1){
     turnName=player;
    }
    else{
      turnName=player2;
    }
    statusDisplay.innerHTML = currentPlayerTurn();
  }
  
  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
  
    if (roundWon) {
      
       if(currentPlayer === p1)
        {
        p1s++;
        document.getElementById("o_win").innerHTML = scoreX(p1s);
        }
        else{
          p2s++;
          document.getElementById("x_win").innerHTML = scoreX(p2s);
  
        }
            
        statusDisplay.innerHTML = winningMessage();
        
        gameAct = false;
        return;
    }
  
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameAct = false;
        return;
    }
  
    handlePlayerChange();
  }
  
  function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
  
    if (gameState[clickedCellIndex] !== "" || !gameAct) {
        return;
    }
  
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
  }
  function handleRestartGame() {
    gameAct = true;
    currentPlayer = p1;
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
  }
  function handleForceRestartGame() {
    gameAct = true;
    currentPlayer = p1;
    gameState = ["", "", "", "", "", "", "", "", ""];
    p1s=0;
    p2s=0;
    document.getElementById("x_win").innerHTML = scoreX(p1s);
    document.getElementById("o_win").innerHTML = scoreX(p2s);
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
  }
  function menuMode(){
    chosingMessage1Element.classList.remove("hide");
    console.log(opponent);
    console.log(p1);
    gameAct = false;
    currentPlayer = p1;
    gameState = ["", "", "", "", "", "", "", "", ""];
    p1s=0;
    p2s=0;
    document.getElementById("x_win").innerHTML = scoreX(p1s);
    document.getElementById("o_win").innerHTML = scoreX(p2s);
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
      
  }
  document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
  document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
  document.querySelector('.game--forcerestart').addEventListener('click', handleForceRestartGame);
  document.querySelector('.game--menu').addEventListener('click', menuMode);
  
  }
  
  
  function single(p1,player,player2,turn) {
    document.getElementById("restart").style.display = "none";
    document.getElementById("resetScore").style.display = "none";
    document.getElementById("owin").style.display = "none";
    document.getElementById("xwin").style.display = "none";
    statusDisplay.innerHTML = ``;
    titleDisplay.innerHTML = `${player} V/s Unbeatable AI`;
    let mark ;
    const cellElements = document.querySelectorAll('.cell');
    if(p1==='X')
    {
      mark='x';
    }else{
      mark='circle';
    }
    let winner;
    console.log(p1);
    let gameActive = true;
    const winCombi = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    console.log("inside single");
    const winningMessage = () => `${winner}  has won!`;
    const drawMessage = () => `Game ended in a draw!`;
    const player1Score = ()  => `${player} won  `;
      const player2Score = ()  => `${player2} won  `;
    player1Id.innerHTML= player1Score();
    player2Id.innerHTML= player2Score();
    let p1s=0;
    let p2s=0;
    function scoreX(xPlayer) {
      return xPlayer;
    }
  console.log(turn);
  start();
  console.log("start function used");
  
    
  
  
    function handleClick(e) {
        const cell = e.target;
        if (!gameActive) {
          return;
      }
  
        humanTurn(mark, cell);
        mark = mark == 'x' ? 'circle' : 'x';
        console.log("mark exchanged after human turn");
        if(gameActive===true){
        botTurn(mark);
        mark = mark == 'x' ? 'circle' : 'x';
        console.log("mark exchanged after bot turn");
        }
  
    }
  
    function humanTurn(mark, cell) {
  
        cell.classList.add(mark);
        console.log(mark);
        console.log("added human response");
        checkResultHuman(mark);
  
  
    }
  
    function botTurn(mark) {
        let bestScore = -Infinity;
        var index;
        for (var i = 0; i < 9; i++) {
            if (cellElements[i].classList.value === 'cell') {
                console.log("FOUND EMPTY");
  
                cellElements[i].classList.add(mark);
                let score = minimax(cellElements, 0, false);
                cellElements[i].classList.remove(mark);
                console.log(score)
                if (score > bestScore) {
                    bestScore = score;
                    index = i;
                    
                }
  
  
  
            }
        }
  
        cellElements[index].classList.add(mark);
        cellElements[index].removeEventListener('click',handleClick);
        checkResultBot(mark);
    }
  
  
    function minimax(cellElements, depth, isMaximizing) {
  
        if (((winCombi.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(mark)
            })
        })))) {
            return 1;
        }
        else if (((winCombi.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(mark == 'circle' ? 'x' : 'circle')
            })
        }))))
        return -1;
        else if ([...cellElements].every(cell => {
            return cell.classList.contains("x") || cell.classList.contains("circle")
        })) {
            return 0;
        }
        
  
        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
  
                // Is the spot available?
                if (cellElements[i].classList.value === 'cell') {
                    cellElements[i].classList.add(mark);
                    let score = minimax(cellElements, depth + 1, false);
                    cellElements[i].classList.remove(mark);
  
                    bestScore = (score > bestScore) ? score : bestScore;
                }
  
            }
  
            return bestScore;
        }
        else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
  
                // Is the spot available?
                if (cellElements[i].classList.value === 'cell') {
                    cellElements[i].classList.add(mark == 'circle' ? 'x' : 'circle');
                    let score = minimax(cellElements, depth + 1, true );
                    cellElements[i].classList.remove(mark == 'circle' ? 'x' : 'circle');
  
                    bestScore = (score < bestScore) ? score : bestScore;
                }
  
            }
  
            return bestScore;
        }
    }
  
  
  
  
  
  
  
  
    function checkResultHuman(mark) {
        if (checkWin(mark)) {
          winner=player;
          p1s++;
        document.getElementById("x_win").innerHTML = scoreX(p1s);
          statusDisplay.innerHTML = winningMessage();
                
          gameActive = false;
          return;
            
        }
        else if (isDraw(mark)) {
          statusDisplay.innerHTML = drawMessage();
          gameActive = false;
          return;
        }
  
    }
  
    function checkResultBot(mark) {
        if (checkWin(mark)) {
           winner='computer';
           p2s++;
          document.getElementById("x_win").innerHTML = scoreX(p2s);
            statusDisplay.innerHTML = winningMessage();
                
                gameActive = false;
                return;
            
        }
        else if (isDraw(mark)) {
  
            statusDisplay.innerHTML = drawMessage();
            gameActive = false;
            return;
            
        }
    }
  
    function checkWin(mark) {
  
  
        return ((winCombi.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(mark)
            })
        })));
    }
    function isDraw() {
  
        return [...cellElements].every(cell => {
            return cell.classList.contains("x") || cell.classList.contains("circle")
        })
  
    }
  
    function handleRestartGame() {
      gameActive = true;
      
      if(p1==='X')
    {
      mark='x';
    }else{
      mark='circle';
    }
      cellElements.forEach(cell => {
        cell.classList.remove("circle");
        cell.classList.remove("x");
        cell.removeEventListener('click', handleClick);
        
      });
      start();
       
    }
    function handleForceRestartGame() {
      gameActive = true;
      if(p1==='X')
    {
      mark='x';
    }else{
      mark='circle';
    }
    p1s=0;
    p2s=0;
    document.getElementById("x_win").innerHTML = scoreX(p1s);
    document.getElementById("o_win").innerHTML = scoreX(p2s);
      cellElements.forEach(cell => {
        cell.classList.remove("circle");
        cell.classList.remove("x");
        cell.removeEventListener('click', handleClick);
        start();
  
    });  
    }
    function menuMode(){
      chosingMessage1Element.classList.remove("hide");
      console.log(opponent);
      console.log(p1);
      gameActive = true;
  
      p1s=0;
      p2s=0; 
      document.getElementById("x_win").innerHTML = scoreX(p1s);
    document.getElementById("o_win").innerHTML = scoreX(p2s); 
      cellElements.forEach(cell => {
        cell.classList.remove("circle");
        cell.classList.remove("x");
        cell.removeEventListener('click', handleClick);
  
  
    });
        
    }
    function start(){
    
    cellElements.forEach(cell => {
      if(turn===true){
        console.log(turn);
        cell.classList.add(mark == 'circle' ? 'x' : 'circle');
        turn =false;
      }
        cell.addEventListener('click', handleClick);
    });
    }
    document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
    document.querySelector('.game--forcerestart').addEventListener('click', handleForceRestartGame);
    document.querySelector('.game--menu').addEventListener('click', menuMode);
    
  
  
  
  
  }
    
  
    
  
  
  
  