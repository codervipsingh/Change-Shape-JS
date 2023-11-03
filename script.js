const container = document.getElementById('container');
const colorBtn = document.getElementById('colorBtn');
const shapeBtn = document.getElementById('shapeBtn');

const colors= ['red', 'aqua', 'orange','pink', 'yellow'];

const triangle =  document.querySelector('.triangle-right');
const triangleR =  document.querySelector('.triangle-down');

const square =  document.querySelector('.square');

const circle =  document.querySelector('.circle');



function changeColor(e){
    container.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}
colorBtn.addEventListener('click', changeColor);




// function call for shape

function generateShapes() {
    const container = document.getElementById("container");

    // Create a new shape
    const shape = document.createElement("div");
    shape.className = "shape";

    //andomly choo of the 
    const shapeClasses = ["circle", "square", "triangle-right" ,"triangle-down"];
    const randomShapeClass = shapeClasses[Math.floor(Math.random() * shapeClasses.length)];
    shape.classList.add(randomShapeClass);

    // Append the shape to the container
    container.innerHTML = "";
    container.appendChild(shape);
    // Toggle visibility to "block"
    shape.style.display = "block";
    // shapeCount++;
}

shapeBtn.addEventListener("click", generateShapes);


