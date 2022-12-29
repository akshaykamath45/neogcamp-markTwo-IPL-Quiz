var readlineSync = require("readline-sync");
console.log("IPL Quiz! \n")
var userName = readlineSync.question("What's your name? \n")
console.log("Welcome " + userName + " To IPL Quiz")
console.log("Let see how much do you know about IPL,if you are a cricket fan 😉.")

console.log("\n")
var score = 0
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log("Right!");
    score = score + 1;
  }
  else {
    console.log("Wrong")
  }
  console.log("Your total score is ", score)
  console.log("\n")
}
var highestScore = [
  {
    name: "Akshay",
    score: 4,
  },
  {
    name: "Jay",
    score: 3
  }
]
var questions = [{
  question: `Which team has won the IPL Most Times ?
  a:Mumbai Indians
  b:Chennai Super Kings
  c:Royal Challengers Bangalore
  d:Delhi Capitals
  `,
  answer: "a"
}, {
  question: `Who is the highest scorer in IPL All time?: 
  a:Rohit Sharma
  b:Suresh Raina
  c:Virat Kohli
  d:MS Dhoni
  `,
  answer: "c"
}, {
  question: `Who is the highest wicket taker in IPL ? :
  a:Lasith Malinga
  b:Dwayne Bravo
  c:Amit Mishra
  d:Yuvzendra Chahal
  `,
  answer: "b"
}, {
  question: `In which year did 1st IPL took place :
  a:2010
  b:2008
  c:2009
  d:2011
  `,
  answer: "b"
}, {
  question: `Who scored the century in the first match of IPL ? :
  a:Brendon McCullum
  b:Shane Watson
  c:Sachin Tendulkar
  d:Jacque Kallis
  `,
  answer: "a"
}];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("\n")
console.log("Previous Highest Scores were : ")
for (var i = 0; i < highestScore.length; i++) {
  currScore = highestScore[i];
  console.log(currScore.name);
  console.log(currScore.score);
  console.log("--------------");
}
if (score > currScore.score) {
  console.log("You might have the highest score,Send me the Screen Shot,So that I can Update the Score,Well Played.")
}

console.log("Thank You for Playing")