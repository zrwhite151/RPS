/*let chosenWeapon=[0,0]
let playerWeapon = chosenWeapon[0];
let cpuWeapon = chosenWeapon[1];
let playerScore= 0;
let cpuScore = 0

init()

document.getElementsByClassName('throw-btn')[0].addEventListener('click', throwBtn);

let random = Math.floor(Math.random()*3) +1;

function init() {
  let chosenWeapon=[0,0]
  let playerWeapon = chosenWeapon[0];
  let cpuWeapon = chosenWeapon[1];
  let playerScore= 0;
  let cpuScore = 0
}

function throwBtn() {

chosenWeapon[1] = random;

  if(chosenWeapon[0] === 1) {
    let playerWeapon = 'rock'
  } else if (chosenWeapon[0] === 2) {
    let playerWeapon = 'paper'
  } else if (chosenWeapon[0] === 3) {
    let playerWeapon = 'scissors'
  };

document.getElementsByClassName('player-chosen')[0].textContent = chosenWeapon[0];
document.getElementsByClassName('player-chosen-img')[0].src = '/img/' + chosenWeapon[0] + '.jpg';

// assigns word to cpu choice
  if(chosenWeapon[1] = 1) {
    let cpuWeapon = 'rock'
  } else if (chosenWeapon[1] = 2) {
    let cpuWeapon = 'paper'
  } else if (chosenWeapon[1] = 3) {
    let cpuWeapon = 'scissors'
  };

  document.getElementsByClassName('cpu-chosen')[0].textContent = chosenWeapon[1];
  document.getElementsByClassName('cpu-chosen-img')[0].src = '/img/' + chosenWeapon[1] + '.jpg';


// game logic
let winMsg= document.getElementsByClassName('win-msg')[0].textContent;
let cpuScore = document.getElementsByClassName('cpuScore')[0].textContent;
if(chosenWeapon[0] == chosenWeapon[1]) {
   winMsg = 'You Tied!'
} else if (chosenWeapon[0] == 1 && chosenWeapon[1] == 2) {
   winMsg = 'Cpu Wins!';
   cpuScore ++;
}  else if (chosenWeapon[0] == 1 && chosenWeapon[1] == 3) {
   winMsg = 'Player Wins!';
   playerScore ++;
}  else if (chosenWeapon[0] == 2 && chosenWeapon[1] == 1) {
   winMsg = 'Player Wins!';
   playerScore ++;
}  else if (chosenWeapon[0] == 2 && chosenWeapon[1] == 3) {
   winMsg = 'Cpu Wins!';
   cpuScore ++;
}  else if (chosenWeapon[0] == 3 && chosenWeapon[1] == 2) {
   winMsg = 'Player Wins!';
   playerScore ++;
}  else if (chosenWeapon[0] == 3 && chosenWeapon[1] == 1) {
   winMsg = 'Cpu Wins!';
   cpuScore ++;
};
}

//rock button
document.getElementsByClassName('rock-btn')[0].addEventListener('click', function() {
  chosenWeapon[0] = 1;
  console.log(chosenWeapon[0]);
})

// paper button
document.getElementsByClassName('paper-btn')[0].addEventListener('click', function() {
  chosenWeapon[0] = 2;

  console.log(chosenWeapon[0]);
})

// scissors button
document.getElementsByClassName('scissors-btn')[0].addEventListener('click', function() {
  chosenWeapon[0] = 3;

  console.log(chosenWeapon[0]);
})
*/


let player = 0;
let cpu = 0;

let playerScore = 0;
let cpuScore = 0;

let playerChoiceDisplay = document.getElementById('player-chosen');
let cpuChosenDisplay = document.getElementById('cpu-chosen');

let playerBgImage = document.getElementsByClassName('player-box')[0];
let cpuBgImage = document.getElementsByClassName('cpu-box')[0];


//rock button
document.getElementsByClassName('rock-btn')[0].addEventListener('click', function() {
  player = 1;
  playerChoiceDisplay.textContent = 'Rock';
  playerBgImage.style.backgroundImage = "url('/img/Rock.png')";
  console.log(player);
})

// paper button
document.getElementsByClassName('paper-btn')[0].addEventListener('click', function() {
  player = 2;
  playerChoiceDisplay.textContent = 'Paper';
  playerBgImage.style.backgroundImage = "url('/img/Paper.png')";
  console.log(player);
})

// scissors button
document.getElementsByClassName('scissors-btn')[0].addEventListener('click', function() {
  player = 3;
  playerChoiceDisplay.textContent = 'Scissors';
  playerBgImage.style.backgroundImage = "url('/img/Scissors.png')";
  console.log(player);
})



function cpuChosen() {
cpu = Math.floor(Math.random() * 3) + 1;

if (cpu == 1) {
cpuChosenDisplay.textContent = 'Rock';
cpuBgImage.style.backgroundImage = "url('/img/Rock.png')";
} else if (cpu == 2) {
  cpuChosenDisplay.textContent = 'Paper';
  cpuBgImage.style.backgroundImage = "url('/img/Paper.png')";
} else if (cpu == 3) {
  cpuChosenDisplay.textContent = 'Scissors';
  cpuBgImage.style.backgroundImage = "url('/img/Scissors.png')";
}
};

function chooseWinner(){

let winMsg = document.getElementById('win-msg');

if(player == cpu) {
   winMsg.textContent = 'You Tied!'
   winMsg.style.color = "#101775"
}
else if (player == 1 && cpu == 2) {
   winMsg.textContent = 'Cpu Wins!'
   winMsg.style.color = '#7B0828'
   cpuScore++
}
else if (player == 1 && cpu == 3) {
   winMsg.textContent = 'Player Wins!'
   winMsg.style.color = "#05DC3B"
   playerScore++
}
else if (player == 2 && cpu == 1) {
   winMsg.textContent = 'Player Wins!'
   winMsg.style.color = "#05DC3B"
   playerScore++
}
  else if (player == 2 && cpu == 3) {
   winMsg.textContent = 'Cpu Wins!'
    winMsg.style.color = '#7B0828'
   cpuScore++
}
  else if (player == 3 && cpu == 2) {
   winMsg.textContent = 'Player Wins!'
   winMsg.style.color = "#05DC3B"
   playerScore++
}
  else if (player == 3 && cpu == 1) {
  winMsg.textContent = 'Cpu Wins!'
   winMsg.style.color = '#7B0828'
   cpuScore++
} else {
};

document.getElementsByClassName('playerScore')[0].textContent = playerScore;
document.getElementsByClassName('cpuScore')[0].textContent = cpuScore;

};


function playRound() {
  if (player == 0){
    alert('You Must Choose Your Weapon');
  } else {
  cpuChosen();
  chooseWinner();
};

};
