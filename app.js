
// getting dom elements 

let mybutton =document.getElementsByTagName("button")[0];

mybutton.prevent
mybutton.onclick = function (event) {
    event.preventDefault();
    let rate = document.getElementById("hourly-rate").value;
    
console.log(rate);


let comments  = document.getElementById("footer-message");
console.log(comments.innerText);


let hours = document.getElementById("hours-worked").value;
console.log(hours);
let days = document.getElementById("days-worked").value;

console.log(mybutton);
let total =document.getElementById('result');
console.log(total);






const salary = days*(rate*hours);

    
total.innerText=`Total salary :${salary}`;



const message = () => {
    if (rate <= 0 || hours <= 0 || days <= 0) {
        alert('Please provide valid inputs for rate, hours, and days to proceed.');
    }
};
message();







const salaryComment = () => {
    if (salary <= 0) {
        return "Hmm, seems like no input or zero hours—time to hustle! 💰";
    } else if (salary > 0 && salary <= 5000) {
        return "Wow, tight budget! Time to check where all the money is going. 💸";
    } else if (salary > 5000 && salary <= 20000) {
        return "Not bad! Maybe a coffee splurge is in the budget? ☕";
    } else if (salary > 20000 && salary <= 50000) {
        return "Looking good! Keep the money flowing 💸";
    } else if (salary > 50000 && salary <= 75000) {
        return "Fifty grand and climbing—things are getting serious! 💼";
    } else if (salary > 75000 && salary <= 100000) {
        return "Whoa! Rolling in the dough, are we? 💎";
    } else if (salary > 100000 && salary <= 150000) {
        return "A hundred grand plus? You're living the executive life! 🏦";
    } else if (salary > 150000 && salary <= 200000) {
        return "You're halfway to a quarter mil—how's the view from up there? 🌟";
    } else if (salary > 200000 && salary <= 250000) {
        return "A quarter of a million—can I borrow some? 🙃";
    } else if (salary > 250000 && salary <= 300000) {
        return "Heading towards three hundred grand! What are you, an investor? 📈";
    } else if (salary > 300000 && salary <= 350000) {
        return "Three hundred grand? That’s some serious cash flow! 💵";
    } else if (salary > 350000 && salary <= 400000) {
        return "Climbing high—when’s the yacht party? 🚤";
    } else if (salary > 400000 && salary <= 450000) {
        return "Closing in on half a million—things are heating up! 🔥";
    } else if (salary > 450000 && salary <= 500000) {
        return "Half a million? Wow! Just wow. 🌟";
    } else if (salary > 500000 && salary <= 600000) {
        return "You’re officially in baller territory! 🤑";
    } else if (salary > 600000 && salary <= 700000) {
        return "Six hundred grand? You're secretly royalty, aren't you? 👑";
    } else if (salary > 700000 && salary <= 800000) {
        return "Seven hundred grand? Time to buy that private island! 🏝️";
    } else if (salary > 800000 && salary <= 900000) {
        return "Eight hundred grand? Living the life of luxury! 🌟";
    } else if (salary > 900000 && salary < 1000000) {
        return "Nine hundred grand? What's next, global domination? 🏦";
    } else if (salary >= 1000000 && salary < 2000000) {
        return "Over a million? Time to start that private jet fund! ✈️";
    } else if (salary >= 2000000 && salary < 3000000) {
        return "Two million? Are you on Forbes yet? 🏆";
    } else if (salary >= 3000000 && salary < 4000000) {
        return "Three million—what’s the secret to your success? 🤔";
    } else if (salary >= 4000000 && salary < 5000000) {
        return "Four million? You could start your own empire! 🌟";
    } else if (salary >= 5000000 && salary < 6000000) {
        return "Five million? When’s the champagne party? 🍾";
    } else if (salary >= 6000000 && salary < 7000000) {
        return "Six million? You’re an icon! 🕶️";
    } else if (salary >= 7000000 && salary < 8000000) {
        return "Seven million? Time to buy that private island! 🏝️";
    } else if (salary >= 8000000 && salary < 9000000) {
        return "Eight million? Are you secretly a billionaire? 💼";
    } else if (salary >= 9000000 && salary < 10000000) {
        return "Nine million? Just how big is your vault? 🏦";
    } else if (salary >= 10000000) {
        return "Over ten million? Forget the bank—you ARE the bank! 💰";
    } else {
        return "Invalid input. Please double-check your values.";
    }
};

comments.innerText=salaryComment()

};













  
