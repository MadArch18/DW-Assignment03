var vidcapture, ctracker, drawcanvas;

let food;
let w;
let h;
let x = floor(random(w));
let y = floor(random(h));

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


    w = floor(vidcapture.width);
    h = floor(vidcapture.height);
    foodLocation();

}

function foodLocation() {
    food = createVector(x, y);
}

function draw() {

    //    background(255, 5);
    translate(vidcapture.width, 0);
    scale(-1, 1);

    image(vidcapture, 0, 0);

    fill(255, 0, 0);
    noStroke();
    ellipse(food.x, food.y, 20);

    var position = ctracker.getCurrentPosition();

    if (position) {
        ctracker.draw(drawcanvas);

        //        fill(0);
        //        position.forEach(function (pos) {
        //            ellipse(pos[0], pos[1], 2);
        //        })
        var r = map(position[62][0], w, h, 0, 255);
        var g = map(position[62][1], w, h, 0, 255, true);


        fill(r, g, 255);

        beginShape();
        vertex(position[44][0], position[44][1])
        vertex(position[61][0], position[61][1])
        vertex(position[60][0], position[60][1])
        vertex(position[59][0], position[59][1])
        vertex(position[50][0], position[50][1])
        vertex(position[58][0], position[58][1])
        vertex(position[57][0], position[57][1])
        vertex(position[56][0], position[56][1])
        endShape();


        if (position[food.x], position[food.y]) {
            foodLocation();
        }

        console.log("this is " + position[20][0])
        //positions fun in here
        //for each loops all
    }




    //https://p5js.org/reference/#/p5/beginShape
    //https://editor.p5js.org/codingtrain/sketches/HkDVpSvDm




}
