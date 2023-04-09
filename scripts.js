let grid = document.querySelector('.pad');
function createGrid(){ 
for (let i=0;i<16*16;i++){
    const cell = document.createElement('div');
    grid.appendChild(cell);
    cell.addEventListener('mouseover', function(){
        cell.style.backgroundColor='black';
    })
}};

const choose = document.querySelector('.choose');
choose.addEventListener('click', createGrid); 






















const reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{
    document.location.reload();
}); 






