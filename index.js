console.log("Hey there, Thanks for opening this site");
const readLineSync = require('readline-sync');
const name = readLineSync.question('What is your name?\n');
console.log(`Hello ${name}! , feeling bored? Lets play quiz on KNOW YOUR COUNTRY`)
let questions = [{
  q1: 'What Indian city is the capital of two states?',
  choice: ' 1) Kolkota\n 2)chennai\n 3)Chandigarh\n 4)Mumbai\n',
  edge: '===========================================',
  next_question: 'Thankyou, lets move to next question',
  answer: '3'
},
{
  q1: 'How many countries border India?',
  choice: ' 1)two\n 2)six\n 3)Nine\n 4)Fourteen\n',
  edge: '===========================================',
  next_question: 'Thankyou, lets move to next question',
  answer: '2'
},
{
  q1: 'What is the capital of Gujarat?',
  choice: ' 1)Gandhinagar\n 2)Srinagar\n 3)Aizwal\n 4)Banglore\n',
  edge: '===========================================',
  next_question: 'Thankyou, lets move to next question',
  answer: '1'

},
{
  q1: 'Who is the president of India in 2009?',
  choice: ' 1)Ramnath kovind\n 2)Jawharlal Nehru\n 3)Indira Gandhi\n 4)Prathiba patil\n',
  edge: '===========================================',
  next_question: 'Thankyou, lets move to next question',
  answer: '4'
},
{
  q1: 'Who is our current Indian team cricket captain',
  choice: ' 1)Virat Kohli\n 2)Dhoni\n 3)Ganguly\n 4)Rahul Dravid\n',
  edge: '===========================================',
  next_question: 'Thankyou, lets move to next question',
  answer: '1'
}];
let correct_answer = 0;
for (let i = 0; i < 5; i++) {
  console.log("Question)" + " " + questions[i].q1);
  console.log(questions[i].choice);
  let option = readLineSync.question('You entered:\n');
  if (option === questions[i].answer) {
    console.log('You are correct');
    correct_answer++;
  } else {
    console.log('Incorrect answer');
  }
  console.log(questions[i].next_question);
  console.log(questions[i].edge);
}
  console.log("You are done with questions,lets check your score.");
  console.log(`Hey ${name}, your score is ${correct_answer}`);

