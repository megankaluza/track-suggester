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

if(questionOneInput === "developer") {
  php+=1;
  java+=2;
} else if (questionOneInput === "designer") {
  design+=2;
};

if (questionTwoInput === "manipulate") {
  php+=1;
} else if (questionTwoInput === "template") {
  design+=2;
  java+=1;
};

if (questionThreeInput === "start-up") {
  php+=1;
} else if (questionThreeInput === "large") {
  java+=1;
};

if (questionFourInput === "wordpress") {
  php+=1;
  design+=1;
} else if (questionFourInput === "android") {
  java+=1;
};

if (questionFiveInput === "back-end") {
  php+=1;
  java+=1;
} else if (questionFiveInput === "front-end") {
  design+=2;
  java+=1;
};

if (questionSixInput === "mobile-user") {
  java+=2;
} else if (questionSixInput === "user-interface") {
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
