var xPos = 36;
var yPos = 364;
var p = 200;
var q = 30;
var ss = 15;
draw = function() {
    background(29, 40, 115);
    ellipse(94, 100, ss, ss);
    ellipse(250, 347, ss, ss);
    ellipse(118, 264, ss, ss);
    ellipse(336, 41, ss, ss);
    fill(255, 242, 0);
    ellipse(xPos, yPos, ss, ss);
    xPos += 3;
    yPos -= 3;
    ellipse(p, q, ss, ss);
    p += 5;
    q += 8;
    
};



