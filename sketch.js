let squareWidth = 600;
let unit = 0.25;
let scale = squareWidth*unit;

function setup() {
    createCanvas(windowWidth, windowHeight); // w, h
}

function scaled(x) {
    return x*scale;
}

function draw() {
    stroke(0);
    // draw a square
    line(0,0,squareWidth,0);
    line(0,0,0,squareWidth);
    line(squareWidth,0,squareWidth,squareWidth);
    line(0,squareWidth,squareWidth,squareWidth);

    // draw strokes in the artwork
    line(0,0,scaled(3), scaled(sqrt(3)));
    line(scaled(4),0,scaled((4-sqrt(3))),scaled(3));
    line(scaled(4),scaled(4),scaled(1),scaled(4-sqrt(3)));
    line(0,scaled(4),scaled(sqrt(3)),scaled(1));

    line(0,scaled(1),scaled(sqrt(3)),scaled(1));
    line(scaled(4),scaled(3),scaled(4-sqrt(3)),scaled(3));

    // color the center square
    fill(0);
    quad(scaled(3), scaled(sqrt(3)), scaled((4-sqrt(3))),scaled(3), scaled(1),scaled((4-sqrt(3))), scaled(sqrt(3)),scaled(1));

    // color the two triangles
    triangle(0, 0, 0, scaled(1), scaled(sqrt(3)), scaled(1));
    triangle(scaled(4),scaled(4),scaled(4),scaled(3),scaled(4-sqrt(3)),scaled(3));
}
