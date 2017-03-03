
var question1={question:"Being hosts,which country was the first one that qualified for the Olympics?",
answer:"Brazil",
posanswer1:"England",
answerposanswer1:"Close enough.However, England hosted the last Olympiad in 2012",
posanswer2:"Japan",
answerposanswer2:"No",
posanswer3:"USA",
answerposanswer3:"No"

};
var question2={question:"What team won the Wold League title in 2015?",
answer:"France",
posanswer1:"Serbia",
answerposanswer1:"Close enough.However,Serbia reached final but they didn't win that match",
posanswer2:"Italy",
answerposanswer2:"No,Italy finished on the 6th position",
posanswer3:"Brazil",
answerposanswer3:"No,Brazil finished on the 5th position"

};
var question3={question:"How long is a volleyball court?",
answer:"18m",
posanswer1:"9m",
answerposanswer1:"9m is the width of the court",
posanswer2:"28.65 m",
answerposanswer2:"28.65 m is the length of a basketball court",
posanswer3:"20.12m",
answerposanswer3:"20.12 m is the length of a cricket field"


};

var question4={question:"Which country won the World Grand Prix in 2015?",
answer:"USA",
posanswer1:"Italy",
answerposanswer1:"Italy finished on 5th position",
posanswer2:"Russia",
answerposanswer2:"Close enough,however,reached final but didn't win it",
posanswer3:"Brazil",
answerposanswer3:"Brazil finished on 3rd position"



};

var question5={question:"In the beach volleyball, a team wins a set when it reaches:?",
answer:"21points",
posanswer1:"25points",
answerposanswer1:"25 points is for indoor volleyball",
posanswer2:"11points",
answerposanswer2:"11 points is for tennis table",
posanswer3:"22points",
answerposanswer3:"Your answer was close."


};

var question6={question:"How many players can play on each side of the court?",
answer:"6 players",
posanswer1:"11 players",
answerposanswer1:"That's football",
posanswer2:"7 players",
answerposanswer2:"That's handball",
posanswer3:"2 players",
answerposanswer3:"That's beach volleyball"};


var storequestions= new Array(6);
storequestions[0]=question1;
storequestions[1]=question2;
storequestions[2]=question3;
storequestions[3]=question4;
storequestions[4]=question5;
storequestions[5]=question6;


var generate=Math.floor((Math.random() * 6) + 1);
var generate2=Math.floor((Math.random() * 6) + 1);
var generate3=Math.floor((Math.random()* 6)+1);
var firstquestion,secondquestion,thirdquestion;
var count=0;

function displayoptions(){

//

for(var x=0;x<storequestions.length;x++){
if((generate-1)==x){/*as the numbers that are generated are between 1 and 6(6-1+1=6 numbers), the array's index is only between 0 and 5(5-0+1=6 indexes)*/
firstquestion=document.getElementById("firstquestion").innerHTML=storequestions[x].question;
document.getElementsByClassName("label1")[0].innerHTML=storequestions[x].answer;
document.questionnaire.answerfirstquestion[0].value=storequestions[x].answer;
document.getElementsByClassName("label1")[1].innerHTML=storequestions[x].posanswer1;
document.questionnaire.answerfirstquestion[1].value=storequestions[x].posanswer1;

document.getElementsByClassName("label1")[2].innerHTML=storequestions[x].posanswer2;
document.questionnaire.answerfirstquestion[2].value=storequestions[x].posanswer2;

document.getElementsByClassName("label1")[3].innerHTML=storequestions[x].posanswer3;
document.questionnaire.answerfirstquestion[3].value=storequestions[x].posanswer3;




}}


//don't want the same question to appear twice
do{
  generate2=Math.floor((Math.random() * 6) + 1);}
  while(generate2==generate);


  for(var x=0;x<storequestions.length;x++){
  if((generate2-1)==x){
  secondquestion=document.getElementById("secondquestion").innerHTML=storequestions[x].question;
  document.getElementsByClassName("label2")[0].innerHTML=storequestions[x].answer;
  document.questionnaire.answersecondquestion[0].value=storequestions[x].answer;

  document.getElementsByClassName("label2")[1].innerHTML=storequestions[x].posanswer1;
  document.questionnaire.answersecondquestion[1].value=storequestions[x].posanswer1;

  document.getElementsByClassName("label2")[2].innerHTML=storequestions[x].posanswer2;
  document.questionnaire.answersecondquestion[2].value=storequestions[x].posanswer2;

  document.getElementsByClassName("label2")[3].innerHTML=storequestions[x].posanswer3;
  document.questionnaire.answersecondquestion[3].value=storequestions[x].posanswer3;
}}


//don't want the same question to appear twice
do{
  generate3=Math.floor((Math.random() * 6) + 1);}
  while(generate==generate3 || generate2==generate3);


  for(var x=0;x<storequestions.length;x++){
  if((generate3-1)==x){
  thirdquestion=document.getElementById("thirdquestion").innerHTML=storequestions[x].question;
  document.getElementsByClassName("label3")[0].innerHTML=storequestions[x].answer;
  document.questionnaire.answerthirdquestion[0].value=storequestions[x].answer;

  document.getElementsByClassName("label3")[1].innerHTML=storequestions[x].posanswer1;
  document.questionnaire.answerthirdquestion[1].value=storequestions[x].posanswer1;

  document.getElementsByClassName("label3")[2].innerHTML=storequestions[x].posanswer2;
  document.questionnaire.answerthirdquestion[2].value=storequestions[x].posanswer2;

  document.getElementsByClassName("label3")[3].innerHTML=storequestions[x].posanswer3;
  document.questionnaire.answerthirdquestion[3].value=storequestions[x].posanswer3;
  }
}

}

