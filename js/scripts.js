var vidcapture, ctracker, drawcanvas;

var w;
var h;
var c;



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
    background(50);

    var r = map(mouseX, vidcapture.width, vidcapture.height, 0, 255);
    var g = map(mouseY, vidcapture.width, vidcapture.height, 0, 255);

    //dots background: https://editor.p5js.org/cdaein/sketches/SJiQ8MXhZ


    for (var i = 0; i <= vidcapture.width; i += 20) {
        for (var j = 0; j <= vidcapture.height; j += 20) {
            var d = dist(mouseX, mouseY, i, j);
            d = map(d, 0, 600, 20, 0);
            fill(r, g, random(255));
            ellipse(i, j, d, d);
        }
    }

    translate(vidcapture.width, 0);
    scale(-1, 1);


    line(0, vidcapture.height / 2, vidcapture.width, vidcapture.height / 2);
    line(vidcapture.width / 2, 0, vidcapture.width / 2, vidcapture.height);


    var position = ctracker.getCurrentPosition();





    if (position) {
        stroke(0);


        if (position[19][1] <= 200 && position[19][0] >= 230) {
            c = color(255, 255, 0);
            fill(c);

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
        }

        if (position[15][1] <= 200 && position[15][0] <= 370) {
            c = color(255, 0, 255);
            fill(c);

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
        }

        if (position[50][1] >= vidcapture.height / 2, position[50][0] >= 300) {
            c = color(0, 160, 160);
            fill(c);

            beginShape();
            vertex(position[44][0], position[44][1])
            vertex(position[61][0], position[61][1])
            vertex(position[60][0], position[60][1])
            vertex(position[59][0], position[59][1])
            vertex(position[50][0], position[50][1])
            vertex(position[49][0], position[49][1])
            vertex(position[48][0], position[48][1])
            vertex(position[47][0], position[47][1])
            vertex(position[46][0], position[46][1])
            vertex(position[45][0], position[45][1])
            endShape();

        }
        if (position[44][1] >= vidcapture.height / 2, position[44][0] <= 300) {
            c = color(200, 0, 200);
            fill(c);

            beginShape();
            vertex(position[44][0], position[44][1])
            vertex(position[56][0], position[56][1])
            vertex(position[57][0], position[57][1])
            vertex(position[58][0], position[58][1])
            vertex(position[50][0], position[50][1])
            vertex(position[51][0], position[51][1])
            vertex(position[52][0], position[52][1])
            vertex(position[53][0], position[53][1])
            vertex(position[54][0], position[54][1])
            vertex(position[55][0], position[55][1])
            endShape();




        }
        c = color(70, 200, 50);
        fill(c);
        beginShape();
        vertex(position[62][0], position[62][1])
        vertex(position[43][0], position[43][1])
        vertex(position[37][0], position[37][1])
        vertex(position[42][0], position[42][1])

        endShape();



    }
