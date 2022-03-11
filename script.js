const container = document.querySelector('#container');


// create 100 grids, give them 'grid' class, and add an event so that their background changes to black
// when the mouse hovers over the grid.
for (i=0; i < 100; i++){

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