let cells = document.querySelectorAll("[data-cell]");
const winMessage = document.getElementById('displayResult');
const cellsArray = Array.from(cells);

let board = ['', '', '', '', '', '', '', '', ''];
let xMark='<i class="fa-solid fa-xmark"></i>';
let oMark='<i class="fa-solid fa-o"></i>';

const xPlayer = document.getElementById('playerX');
const oPlayer = document.getElementById('playerO');

function getVal(val){
  
  switch(val){
    case xPlayer:
      val=xPlayer.value
    break;
    case oPlayer:
      val=oPlayer.value  
    break;
    default:  
  }
  return val;
  
}
getVal()

let tie='Tie'



let activateGame = true;
let currentPlayer = xMark;


/////////////     All probabilities of winning //////////////////////

let winConditions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];




// this will give each element an event listener
cells.forEach((cell,i)=>{
  cell.addEventListener('click',() => game(cell,i));
})


function handleclick() {
 
  let round = false;

  for(let i=0;i<=7;i++){
      const winCon = winConditions[i];
      const a = board[winCon[0]];
      const b = board[winCon[1]];
      const c = board[winCon[2]];

    if(a==='' || b===''  || c===''){
      continue;
    }if(a == b && b == c){
      round = true;
      break;
    }  
  
    }if(round){
     showResult(currentPlayer === xMark? xPlayer : oPlayer);
      activateGame = false;
      return;
    }
    
    if(!board.includes(''))
    showResult(tie);

}



const showResult=(playerType)=>{

  switch(playerType){
   
    case xPlayer:
     
      winMessage.innerHTML=`<h4>Congratulation</h4>
                            <p>${getVal(xPlayer)} is a winner</p>
                            <p>click replay for another round</p>`;
      break;                      

    case oPlayer:
      
      winMessage.innerHTML=`<h4>Congratulation</h4>
                            <p>${getVal(oPlayer)} is a winner</p>
                            <p>click replay for another round</p>`
     break; 
    case tie:
     
      winMessage.innerHTML=`<h3>It's a daw</h3>`
    }
  winMessage.classList.toggle('show');
}

const updateBoard =  (i) => {
  board[i] = currentPlayer;
}

function isAction() {
  return cellsArray.every(cell => {
    return cell.classList.contains(xMark) || cell.classList.contains(oMark)
  })
}

const activeCell = (cell)=>{
  if(cell.innerHTML === xMark || cell.innerHTML === oMark){
    return false;
  }
  return true;
};


function playerPick(){
  
  currentPlayer = currentPlayer===xMark?oMark:xMark;
 
}

function game(cell,i){
  if(activeCell(cell) && activateGame){
    cell.innerHTML=currentPlayer;
    updateBoard(i);
    handleclick();
    playerPick();
  }
}





function clean() {

  board = ['', '', '', '', '', '', '', '', ''];
   activateGame = true;

   if(currentPlayer===oMark){
     playerPick();
   }
   cells.forEach(cell=>{
     cell.innerHTML='';


   })

  winMessage.classList.toggle('show');
  
}

// Try the most easy
// DRY : don't repeat yorself
// check for back practice
// emprove your app





