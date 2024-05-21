function onStop(){

    document.getElementById("stopLight").style.backgroundColor = "red"
    document.getElementById("stopButtton").style.backgroundColor = "red"


    document.getElementById("readyLight").style.backgroundColor = "#575b6e"
    document.getElementById("readyButton").style.backgroundColor = "#1f1d41"

    
    document.getElementById("goLight").style.backgroundColor = "#575b6e"
    document.getElementById("goButton").style.backgroundColor = "#1f1d41"

}

function onReady(){

    document.getElementById("readyLight").style.backgroundColor = "Yellow"
    document.getElementById("readyButton").style.backgroundColor = "Yellow"

    
    document.getElementById("stopLight").style.backgroundColor = "#575b6e"
    document.getElementById("stopButtton").style.backgroundColor = "#1f1d41"

    
    document.getElementById("goLight").style.backgroundColor = "#575b6e"
    document.getElementById("goButton").style.backgroundColor = "#1f1d41"
}


function onGo(){

    document.getElementById("goLight").style.backgroundColor = "green"
    document.getElementById("goButton").style.backgroundColor = "green"

    document.getElementById("stopLight").style.backgroundColor = "#575b6e"
    document.getElementById("stopButtton").style.backgroundColor = "#1f1d41"

    
    document.getElementById("readyLight").style.backgroundColor = "#575b6e"
    document.getElementById("readyButton").style.backgroundColor = "#1f1d41"
}

    