displayoptions();
function check()
{
  for(var x=0;x<storequestions.length;x++){
    //first field
      if(firstquestion==storequestions[x].question)
      {
          if(document.questionnaire.answerfirstquestion[0].checked){
          document.getElementById("feedback1").innerHTML="well done";
          count=count+100/3;}
          else if(document.questionnaire.answerfirstquestion[1].checked)
          document.getElementById("feedback1").innerHTML=storequestions[x].answerposanswer1;


          else if(document.questionnaire.answerfirstquestion[2].checked)
          document.getElementById("feedback1").innerHTML=storequestions[x].answerposanswer2;

          else if(document.questionnaire.answerfirstquestion[3].checked)
            document.getElementById("feedback1").innerHTML=storequestions[x].answerposanswer3;

          else

          document.getElementById("feedback1").innerHTML="You haven't choose an option . Please choose one";

        }



        //second field
        if(secondquestion==storequestions[x].question){


                if(document.questionnaire.answersecondquestion[0].checked){
                document.getElementById("feedback2").innerHTML="well done";
                count=count+100/3;}

                  else if(document.questionnaire.answersecondquestion[1].checked)
                  document.getElementById("feedback2").innerHTML=storequestions[x].answerposanswer1;

                else if(document.questionnaire.answersecondquestion[2].checked)
                document.getElementById("feedback2").innerHTML=storequestions[x].answerposanswer2;

                else if(document.questionnaire.answersecondquestion[3].checked)
                document.getElementById("feedback2").innerHTML=storequestions[x].answerposanswer3;

                else
                document.getElementById("feedback2").innerHTML="You haven't choose an option . Please choose one";


              }
//third field
              if(thirdquestion==storequestions[x].question){


                      if(document.questionnaire.answerthirdquestion[0].checked){
                      document.getElementById("feedback3").innerHTML="well done";
                      count=count+100/3}
                      else if(document.questionnaire.answerthirdquestion[1].checked)
                      document.getElementById("feedback3").innerHTML=storequestions[x].answerposanswer1;

                      else if(document.questionnaire.answerthirdquestion[2].checked)
                      document.getElementById("feedback3").innerHTML=storequestions[x].answerposanswer2;

                      else if(document.questionnaire.answerthirdquestion[3].checked)
                      document.getElementById("feedback3").innerHTML=storequestions[x].answerposanswer3;

                      else

                      document.getElementById("feedback3").innerHTML="You haven't choose an option. Please choose one";


                    }
            }
            useranswer();
          }


          function useranswer(){
            if(document.questionnaire.answerfirstquestion[0].checked)
            document.getElementsByClassName("youranswer")[0].innerHTML="Correct answer";

            else {

            for(var x=1;x<=3;x++)
            if(document.questionnaire.answerfirstquestion[x].checked)
              document.getElementsByClassName("youranswer")[x].innerHTML="Wrong answer";
          }
          if(document.questionnaire.answersecondquestion[0].checked)
            document.getElementsByClassName("youranswer2")[0].innerHTML="Correct answer";

            else {

          for(var x=1;x<=3;x++)
          if(document.questionnaire.answersecondquestion[x].checked)
          document.getElementsByClassName("youranswer2")[x].innerHTML="Wrong answer";
          }

          if(document.questionnaire.answerthirdquestion[0].checked)
          document.getElementsByClassName("youranswer3")[0].innerHTML="Correct answer";

          else {

          for(var x=1;x<=3;x++)
          if(document.questionnaire.answerthirdquestion[x].checked)
            document.getElementsByClassName("youranswer3")[x].innerHTML="Wrong answer";

          }
          alert(count+"% of your answers was correct");
          
          }


          function anothergo()
          {

            location.reload();
          }
