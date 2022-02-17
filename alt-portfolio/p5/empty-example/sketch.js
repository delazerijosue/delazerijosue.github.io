float[] x, y;
float[] lifespan;
float oldX, oldY;


var maxLifespan = 30; //CUMPRIMENTO DA LINHA
float taper = 5;
float noiseScale = 0.0004; //QUANTIDADE INVERSAMENTE PROPORCIONAL DE CURVAS/DOBRAS
var particleCount = 5; // QUANTIDADE DE LINHAS
float generationsPerFrame = 0.00000000001; //VELOCIDADE DE GERAÇÃO DE LINHAS
float frameOffset = 10;

function setup() {
  createCanvas(900, 600); //TAMANHO DA IMAGEM A SER GERADA
  x = new float[particleCount];
  y = new float[particleCount];
  lifespan = new float[particleCount];
  background(#00213b); //COR DO FUNDO
}

function draw() {
  noFill();
strokeWeight(1); //LARGURA DE CADA LINHA
strokeCap(ROUND);
stroke(#5dc090); //COR DA LINHA
for (var gen=0; gen < generationsPerFrame; gen++)
{
  for (var i=0; i < particleCount; i++)
  {
    oldX = x[i];
    oldY = y[i];

    //increment all variables
    x[i] += 100 * (0.5 - noise(x[i]*noiseScale, y[i]*noiseScale, frameOffset + 0));
    y[i] += 100 * (0.5 - noise(x[i]*noiseScale, y[i]*noiseScale, frameOffset + 1));
    lifespan[i]--;

    line(oldX, oldY, x[i], y[i]); //forma

    //if a particle has "died", reinitialize it
    if (lifespan[i] < 1) //altera o cumprimento da linha
    {
      x[i] = random(width+100)-100;
      y[i] = random(height+100)-100;

      lifespan[i] = (maxLifespan/2) + random(maxLifespan/2);
    }
  }
}
//saveFrame("frames-13/####.png");
}
