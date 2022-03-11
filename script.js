const container = document.querySelector('#container');


for (i=0; i < 100; i++){

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

grid.addEventListener("mouseenter", function(e) {
    e.target.style.background = "black";
})

}
