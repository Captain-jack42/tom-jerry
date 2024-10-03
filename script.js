let computerChoice = 0;
let userChoice = window.document.querySelectorAll(".box-btn");
let score = 0;
let wicket = 0;
let compDis = document.querySelector("#comp-choice");
let userDis = document.querySelector("#user-choice");
let userscore = document.querySelector("#user");
let target = document.querySelector("#first");
let battingTeam = document.querySelector("#Batting-heading");
let targetScore = 0;
var shot = document.querySelector(".shot");
var cheer = document.querySelector(".entertainment");

let body = document.querySelector("body");
let suggestion = document.querySelector("#suggestion-box");

suggestion.innerText = "Ready for some cricket\nYou will bat first, you have to click on number button for scoring run.If your and computer choices matched than you loose your one wicket. You have total 5 wicket. "
userscore.innerText = (score + "-" + wicket);

userChoice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const useropted = choice.getAttribute("id");
    update(useropted);
  });
});

const compchoice = () => {
  let option = ["1", "2", "3", "4", "61", "62"];
  const index = Math.floor(Math.random() * 6);
  return option[index];
};

let update = (useropted) => {
  const computerchoose = compchoice();
  if (computerchoose === useropted) {
    wicket++;
    if (targetScore === 0 && wicket === 5) {
      compDis.innerText = computerchoose;
      userDis.innerText = useropted;
      userscore.innerText = (score + "-" + wicket);
      target.innerText = (score + "-" + wicket);
      targetScore = score;
      wicket = score = 0;
      shot.style.visibility = "visible";
      shot.innerText = "Second Inning started";
      battingTeam.innerText = "Computer batting:";


    } else if (targetScore > 0 && score > targetScore) {
      target.innerText = "Computer win";
    } else if (targetScore > 0 && score < targetScore && wicket === 5) {
      target.innerText = "User win";
    } else if (targetScore > 0 && score === targetScore && wicket === 5) {
      target.innerText = "Match draw";
    } else {
      compDis.innerText = computerchoose;
      userDis.innerText = useropted;
      userscore.innerText = (score + "-" + wicket);
      shot.style.visibility = "visible";
      shot.innerText = "WICKET";
    }



  } else {
    if (targetScore > 0 && score > targetScore) {
      shot.innerText = "Computer Win!";

    } else if (targetScore > 0 && score < targetScore && wicket === 5) {
      shot.innerText = "User Win!";
      cheer.innerHTML = "<img src=\'cheering.gif' width=\'380px\' height=\'100%\' border-radius=\'10px\'>";

    } else if (targetScore > 0 && score === targetScore && wicket === 5) {
      shot.innerText = "Match draw";
    } else if (targetScore === 0 && (useropted === "61" || useropted === "62")) {
      score += 6;

      compDis.innerText = computerchoose;
      userDis.innerText = useropted;
      userscore.innerText = (score + "-" + wicket);
      shot.style.visibility = "visible";
      cheer.innerHTML = "<img src=\'cheering.gif' width=\'100%\' height=\'100%\' border-radius=\'10px\'>";
      shot.innerHTML = "<img src=\'six.gif' width=\'380px\' height=\'100%\' border-radius=\'10px\'>";


    }
    else if (targetScore === 0 && useropted === "4") {
      score += 4;
      compDis.innerText = computerchoose;
      userDis.innerText = useropted;
      userscore.innerText = (score + "-" + wicket);
      shot.style.visibility = "visible";
      cheer.innerHTML = "<img src=\'cheering.gif' width=\'100%\' height=\'100%\' border-radius=\'10px\'>";
      shot.innerHTML = "<img src=\'four.gif' width=\'380px\' height=\'100%\' border-radius=\'10px\'>";

    } else if (targetScore === 0) {
      cheer.innerHTML = "";
      shot.innerText = "";
      score += Number(useropted);
      compDis.innerText = computerchoose;
      userDis.innerText = useropted;
      userscore.innerText = (score + "-" + wicket);
    } else if (targetScore > 0 && (computerchoose === "61" || computerchoose === "62")) {
      score += 6;

      compDis.innerText = computerchoose;
      userDis.innerText = useropted;
      userscore.innerText = (score + "-" + wicket);
      shot.style.visibility = "visible";
      cheer.innerHTML = "<img src=\'cheering.gif' width=\'100%\' height=\'100%\' border-radius=\'10px\'>";
      shot.innerHTML = "<img src=\'six.gif' width=\'380px\' height=\'100%\' border-radius=\'10px\'>";


    }
    else if (targetScore > 0 && computerchoose === "4") {
      score += 4;
      compDis.innerText = computerchoose;
      userDis.innerText = useropted;
      userscore.innerText = (score + "-" + wicket);
      shot.style.visibility = "visible";
      cheer.innerHTML = "<img src=\'cheering.gif' width=\'100%\' height=\'100%\' border-radius=\'10px\'>";
      shot.innerHTML = "<img src=\'four.gif' width=\'380px\' height=\'100%\' border-radius=\'10px\'>";

    } else if (targetScore > 0) {
      cheer.innerHTML = "";
      shot.innerText = "";
      score += Number(computerchoose);
      compDis.innerText = computerchoose;
      userDis.innerText = useropted;
      userscore.innerText = (score + "-" + wicket);
    }
  }

}

