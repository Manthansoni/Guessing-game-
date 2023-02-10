var Msg1 = document.getElementById("msg1");
var Msg2 = document.getElementById("msg2");
var Msg3 = document.getElementById("msg3");
var Answer = Math.floor(Math.random() * 100) + 1;
var No_of_guesses = 0;
var Guesses_num = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please enter number between 1 to 100");
    }
    else {
        Guesses_num.push(user_guess);
        No_of_guesses += 1;
        if (user_guess < Answer) {
            Msg1.textContent = "Your Guess Is Too Low"
            Msg2.textContent = "No. Of Guesses : " + No_of_guesses;
            Msg3.textContent = "Guessed Number Are: " + Guesses_num;
        }
        else if (user_guess > Answer) {
            Msg1.textContent = "Your Guess Is Too High"
            Msg2.textContent = "No. Of Guesses : " + No_of_guesses;
            Msg3.textContent = "Guessed Number Are: " + Guesses_num;
        } else if (user_guess == Answer) {
            Msg1.textContent = "Yahhhh You Won It!!"
            Msg2.textContent = "The Number Was " + Answer
            Msg3.textContent = " You Guessd It In " + No_of_guesses + " Guesses";
        }
    }
}

