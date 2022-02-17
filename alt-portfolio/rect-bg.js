var canvas = document.getElementById('rect-bg');
var a = 1;

function setup() {
  rectMode(CENTER);
  createCanvas(1366, 1200);
}

function draw() {
  background('#121516');
  noStroke();
  fill('#171b1c');
  translate(displayWidth / 2, displayHeight / 2);
  rotate(a);
  a = a + 0.001;
  rectMode(CENTER);
  rect(0, 0, 900, 900);

}
