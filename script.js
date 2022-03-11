const container = document.querySelector('#container');
let size = getComputedStyle(document.querySelector(':root')).getPropertyValue('--size');
let root = document.querySelector(':root');

// create 100 grids, give them 'grid' class, and add an event so that their background changes to black
// when the mouse hovers over the grid.


for (i=0; i < (size*size); i++){

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

grid.addEventListener("mouseenter", function(e) {
    e.target.style.background = "black";
})

}

let gridNode = document.getElementsByClassName('grid');

const clearBtn = document.querySelector('#clear-button')

clearBtn.addEventListener('click', function (e){
    
    for( let i = 0; i < gridNode.length; i++){
        gridNode[i].style.background = "rgb(201, 180, 221)";
    }

});

const sizeBtn = document.querySelector('#size-button')
let newSize = 0;

sizeBtn.addEventListener('click', function (e){
    
    while (newSize < 10 || newSize > 100){
        newSize = prompt("Please enter the new size \nSize has to be between 10-100")
        root.style.setProperty('--size', newSize);
    }

    
    while(gridNode[0]){
        gridNode[0].parentNode.removeChild(gridNode[0])
    }

    size = getComputedStyle(document.querySelector(':root')).getPropertyValue('--size');

    for (i=0; i < (size*size); i++){

        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        
        grid.addEventListener("mouseenter", function(e) {
            e.target.style.background = "black";
        })
        
    }

    newSize = 0;

});