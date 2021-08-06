var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var quizData = [
  {
    question: `1. The “Scarlett Speedster” is the nickname of which superhero?
   a.Flash
   b.Spider-man
   c.Wally West
   d.Zoom\n`,
    answer: "a",
    hint: " Hint: Scarlett Speedster can move really fast."
  },
  {
    question: `2. What is the name of Batman's loyal assistant?
   a.Dave Pennyworth
   b.Alfred Pennyworth
   c.Albert Pennyworth
   d.Peter Pennyworth\n`,
    answer: "b",
    hint: " Hint: He was a former British intelligence officer before becoming Batman's assistant"
  },
  {
    question: `3. Which DC superhero's real name is Arthur Curry?
   a.Martian Manhunter
   b.AquaMan
   c.The Flash
   d.Shazam\n`,
    answer: "b",
    hint: " Hint: He's the King of the lost city."
  },
  {
    question: `4. Which of following heroes has taken the title of Spider-Man?
   a.Harry Osborn
   b.Mary Jane
   c.Barry Allen
   d.Miles Morales\n`,
    answer: "d",
    hint: " Hint: He is the second Spider-Man, succeeding Peter Parker after his supposed death."
  },
  {
    question: `5.What is All-Might superpower/quirk called? 
   a.One for All
   b.All for One
   c.Engine
   d.Explosion\n`,
    answer: "a",
    hint: " Hint: It's a quirk which stockpile the powers and can be transferred from one person to another."
  },
  {
    question: `6.Thor’s Hammer Mjolnir is made of metal from the heart of a dying what? 
   a.Demon
   b.Comet
   c.Star
   d.Dragon\n`,
    answer: "c",
    hint: " Hint: Its is an astronomical object."
  },
  {
    question: `7. Who is Saitama’s disciple?
   a.King
   b.Sonic
   c.Bang
   d.Genos\n`,
    answer: "d",
    hint: " Hint: He is a cyborg with a superhero name Demon Cyborg."
  },
  {
    question: `8.What is Tony Stark's business empire called?
   a.Stark Industries
   b.Stark Corp
   c.Stark Limited
   d.Stark Empire\n`,
    answer: "a",
    hint: ` Hint: Its between these two:-
        a.Stark Industries
        b.Stark Corp`
  },
  {
    question: `9. What is Saitama’s hero name under the Hero Association?
   a.Blizzard of Hell
   b.Caped Baldy
   c.Lightning Genji
   d.Tornado of Terror\n`,
    answer: "b",
    hint: " Hint: It is associated with his looks."
  },
  {
    question: `10. What is the name of Black Bolt brother in Inhumans?
   a.Maxtern
   b.Gorgan
   c.Mordis
   d.Maximus\n`,
    answer: "d",
    hint: " Hint: The answer is in the description."
  }
];

console.log(chalk.whiteBright.bgBlue.bold('   WELCOME TO THE ULTIMATE SUPERHERO QUIZ!   \n'));

console.log(
  chalk.rgb(34, 214, 196).bold('The ultimate superhero quiz is a quiz of Marvel, DC, Anime superheroes. Hope you like it, have fun! \n')
);

var userName = readlineSync.question(chalk.blueBright("Enter your Name: "));


console.log(
  chalk.white.bgMagenta.bold(`\n Welcome ${userName.toUpperCase()} To The Quiz! \n\n`) +
  chalk.yellowBright('-Type "Rule" and press enter to know the rules!\n') +
  chalk.green('-Type "Start" and press enter to start the quiz.\n')
);

var response = readlineSync.question(chalk.blue("Enter your Response: "));

