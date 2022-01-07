function start_classification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('', modelReady); 
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        
        document.getElementById("Result_label").innerHTML =
         'I CAN HEAR-'  + results[0].label;
        document.getElementById("Result_confidence").innerHTML =
         'ACCURACY IS-' + (results[0].confidence * 100).toFixed(2) + '%';
    
        img = document.getElementById("CAT");
        img1 = document.getElementById("DOG");
        img2 = document.getElementById("EAR")
        

        if(results[0].label == "meow"){
            img.src ='CAT.png';
            img1.src ='DOG.png';
            img2.src = 'picture5.png';
        }
        else if(results.label == "Background-Noise"){
            img.src ='aliens-01.png';
            img1.src ='aliens-02.gif';
            img2.src ='aliens-03.png';
            img3.src ='aliens-04.png';
        }
    }