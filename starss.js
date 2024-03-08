var xPositions = [];
var yPositions = [];

var drawStars = function() {
    background(9, 5, 59);
    imageMode(CENTER);
    for (var i = 0; i < yPositions.length; i++) {
        image(getImage("space/star"), xPositions[i], yPositions[i], yPositions.length+10 * 3,           xPositions.length+10 * 3);
    }
};

mouseClicked = function() {
    
    xPositions.push(mouseX);
    yPositions.push(mouseY);

    drawStars();

};

