alert("please make sure you resize the grid  before using it, thank you :)")



let gridSize=0;
let container = document.querySelector('.pad');
container.style.display = "grid";
let button1 = document.querySelector('.choose');
let button2 = document.querySelector('.eraser');
let button3 = document.querySelector('.rainbow');
let resetButton = document.getElementById('reset');

function updateSize(val) {
    container.innerHTML=''; 
    gridSize= document.getElementById('resize').textContent = val;     
    container.style.gridTemplateColumns = `repeat(${gridSize},  minmax(0, 1fr))`;
    container.style.gridTemplateRows = `repeat(${gridSize},  minmax(0, 1fr))`;  
   drawGrid(val);
   return gridSize;
   }
   

function drawGrid(){
    for(let i=0;i<gridSize * gridSize;i++){
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('box');
        div.addEventListener('mouseover', function(){
          div.style.backgroundColor='black';
        });
        button1.addEventListener('click',function(){
            div.addEventListener('mouseenter',()=>{
                div.style.backgroundColor='blue';
            })
        });
        button2.addEventListener('click',function(){
            div.addEventListener('mouseenter',()=>{
                div.style.backgroundColor='white';
            })
        });
         


    }}
 

resetButton.addEventListener('click',()=>{
    document.location.reload();
});      