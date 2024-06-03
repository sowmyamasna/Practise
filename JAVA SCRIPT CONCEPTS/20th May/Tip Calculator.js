function calculate(){

document.getElementById("errorMessage").innerHTML = "";

let billamount =   document.getElementById("billAmount").value;
let percentage =  document.getElementById("percentageTip").value;

if(billamount == "" || percentage == ""){

    document.getElementById("errorMessage").innerHTML = "Please Enter a valid Input"
}

billamount = parseInt(billamount);
percentage = parseInt(percentage);

let calculateTip = (percentage / 100) * billamount;
let totalAmount =  billamount + calculateTip;

document.getElementById("tipAmount").value = calculateTip;
document.getElementById("totalAmount").value = totalAmount;


}