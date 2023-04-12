let gridSize=0;
let container = document.querySelector('.pad');
container.style.display = "grid";


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
            div.style.backgroundColor ='black';
        });
    };    
}
 



//let buttons= document.querySelectorAll('button');
/*button.forEach(buttons,()=>{
    
})*/



