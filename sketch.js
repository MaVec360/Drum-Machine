let hh, clap, bass; //DRUMS. will serve as a container to hold a sound source
let hPat, cPat, bPat; //DRUMS CanvasPattern. it will be an array of numbers we can manipulate to make beats
let hPhrase, cPhrase, bPhrase; //DRUMS PHRASE. which defines how the hihate pattern is interpreted. 
let drums; //PART. we will attach the phrase to the part, which will serve as our trasport to drive the phrase



function setup() {
    createCanvas (400,400);
    hh = loadSound('samples/HIHAT.wav', () => {});
    clap = loadSound('samples/CLAP.wav', () => {});
    bass = loadSound('samples/KICK.wav', () => {});

    hPat = [1, 1, 1, 1];
    cPat = [0, 0, 0, 0];
    bPat = [0, 0, 0, 0];

    hPhrase = new p5.Phrase('hh', (time)=> {
        hh.play(time);
        console.log(time);
    }, hPat);
    cPhrase = new p5.Phrase('clap', (time)=> {
        clap.play(time);
        console.log(time);
    }, cPat);
    bPhrase = new p5.Phrase('bass', (time)=> {
        bass.play(time);
        console.log(time);
    }, bPat);

    drums = new p5.Part();

    drums.addPhrase(hPhrase);
    drums.addPhrase(bPhrase);
    drums.addPhrase(cPhrase);
}

function keyPressed(){
    if (key === " ") {
        if (hh.isLoaded() && clap.isLoaded() && bass.isLoaded()){
            if(!drums.isPlaying){
        drums.loop();
            } else {
                drums.stop();
            }
    } else {
        console.log('drums loading...')
    }
}
}