function validateUser(){

    let expectedUser = "sowmyamasna@gmail.com";
    let expectedPwd = "123";

   let username = document.getElementById("username").value;
   let password = document.getElementById("password").value;

   console.log(username);
   console.log(password);

   if(username === expectedUser && password === expectedPwd){

      
    document.getElementById("message").innerHTML = "Login Success!!";
   }
   

    else{

    document.getElementById("message").innerHTML = "Invalid Credentials!";

    }


}

