let cells = document.querySelectorAll("[data-cell]");
const winMessage = document.getElementById('displayResult');
const cellsArray = Array.from(cells);

let board = ['', '', '', '', '', '', '', '', ''];
let xMark='<i class="fa-solid fa-xmark"></i>';
let oMark='<i class="fa-solid fa-o"></i>';

let xPlayer='X player';
let oPlayer='O player';
let tie='Tie'



let activateGame = true;
let currentPlayer = xMark;




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
      console.log(a)
      const b = board[winCon[1]];
      const c = board[winCon[2]];

    if(a==='' || b===''  || c===''){
      continue;
    }if(a == b && b == c){
      round = true;
      break;
    }  
  
    }if(round){
     showResult(currentPlayer === xMark?xPlayer : oPlayer);
      activateGame = false;
      return;
    }
    
    if(!board.includes(''))
    showResult(tie);

}



const showResult=(playerType)=>{

  switch(playerType){
   
    case xPlayer:
     
      winMessage.innerHTML=`<h3>Congratulation</h3>
                            <p>${xPlayer} is a winner</p>
                            <p>click replay for another round</p>`;
      break;                      

    case oPlayer:
      
      winMessage.innerHTML=`<h3>Congratulation</h3>
      <p>${oPlayer} is a winner</p>
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
   winMessage.classList.toggle('show');

   if(currentPlayer===oMark){
     playerPick();
   }
   cells.forEach(cell=>{
     cell.innerHTML='';
     cell.classList.remove('playerX');
     cell.classList.remove('playerO'); 

   })

  
}

// Try the most easy
// DRY : don't repeat yorself
// check for back practice
// emprove your app




function computerChoice(){
  let choice = Math.floor(Math.random()*9)

  switch(choice){
    case 1:
      return cells[0];
    case 2:
      return cells[1];
    case 3:
      return cells[2];
    case 4:
      return cells[3];
      case 5:
      return cells[4]      
      case 6:
      return cells[5]
      case 7:
        return cells[6]     
        case 8:
          return cells[7]    
          case 9:
       return cells[8]        
  }  
  check(xMark);
  check(oMark);

}