if (response.toLowerCase() == "rule") {
  console.log(
    chalk.yellowBright('\n----------------Rules-------------\n1.Total 10 questions are there each question is compulsory. \n2.For every correct answer without using hints you will get 10 points.\n3.If you use hints you will get 5 points for the correct answer.\n4.For wrong answer -5 points.\n5.Type "hint" and press enter to get a hint.\n6.Submit your answer in a,b,c,d.\n7.Type "start" to start the game.\n-----------------------------------\n')
  );

  response = readlineSync.question(chalk.blue("Enter your Response: "));
}


function quiz(questionAsked, answerGiven, hintGiven) {
    console.log(chalk.cyanBright(questionAsked));
    var userAnswer = readlineSync.question(chalk.blue("Enter your Answer: "));
  
    if (userAnswer.toLowerCase() === "hint") {
      console.log(chalk.yellowBright(hintGiven));
      var hintAnswer = readlineSync.question(chalk.blue("Enter your Answer: "));
  
      if (hintAnswer.toLowerCase() === answerGiven.toLowerCase()) {
        score = score + 5;
        console.log(chalk.green(' Correct! '));
        console.log(chalk.bgYellow(' Score:', score + " "));
        console.log(chalk.greenBright("---------------------------------"));
  
      } else {
        score = score - 5;
        console.log(chalk.redBright(' Wrong!, correct answer is:', answerGiven));
        console.log(chalk.bgYellow(' Score:', score + " "));
        console.log(chalk.green("----------------------------------"));
      }
    }
    else if (userAnswer.toLowerCase() === answerGiven.toLowerCase()) {
      score = score + 10;
      console.log(chalk.green(' Correct! '));
      console.log(chalk.bgYellow(' Score:', score + " "));
      console.log(chalk.greenBright("----------------------------------"));
  
    } else {
      score = score - 5;
      console.log(chalk.redBright(' Wrong!, correct answer is:', answerGiven));
      console.log(chalk.bgYellow(' Score:', score + " "));
      console.log(chalk.greenBright("----------------------------------"));
    }
  
  }

  if (response.toLowerCase() == "start") {
    console.log(chalk.green("\n--------------START-------------\n"));
    for (var i = 0; i < quizData.length; i++) {
      var currentData = quizData[i];
      quiz(currentData.question, currentData.answer, currentData.hint);
      if (i == quizData.length - 1) {
        console.log(chalk.bgRed("\t Your Final Score is:", score, " "));
      }
    }
  }

  var scoreBoard = [
    {
      playerName: userName.toUpperCase(),
      totalScore: score
    },
    {
      playerName: "ABHAY",
      totalScore: 70
    },
    {
      playerName: "PRANAY",
      totalScore: 65
    },
    {
      playerName: "RAHUL",
      totalScore: 25
    },
    {
      playerName: "HARSH",
      totalScore: 60
    },
  
  ];


  var ranking = [];
for (var i = 0; i < scoreBoard.length; i++) {
  var rank = -1;
  for (var j = 0; j < scoreBoard.length; j++) {
    if(scoreBoard[i].totalScore == scoreBoard[j].totalScore){
        rank++;
        scoreBoard[i].totalScore = scoreBoard[i].totalScore+1;
    }else if(scoreBoard[i].totalScore < scoreBoard[j].totalScore){
        rank++;
    }
  }
  ranking[rank] = { nickname: scoreBoard[i].playerName, playerscore: scoreBoard[i].totalScore };
}

function leaderBoard() {
  console.log(chalk.green("-------------LEADERBOARD-----------"));
  for (var i = 0; i < ranking.length; i++) {
    if((i === 0)&&(ranking[i].nickname == userName.toUpperCase())){
      console.log(chalk.red("Congratulation!, You are the top scorer."));
      console.log(chalk.cyanBright(`  #${i+1}  ${ranking[i].playerscore-1}  ${ranking[i].nickname} `));
    }else{
      console.log(chalk.cyanBright(`  #${i+1}  ${ranking[i].playerscore-1}  ${ranking[i].nickname} `));      
    }
  }
  console.log(chalk.green("-----------------END---------------"));
}

leaderBoard();