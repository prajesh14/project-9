var Ball = {
  x:20,
  y:30,
  r:20,
  xspeed:0,
  yspeed:0,
  color:["red","blue","green"]

}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(Ball.x,Ball.y,Ball.r)
  fill (Ball.color[1])
  Ball.xspeed = 1
  Ball.x = Ball.x + Ball.xspeed



}