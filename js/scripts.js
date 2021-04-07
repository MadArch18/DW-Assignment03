var vidcapture, ctracker, drawcanvas;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("p5canvas");

    //p5 method for creating a video stream
    vidcapture = createCapture(VIDEO);
    vidcapture.size(vidcapture.width * 3, vidcapture.height * 4.5);
    vidcapture.hide();

    //start the tracker
    ctracker = new clm.tracker();
    ctracker.init();
    ctracker.start(vidcapture.elt);
    //just for testing
    drawcanvas = document.getElementById('defaultCanvas0');

}


function draw() {

    background(255, 5);
    translate(vidcapture.width, 0);
    scale(-1, 1);

    image(vidcapture, 0, 0);

    var position = ctracker.getCurrentPosition();

    if (position) {
        //        ctracker.draw(drawcanvas);

        fill(0);
        position.forEach(function (pos) {
            ellipse(pos[0], pos[1], 2);
        })

        console.log("this is " + position[20][0])
        //positions fun in here
        //for each loops all
    }







    //    //    background(0, 255, 255);
    //    fill(255, 255, 0);
    //    stroke(255, 0, 0);
    //    //    circle(mouseX, mouseY, 50);
    //    //    
    //
    //    var xColor = map(mouseX, 0, width, 0, 255);
    //    var yColor = map(mouseY, 0, width, 0, 255);
    //
    //    stroke(xColor, 0, yColor);
    //    strokeWeight(5);
    //
    //    var xRotate = map(mouseX, 0, width, 0, 380);
    //    angleMode(DEGREES);
    //
    //    translate(mouseX, mouseY);
    //    rotate(xRotate)
    //    line(0, 0, 150, 150);

}
