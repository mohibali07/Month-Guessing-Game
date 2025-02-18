let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function toggle() {
    document.getElementById("section1").style.display = 'none';
    document.getElementById("section2").style.display = 'flex';
    const randomNumber = Math.floor(Math.random() * month.length);
    month = month[randomNumber];
    document.querySelector("#hint").innerHTML
    let hintLetter = month.charAt(0);
    document.getElementById("hint").innerHTML = "Hint: The Name should start with " + '"' + hintLetter + '"';
    console.log(month);
}

let checkGuess = document.getElementById("check");


function checking() {
    let getValue = document.querySelector("#guess_value").value;
    var lower_value = getValue.toLowerCase();
    console.log(lower_value)
    console.log(getValue)
    if (getValue == month) {
        document.querySelector("#heading3").style.display = 'none';
        document.querySelector("#guess_value").style.display = 'none';
        document.querySelector("#check").style.display = 'none';
        document.querySelector("#hint").style.display = 'none';
        document.querySelector("#fireworks").style.display = 'block';
        document.querySelector("#playAgain").style.display = 'block';

        let fireaudio = new Audio('fire.mp3');
        fireaudio.play();
        document.getElementById("message").innerHTML = "You win";

    } else {

        document.getElementById("message").innerHTML = "You Lose please refresh the page";
        let angry = new Audio('angrycrowd.mp3');
        angry.play();
        document.querySelector("#heading3").style.display = 'none';
        document.querySelector("#guess_value").style.display = 'none';
        document.querySelector("#check").style.display = 'none';
        document.querySelector("#hint").style.display = 'none';
        document.querySelector("#playAgain").style.display = 'block';
    }
};