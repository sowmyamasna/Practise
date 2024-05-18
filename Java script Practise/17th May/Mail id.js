let inputElement= document.getElementById("inputElement");
let signInTextElement= document.getElementById("signInText");

function signIn(){
    let expecteduser = "sowmyamasna@gmail.com";
    let expectedpwd = "123";
    let username = document.getElementById("username").value;
   let password = document.getElementById("password").value;

   console.log(username);
   console.log(password);

   if(username == expecteduser && password == expectedpwd){

      
    document.getElementById("msg").textContent = "login success";
   }


    else{

    document.getElementById("msg").textContent = "login fail";

    }

    let inputValue= inputElement.value;
    let verifyText= "Hi " + inputValue + ", verifying your account...";
    signInTextElement.textContent = verifyText;
    alert("your credentials are wrong")
}


