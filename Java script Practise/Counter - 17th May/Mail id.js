function validateUser(){

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



}