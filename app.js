
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
    } else if (salary > 0 && salary <= 1000) {
        return "Barely scratching the surface—every penny counts! 💸";
    } else if (salary > 1000 && salary <= 2000) {
        return "Making progress, but still a tight squeeze. Hang in there! 💪";
    } else if (salary > 2000 && salary <= 3000) {
        return "A few thousand? Time for careful budgeting. 🛠️";
    } else if (salary > 3000 && salary <= 4000) {
        return "Starting to look better—maybe some small indulgences? 🍴";
    } else if (salary > 4000 && salary <= 5000) {
        return "Getting there! You’ve got the basics covered. 📚";
    } else if (salary > 5000 && salary <= 7500) {
        return "Now we're talking! You can breathe a little easier. 🌬️";
    } else if (salary > 7500 && salary <= 10000) {
        return "Great progress—perhaps even room for a treat? 🍦";
    } else if (salary > 10000 && salary <= 12500) {
        return "Solid earnings—your budget might finally start to relax. 💵";
    } else if (salary > 12500 && salary <= 15000) {
        return "Nicely done—it's a good time to consider saving. 📈";
    } else if (salary > 15000 && salary <= 17500) {
        return "Well-earned progress—life's looking smoother. 👍";
    } else if (salary > 17500 && salary <= 20000) {
        return "Steady improvement—keep building momentum! 🚀";
    } else if (salary > 20000 && salary <= 25000) {
        return "Great progress! Maybe it's time to think investments? 💼";
    } else if (salary > 25000 && salary <= 30000) {
        return "Impressive earnings—financial stability is in sight! 🏦";
    } else if (salary > 30000 && salary <= 35000) {
        return "Climbing up—things are looking promising! 📚";
    } else if (salary > 35000 && salary <= 40000) {
        return "You're in a great spot—keep the savings rolling! 💵";
    } else if (salary > 40000 && salary <= 45000) {
        return "Fantastic! Time to plan for future goals. 🌟";
    } else if (salary > 45000 && salary <= 50000) {
        return "You're solidly on the rise—keep crushing it! 💪";
    } else if (salary > 50000 && salary <= 60000) {
        return "Looking good—there’s room for a little splurge! 🥂";
    } else if (salary > 60000 && salary <= 70000) {
        return "Sixty grand? You’re climbing steadily! 📈";
    } else if (salary > 70000 && salary <= 80000) {
        return "Seventy grand—your hard work is paying off! 🏆";
    } else if (salary > 80000 && salary <= 90000) {
        return "Eighty grand? Things are getting exciting! 🚀";
    } else if (salary > 90000 && salary <= 100000) {
        return "Ninety grand—well done! Keep aiming higher! 🎯";
    } else if (salary > 100000 && salary <= 125000) {
        return "Over a hundred grand? Time to think long-term! 🏦";
    } else if (salary > 125000 && salary <= 150000) {
        return "Great earnings—life’s starting to look luxurious! ✨";
    } else if (salary > 150000 && salary <= 175000) {
        return "Closing in on two hundred grand—big moves ahead! 💼";
    } else if (salary > 175000 && salary <= 200000) {
        return "You’re approaching elite territory—keep pushing! 🌟";
    } else if (salary > 200000 && salary <= 250000) {
        return "A quarter of a million—time for celebration! 🎉";
    } else if (salary > 250000 && salary <= 300000) {
        return "Two fifty and beyond—can I borrow some? 🙃";
    } else if (salary > 300000 && salary <= 400000) {
        return "Three hundred grand—what’s the secret to your success? 🤔";
    } else if (salary > 400000 && salary <= 500000) {
        return "Half a million? That’s truly impressive! 🌟";
    } else if (salary > 500000 && salary <= 600000) {
        return "Five hundred grand—you’re officially in baller territory! 🤑";
    } else if (salary > 600000 && salary <= 700000) {
        return "Six hundred grand? Keep soaring higher! 🚀";
    } else if (salary > 700000 && salary <= 800000) {
        return "Seven hundred grand? Time to buy that private island! 🏝️";
    } else if (salary > 800000 && salary <= 900000) {
        return "Eight hundred grand—living the life of luxury! 🌟";
    } else if (salary > 900000 && salary <= 1000000) {
        return "Nine hundred grand? What’s next, global domination? 🏦";
    } else if (salary > 1000000 && salary <= 2000000) {
        return "Over a million? Time to start that private jet fund! ✈️";
    } else if (salary > 2000000 && salary <= 3000000) {
        return "Two million? Are you on Forbes yet? 🏆";
    } else if (salary > 3000000 && salary <= 4000000) {
        return "Three million—what’s the secret to your success? 🤔";
    } else if (salary > 4000000 && salary <= 5000000) {
        return "Four million? You could start your own empire! 🌟";
    } else if (salary > 5000000 && salary <= 6000000) {
        return "Five million? When’s the champagne party? 🍾";
    } else if (salary > 6000000 && salary <= 7000000) {
        return "Six million? You’re an icon! 🕶️";
    } else if (salary > 7000000 && salary <= 8000000) {
        return "Seven million? Time to buy that private island! 🏝️";
    } else if (salary > 8000000 && salary <= 9000000) {
        return "Eight million? Are you secretly a billionaire? 💼";
    } else if (salary > 9000000 && salary <= 10000000) {
        return "Nine million? Just how big is your vault? 🏦";
    } else if (salary > 10000000) {
        return "Over ten million? Forget the bank—you ARE the bank! 💰";git
    } else {
        return "Invalid input. Please double-check your values.";
    }
};

comments.innerText=salaryComment()

};













  
