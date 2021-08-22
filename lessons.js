function f(){
}
var questionCount=0;
var wrongScore=0;
var correctScore=0;

var result = document.getElementById("result");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click",correct);
q1a2.addEventListener("click",wrong);

q2a1.addEventListener("click",correct);
q2a2.addEventListener("click",wrong);

q3a1.addEventListener("click",correct);
q3a2.addEventListener("click",wrong);

function correct(){
correctScore +=1;
questionCount +=1;

console.log("questionCount="+questionCount+"correctScore="+correctScore);
  if (questionCount ==3){
    console.log("the quiz is done!")
  updateResult();
  }
}



function wrong(){
  wrongScore +=1;
  questionCount +=1;

  console.log("questionCount="+questionCount+"wrongScore="+wrongScore);
  if (questionCount ==3){
    console.log("the quiz is done!")
  updateResult();
  }
 }


function updateResult(){
  if(correctScore >=2){
    result.innerHTML="You comprehend the information great";
    console.log("Practice");
  }else if (wrongScore >=2){
    result.innerHTML="You comprehend the information great";
    console.log("Practice");
  }
}