var width;
var height;
var curves;
var waveLayers = 11;
var t=[];
var oldTime = 0;
var initialY;

function RGB(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

var colorBlue = new RGB(10, 45, 250);
var colorBabyBlue = new RGB(71, 130, 224);
var colorDarkBlue = new RGB(28, 63, 119);
var colorSkyBlue = new RGB(170, 240, 255);
var colorLightBlue = new RGB(178, 210, 255);
var colorGreen = new RGB(50, 120, 100);
var colorNavy = new RGB(20, 60, 100);
var colorDarkGreen = new RGB(50, 100, 50);
var colorPurple = new RGB(177, 135, 188);
var colorOrange = new RGB(249, 204, 164);
var colorRed = new RGB(201, 92, 116);
var colorTeal = new RGB(76, 226, 239);
var colorLightYellow = new RGB(255, 240, 201);
var colorBlack = new RGB(3, 17, 40);
var colorTrueRed = new RGB(255, 0, 0);

var redList = [colorTrueRed, colorTrueRed, colorTrueRed, colorTrueRed]
var dayColorList = [colorBabyBlue, colorTeal, colorLightBlue, colorBlue];
var sunsetColorList = [colorRed, colorPurple, colorOrange, colorLightBlue];
var nightColorList = [colorDarkGreen, colorGreen, colorLightBlue, colorBlue];
var deepNightColorList = [colorNavy, colorDarkBlue, colorPurple, colorBlue];

var twoDColorLists = [deepNightColorList, dayColorList, sunsetColorList, nightColorList];
var colorList = [colorGreen, colorTeal, colorLightBlue, colorBlue];

var backgroundList = [colorLightBlue, colorSkyBlue];
var twoDBackgroundList = [[colorBlack, colorDarkBlue], [colorLightBlue, colorSkyBlue], [colorBabyBlue, colorLightYellow], [colorGreen, colorPurple]];

function setup() {
    width = windowWidth;
    height = windowHeight;
    initialY = int(height*(2/3)) - 20;
    var cnv = createCanvas(width, height);
    cnv.parent('home-sketch');
    
    curves = int(width/50);
    create2DNoiseList();

}

function createNoiseList(){
    var pointList = [];
    for (i = 0; i < 40 +1; i++) {
        append(pointList, random(0, 500));
    }
    return pointList;
}

function create2DNoiseList() {
    for (var i = 0; i<waveLayers; i++){
        append(t, createNoiseList());
    }
}

function getTwean(c1, c2, progress, z) {
    //progress is 0 to 1
    var twean = {
    'r': 0,
    'g': 0,
    'b': 0
}

    var noiseOffset = noise(t[z][1])*80 - 20;
    twean.r = c1.r + (c2.r - c1.r)* progress + noiseOffset;
    twean.g = c1.g + (c2.g - c1.g)* progress + noiseOffset;
    twean.b = c1.b + (c2.b - c1.b)* progress + noiseOffset;
    return twean;
}

function getListTwean(c1, c2, progress) {
    //progress is 0 to 1
    var twean = {
    'r': 0,
    'g': 0,
    'b': 0
}
    
    twean.r = c1.r + (c2.r - c1.r)* progress;
    twean.g = c1.g + (c2.g - c1.g)* progress;
    twean.b = c1.b + (c2.b - c1.b)* progress;
    return twean;
}

function updateList(progress, oceanTimeIndex, backgroundTimeIndex) {
    if (backgroundTimeIndex == twoDBackgroundList.length - 1){
        backgroundList[0] = getListTwean(twoDBackgroundList[backgroundTimeIndex][0], twoDBackgroundList[0][0], progress);
        backgroundList[1] = getListTwean(twoDBackgroundList[backgroundTimeIndex][1], twoDBackgroundList[0][1], progress);
    }
    else{
        backgroundList[0] = getListTwean(twoDBackgroundList[backgroundTimeIndex][0], twoDBackgroundList[backgroundTimeIndex+1][0], progress);
        backgroundList[1] = getListTwean(twoDBackgroundList[backgroundTimeIndex][1], twoDBackgroundList[backgroundTimeIndex+1][1], progress);
    }
    for (var i = 0; i < colorList.length; i++) {
        
        if (oceanTimeIndex == twoDColorLists.length - 1){
        //to fade from last index/list to first index/list
            colorList[i] = getListTwean(twoDColorLists[oceanTimeIndex][i], twoDColorLists[0][i], progress);
        }
        else {
            colorList[i] = getListTwean(twoDColorLists[oceanTimeIndex][i], twoDColorLists[oceanTimeIndex + 1][i], progress);
        }
    }
    
}

function getTimeProgress(){
    // returns progress (0.0 - 1.0), the percentage between the lists in twoDColorLists
    var colorChangeSpeed = 500;
    return ((millis() / colorChangeSpeed) % 100) * .01;
    
}

function getTimeIndex(list){ 
    var colorChangeSpeed = 500;
    return int(((millis() / colorChangeSpeed) % (100 * list.length)) * .01);

}


function fillColor(z){
    //color progression of the waves
    //z=0 is the furthest in space
    var hue = 20*z + 80;
    var saturation = 8 * (z);
    var brightness = 70 + (z*2.5);
    var hsbString='hsb('+str(hue)+','+str(saturation)+'%,'+str(brightness)+'%)';

    var index = int(z*((colorList.length -1)/waveLayers)); //index in colorList to get twean of
    var progressIndex = z % (waveLayers/(colorList.length - 1));
    var progress = progressIndex / (waveLayers/(colorList.length-1));

    var newTwean = getTwean(colorList[index], colorList[index+1], progress, z);
    var rgbString='rgb('+int(newTwean.r)+','+int(newTwean.g)+','+int(newTwean.b) +')';
    return color(rgbString);
}

function drawOcean(){
    var yOffset = 2;
    var yPower = 20;
    var xDist = width/curves;
    var xDistOffset = 1;
    var x, y;
    for (var z = 0; z < waveLayers; z++){
        
        beginShape();
        fill(fillColor(z));
        curveVertex(0, height);
        curveVertex(0, height);
        for (var i = 0; i < curves + 1; i++) {
            strokeWeight(0);
            x = (xDist+xDistOffset) * i;
            //initalY is portion of the screen the waves will cover,
            //yOffset is the change between each individual wave
            y = initialY + yOffset +(yPower * noise(t[z][i]));
            if (i==0){curveVertex(x, y + 10);}
            curveVertex(x, y);
            // strokeWeight(5);
            point(x, y);
            t[z][i] += (millis() - oldTime) / 4000
        }
        
        // strokeWeight(1);
        curveVertex(x, y);
        curveVertex(x, height);
        curveVertex(x, height);
        endShape();
        yOffset*=1.09 + 0.5 ;
        yPower*= 1.15;
        xDistOffset*=1.6;
    }
    oldTime = millis();
}

function drawBackgroundGradient(x, y, w, h, color1, color2){
    //refrences code from https://p5js.org/examples/color-linear-gradient.html
    var c1 = color(color1.r, color1.g, color1.b);
    var c2 = color(color2.r, color2.g, color2.b);
    strokeWeight(1);
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
}

function draw() {
    if (width != windowWidth || height != windowHeight){
        width = windowWidth;
        height = windowHeight;
        var cnv = createCanvas(width, height);
        cnv.parent('home-sketch');
        curves = int(width/50);
    }
    
    var oceanTimeIndex = getTimeIndex(twoDColorLists);
    var backgroundTimeIndex = getTimeIndex(twoDBackgroundList);
    var timeProgress = getTimeProgress();
    updateList(timeProgress, oceanTimeIndex, backgroundTimeIndex);
    if (millis() > oldTime +20){
        drawBackgroundGradient(0, 0, width, initialY+ 25, backgroundList[0], backgroundList[1]);
        drawOcean();
    }

    
    
    
}