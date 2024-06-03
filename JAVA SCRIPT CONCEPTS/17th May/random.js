var num = 100;
var random = Math.floor(Math.random() * num);

console.log(random);


function validateNum(){

let userinput =   parseInt  (document.getElementById("userinput").value);





if(userinput > random && userinput <= num && userinput > 0){

    document.getElementById("message").innerHTML = "Too High! Try Again."
    message.style.backgroundColor= "#2a2a74";
    
}
else if(userinput < random &&  userinput <= num && userinput > 0){

    document.getElementById("message").innerHTML = "Too Low! Try Again."
    message.style.backgroundColor= "#2a2a74";


}else if(userinput == random){

    document.getElementById("message").innerHTML = "Congratulations!! You got it Right."
    message.style.backgroundColor= "green";


} else{

    document.getElementById("message").innerHTML = "Invalid Input.. Please provide a valid Input."
    message.style.backgroundColor= "red";

}




}