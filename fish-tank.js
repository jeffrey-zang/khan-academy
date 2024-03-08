background(89, 216, 255);
var centerX = random(1, 400);
var centerY = random(1, 400);
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(random(1, 300), random(1, 300), random(1, 300));
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;

var drawFish = function(){
    noStroke();
    fill(bodyColor);
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    triangle(centerX-bodyLength/2, centerY,
    centerX-bodyLength/2-tailWidth, centerY-tailHeight,
    centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

draw = function() {
    drawFish(random(1, 300), random(1, 300));
};
         
         
