$(document).ready(function(){
  $("form#track").submit(function(event){
  var questionOneInput = $("input:radio[name=questionOne]:checked").val();
  var questionTwoInput = $("input:radio[name=questionTwo]:checked").val();
  var questionThreeInput = $("input:radio[name=questionThree]:checked").val();
  var questionFourInput = $("input:radio[name=questionFour]:checked").val();
  var questionFiveInput = $("input:radio[name=questionFive]:checked").val();
  var questionSixInput = $("input:radio[name=questionSix]:checked").val();
  var design = 0;
  var java = 0;
  var php = 0;

if(questionOneInput === "Developer") {
  php+=1;
  java+=2;
} else if (questionOneInput === "Designer") {
  design+=2;
};

if (questionTwoInput === "Manipulate Templates") {
  php+=1;
} else if (questionTwoInput === "Manipulate your own Design") {
  design+=2;
  java+=1;
};

if (questionThreeInput === "Start-Up Company") {
  php+=1;
} else if (questionThreeInput === "Larger Company") {
  java+=1;
};

if (questionFourInput === "Develop Wordpress, Drupal, and Joomla") {
  php+=1;
  design+=1;
} else if (questionFourInput === "Develop Android") {
  java+=1;
};

if (questionFiveInput === "Back-End Development") {
  php+=1;
  java+=1;
} else if (questionFiveInput === "Front-End Design") {
  design+=2;
  java+=1;
};

if (questionSixInput === "Mobile User Interface (UI)") {
  java+=2;
} else if (questionSixInput === "User Interface (UI)") {
  design+=2;
};

if (design > php && design > java) {
   $("#design").addClass("show");
} else if (php > design && php > java) {
   $("#php").addClass("show");
} else if (java > design && java > php) {
   $("#java").addClass("show");
};

  event.preventDefault();
  });
});
