let strokeWidth = 10;
let colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
let colorIndex = 0;

function setup() 
{
  createCanvas(400, 400);
  slider = createSlider(1, 20, 5);
  slider.position(10, height + 5);
  slider.style('width', '80px');
  background(255);
}

function draw() 
{
  let strokeWidth = slider.value();
  if (mouseIsPressed) 
  {
    strokeWeight(strokeWidth);
    stroke(colors[colorIndex]);
    line(mouseX, mouseY, pmouseX, pmouseY);
    colorIndex = (colorIndex + 1) % colors.length;
  }
}

function keyPressed() 
{
  if (key == 'r') 
  {
    background(255);
    strokeWidth = 20;
    colorIndex = 0;
  }
}