var vidcapture, ctracker, drawcanvas;

var w;
var h;
let c = 0;


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

    //    var a = random(0, 255);
    //    var b = random(0, 255);
    //    var c = random(0, 255);
    //    fill(a, b, c);

    //    fill(r, g, random(255));

}





function draw() {
    background(255);
    //    background(255, 5);
    translate(vidcapture.width, 0);
    scale(-1, 1);

    image(vidcapture, 0, 0);

    stroke(255);

    c = color(255, 204, 0);
    fill(c);
    rect(50, 170, 25, 25);

    c = color(150, 35, 255);
    fill(c);
    rect(100, 170, 25, 25);

    c = color(255, 90, 150);
    fill(c);
    rect(150, 170, 25, 25);


    var position = ctracker.getCurrentPosition();

    if (position) {
        ctracker.draw(drawcanvas);


        if (position[19][1] <= 200 && position[19][0] >= 250) {
            console.log("this eyebrow is moving here" + position[19][0]);
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

        if (position[15][1] <= 200 && position[15][0] <= 350) {
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

        //        position.forEach(function (pos) {
        //            line(pos[0], pos[1], mouseX, mouseY);
        //        })



        //        fill(0);
        //        position.forEach(function (pos) {
        //            ellipse(pos[0], pos[1], 2);
        //        })


        //        var up1 = position[19][1] += 210;
        //        var down1 = position[19][1] -= 190;
        //
        //        var up2 = position[22][1] + 210;
        //        var down2 = position[22][1] - 190;

        //        if (mouseIsPressed && mouseX < 555 && mouseX > 525 && mouseY < 170 && mouseY > 195) {
        //            c = get(mouseX, mouseY);
        //            fill(c);
        //        }
        //
        //        r = map(position[19][1], 200, 150, 250, 255);
        //
        //        g = map(position[22][1],
        //            200, 150, 0, random(255));
        //
        //        if (mouseIsPressed) {
        //            c = color(get(mouseX, mouseY));
        //            fill(c);
        //
        //


        //
        //
        //        }
        //
        //        console.log("eyebrow left corner " + position[19][1])
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
