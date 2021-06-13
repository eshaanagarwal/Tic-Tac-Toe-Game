const singlePlayerX = document.getElementById('sx')
const singlePlayerO = document.getElementById('so')
const doublePlayerX = document.getElementById('dx')
const doublePlayerO = document.getElementById('do')
const computerFirst = document.getElementById('cf')
const humanFirst = document.getElementById('hf')
const playbtn=document.getElementById('playButton')
const player1Id = document.getElementById('pName');
const player2Id = document.getElementById('pNamen');
const chosingMessage1Element = document.getElementById('chosingMessage1');
const statusDisplay = document.querySelector('.game--status');
const titleDisplay = document.querySelector('.game--title');


let mode;
let currentPlayer = "X";
let turn= false; ;
var opponent;
var computer;
var player;
var player2
var p1;
var p2;
window.onload=function(){
  singlePlayerX.addEventListener("click",function(){
    opponent="computer";
    p1="X";
    computer="O";
    p2="O";
    player =prompt("Please enter P1's Name");
    player2='Computer';
})
singlePlayerO.addEventListener("click",function(){
    opponent="computer";
    p1="O";
    computer="X";
    p2="X"; 
    player=prompt("Please enter P1's Name");
    player2='Computer';
})
doublePlayerX.addEventListener("click",function(){
    opponent="friend"; 
    p1="X";
    computer="O";
    p2="O";
    player=prompt("Enter P1's Name");
    
    player2=prompt("Enter P2's Name");   
})
doublePlayerO.addEventListener("click",function(){
    opponent="friend";
    p1="O";
    computer="X";
    p2="X"; 
    player=prompt("Enter P1's Name");
    player2=prompt("Enter P2's Name");   
})

computerFirst.addEventListener("click",function(){
  turn=true;
  
})
humanFirst.addEventListener("click",function(){
  turn=false;
  
})



playButton.addEventListener("click",function(){
  if(!opponent){
      alert("Select required option");
      return;
  }  
  if(!p1){
    alert("Select required option");
    return;
}
      if(opponent== "computer")
      {
        single(p1,player,player2,turn);
        console.log(opponent);
        console.log(player,player2);
        
      }
      else{
        doublePlayer(p1,p2,opponent,player,player2);
        console.log(opponent);
        console.log(player,player2);


      }
   
    chosingMessage1Element.classList.add("hide");
})
}
