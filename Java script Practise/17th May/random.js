var num = 100;
var random = Math.floor(Math.random() * num);

console.log(random);


function validateNum(){













let userinput = document.getElementById("usernput").value;





if(userinput > random && userinput<num && userinput > 0){

    document.getElementById("msg").innerHTML = "Too high"
    
}
else if(userinput < random &&  userinput <num && userinput > 0){

    document.getElementById("msg").innerHTML = "Too low"


}else if(userinput == random){

    document.getElementById("msg").innerHTML = "pass"


} else{

    document.getElementById("msg").innerHTML = "invalid input"

}




}