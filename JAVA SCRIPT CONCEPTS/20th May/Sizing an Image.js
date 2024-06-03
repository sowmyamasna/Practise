
let imagewidth = document.getElementById("imageWidth").innerHTML = 200;

function onIncrement(){
    imagewidth =  imagewidth + 5;
    document.getElementById("image").style.width = imagewidth+"px";
    document.getElementById("imageWidth").innerHTML = imagewidth;

    if(imagewidth >= 300){
       document.getElementById("warningMessage").innerHTML= "Too Big. Decrease the size of Image";
       warningMessage.style.color="red";
       document.getElementById("incrementButton").disabled = "true"
    }

}


function onDecrement(){

    console.log(imagewidth);
    imagewidth =  imagewidth - 5;
    document.getElementById("image").style.width = imagewidth+"px";
    document.getElementById("imageWidth").innerHTML = imagewidth;

    if(imagewidth <= 100){
        document.getElementById("warningMessage").innerHTML= "Can't visible. Increase the size of Image";
        warningMessage.style.color="red";
        document.getElementById("decrementButton").disabled = "true"
        
    }

}