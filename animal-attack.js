strokeWeight(5);
var headSiz = 200;
var iSiz = 1/10 * headSiz;
var earSiz = 115/200 * headSiz;
var noseX = 3/20 * headSiz;
var noseY = 3/10 * headSiz;
var mouthSiz = 1/5 * headSiz;
var x = 200;
var y = 200;

draw = function() {
    background(203, 249, 250);
    fill(199, 199, 199); // ear
    ellipse(100, 120, earSiz, earSiz);
    ellipse(300, 120, earSiz, earSiz);
    fill(217, 217, 217); // inside ear
    ellipse(110, 130, earSiz-50, earSiz-50);
    ellipse(290, 130, earSiz-50, earSiz-50);
    fill(217, 217, 217); // head
    ellipse(x, y, headSiz, headSiz);
    fill(0, 0, 0); // eyes
    ellipse(160, 160, iSiz, iSiz);
    ellipse(240, 160, iSiz, iSiz);
    fill(0, 0, 0); // nose
    ellipse(x, y, noseX, noseY); 
    fill(0, 0, 0);
    arc(x, y + 40, mouthSiz, mouthSiz, mouthSiz - 40, mouthSiz + 140);
    headSiz += 0.3;
    iSiz += 1;
    earSiz += 1;
};
