let greeting = '{"greetText": "Wishing that the new year will bring joy, love, peace, and happiness to you."}';
let parsedGreeting = JSON.parse(greeting);

let frontGreet = document.getElementById('fromGreet');
fromGreet.textContent = "From: Rahul";

let toGreet = document.getElementById('toGreet');
toGreet.textContent = "To: Varakumar";

let greetText = document.getElementById('greetText');
greetText.textContent = parsedGreeting.greetText;

