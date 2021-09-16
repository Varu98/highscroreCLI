// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?

const readlineSync = require("readline-sync");

const studentArr = 
  {
    name:[],
    uMarks:[],
    pMarks:[],
    fMarks:[],

  }



for(let i=0;i<3;i++){

  // studentArr.name[i] 
  
  studentArr.name.push(readlineSync.question("Enter Students name "));
  studentArr.uMarks.push(parseInt(readlineSync.question("Enter Unit Marks ")));
  studentArr.pMarks.push(parseInt(readlineSync.question("Enter pre marks ")));
  studentArr.fMarks.push(parseInt(readlineSync.question("Enter final marks ")));
}

//yep understood

/*
 Student 1
 uMarks = 10
 pMarks = 20
 fMarks = 10

 total = 40

 40 >  0? Yes 
*/

let total = []

for(let i=0;i<3;i++){
   total[i] = studentArr.uMarks[i] + studentArr.pMarks[i] + studentArr.fMarks[i];
}

let highscorer="";
let highscore = 0;
// total = [100, 20, 50, 67, 78];

total.forEach((t,index) => {
    if(highscore<t){
        highscore = t;

        highscorer = studentArr.name[index];
        console.log(highscore,highscorer,highscore/3);
    }
});

//yep

//okie 

// No Doubts 

//Bharati you completed eloquent js ? okie okie

//Thanks A LOT!!!

// https://www.w3schools.com/jsref/jsref_round.asp
//Eureka!!

console.log(highscore,highscorer,Math.round(highscore/3))
//ok
//i will keep the loop to 3 students
// one second
//okie
// Math.round(highscore/3, 2);
// i will do..and if i need help can i ask varu is it fine??
//yepp anytime
// Yes, your wish! 

// Lets End The CAll TAke CAre guys