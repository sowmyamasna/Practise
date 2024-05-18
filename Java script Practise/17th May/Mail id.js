function validateUser(){

    let expectedUser = "sowmyamasna@gmail.com";//variable-declaration and intialization//
    let expectedPwd = "123";//variable-declaration and intialization//

   let username = document.getElementById("username").value;
   let password = document.getElementById("password").value;

   console.log(typeof(password));

   console.log(username);
   console.log(password);

   if(username === expectedUser && password === expectedPwd){

    alert("Login succesfull")
    document.getElementById("message").textContent = "Login Success!!";
   }

   else if(username != expectedUser && password == expectedPwd){
    alert("Login failed.. Try Again")

    document.getElementById("message").textContent = "Invalid username!!";

   }
   else if(username == expectedUser && password != expectedPwd){
    alert("Login failed.. Try Again")

    document.getElementById("message").textContent = "Invalid password!!";

   }

    else{
        alert("Login failed.. Try Again")
    document.getElementById("message").innerHTML = "Invalid Credentials!";

    }



  


}

