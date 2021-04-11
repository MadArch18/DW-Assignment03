var vidcapture, ctracker, drawcanvas;

var w;
var h;


function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("p5canvas");

    //p5 method for creating a video stream
    vidcapture = createCapture(VIDEO);
    vidcapture.size(vidcapture.width * 2, vidcapture.height * 3);
    vidcapture.hide();

    //start the tracker
    ctracker = new clm.tracker();
    ctracker.init();
    ctracker.start(vidcapture.elt);
    //just for testing
    drawcanvas = document.getElementById('defaultCanvas0');

    w = vidcapture.width;
    h = vidcapture.height;

}



function draw() {

    //    background(255, 5);
    translate(vidcapture.width, 0);
    scale(-1, 1);

    image(vidcapture, 0, 0);

    c = color(random(255), random(255), random(255));


    var position = ctracker.getCurrentPosition();

    if (position) {
        ctracker.draw(drawcanvas);

        //        fill(0);
        //        position.forEach(function (pos) {
        //            ellipse(pos[0], pos[1], 2);
        //        })
        //        var r = map(position[62][0], w, h, 0, 255);
        //        var g = map(position[62][1], w, h, 0, 255, true);

        //        if (position[19][1] <= position[19][1] + 20) {
        //            c = color(random(255), random(255), random(255));
        //
        //        } else {
        //            c = 0;
        //        }

        var r = map(position[19][1], 200, 210, 0, random(255));

        var g = map(position[22][1],
            200, 210, 0, random(255));

        fill(r, g, 255);

        beginShape();
        vertex(position[19][0], position[19][1])
        vertex(position[20][0], position[20][1])
        vertex(position[21][0], position[21][1])
        vertex(position[22][0], position[22][1])
        vertex(position[22][0], position[22][1] + 5)
        vertex(position[21][0], position[21][1] + 5)
        vertex(position[20][0], position[20][1] + 5)
        vertex(position[19][0], position[19][1] + 5)
        endShape();

        beginShape();
        vertex(position[15][0], position[15][1])
        vertex(position[16][0], position[16][1])
        vertex(position[17][0], position[17][1])
        vertex(position[18][0], position[18][1])
        vertex(position[18][0], position[18][1] + 5)
        vertex(position[17][0], position[17][1] + 5)
        vertex(position[16][0], position[16][1] + 5)
        vertex(position[15][0], position[15][1] + 5)
        endShape();




        console.log("eyebrow left corner " + position[19][1])
        //positions fun in here
        //for each loops all
    }

    //    function changeColor() {
    //
    //        var x = map(position[19][1], 0, h, 180, 220, true);
    //
    //
    //        
    //    }




    //https://p5js.org/reference/#/p5/beginShape
    //https://editor.p5js.org/codingtrain/sketches/HkDVpSvDm




}
