function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup(){
 canvas= createCanvas(300,300)
canvas.center()
canvas.background("white");
canvas.mouseReleased(classifyCanvas);
 synth = window.speechSynthesis;

}

function draw(){
strokeWeight(10);

stroke(0);

if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
}
}


 function classifyCanvas(){

classifier.classify(canvas,gotResults);
 }


 function gotResults(error,results){
if (error){
    console.log(error);
    }
        console.log(results);
        document.getElementById("label_text").innerHTML =results[0].label;
        document.getElementById("accuracy_number").innerHTML = Math.round(results[0].confidence *100)+"%";
    utterThis= new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);



 }


 function clear_canvas(){
canvas.background("white")

 }


 