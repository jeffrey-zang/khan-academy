background(133, 207, 122);
noStroke();
var x = 200;
var y = 200;
var bamboo = 100;
var faceSize = 200;
var eyeSize = 1/7 * faceSize;

draw= function() {
    // ears
background(133,207, 122);
var earSize=faceSize*1/2;
fill(5, 4, 3);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(242, 242, 242);
ellipse(x, y, faceSize, faceSize);

//eyes 
fill(0, 0, 0);
ellipse(x-faceSize/4, y-faceSize/8, eyeSize, eyeSize);
ellipse(x+faceSize/4, y-faceSize/8, eyeSize, eyeSize);

//nose
fill(0, 0, 0);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);

//mouth
fill(0, 0, 0);
arc(200, 260, 50, 50, 0 , 180);

//bamboo
fill(83, 166, 105);
rect(186, 270, 30, bamboo);
bamboo = bamboo - 1;
if(bamboo<0) {bamboo = 100;}
};
