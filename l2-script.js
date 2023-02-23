function quizAboutme() {
  let nickName = prompt("My nick name is Myrrh. true or false?").toLowerCase();

  if (nickName == "false") {
    alert("correct!");
    console.log(
      "when answering true or false if you get it right message will show correct"
    );
  } else {
    alert("la de da de da you're wrong");
    console.log("la de da de da you're wrong");
  }
}
function Aboutme() {
  let threeJobs = prompt(
    "I worked 3 or more jobs. true or false?"
  ).toLowerCase();
  console.log(threeJobs);
  if (threeJobs == "true") {
    alert("correct!");
    console.log(
      "when answering true or false if you get it right message will show correct"
    );
  } else {
    alert("la de da de da you're wrong");
    console.log("la de da de da you're wrong");
  }
}
function quizAboutwe() {
  let hrs = prompt("I worked 12 hours. true or false?").toLowerCase();

  if (hrs == "true") {
    alert("correct!");
    console.log(
      "when answering true or false if you get it right message will show correct"
    );
  } else {
    alert("la de da de da you're wrong");
    console.log("la de da de da you're wrong");
  }
}

function Abouttime() {
  let rugby = prompt(
    "I played rugby in highschool. true or false?"
  ).toLowerCase();

  if (rugby == "true") {
    alert("correct!");
    console.log(
      "when answering true or false if you get it right message will show correct"
    );
  } else {
    alert("la de da de da you're wrong🤪");
    console.log("la de da de da you're wrong");
  }
}

function Weee() {
  let mca = prompt(
    "First year of college was shut down. true or false?"
  ).toLowerCase();

  if (mca == "true") {
    alert("correct!");
    console.log(
      "when answering true or false if you get it right message will show correct"
    );
  } else {
    alert("la de da de da you're wrong");
    console.log("la de da de da you're wrong");
  }
}

let userAns = "";
let thisArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Manytimes() {
  userAns = prompt(
    "1-10 Guess how many times I shamelessly admit watching Vampire Diaries"
  );
  while (userAns != 8) {
    if (userAns < 8) {
      alert("Oop! Too low love. Try again.");
      userAns = prompt("Please guess the number again.");
    } else if (userAns > 8) {
      alert("Oop! Too high boo. Try again");
      userAns = prompt("Please guess the number again.");
    }
  }
  alert("you guessed it!");
}
function tryAgain(expectedAnswer) {
  let chancesLeft = 5;
  let answerCorrect = false;

  while (chancesLeft > 0) {
    const answer = prompt("Please enter answer");
    if (answer === null) {
      break;
    } else if (answer === expectedAnswer) {
      answerCorrect = true;
      break;
    }
    chancesLeft--;
  }
  if (answerCorrect) {
    alert("You are out of chances!");
  }
}
let button = document.querySelector("button");
