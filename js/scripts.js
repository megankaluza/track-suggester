$(document).ready(function(){
  var result = result;
  var click = click;
  var d3 = $("input#d3").val();
  var d4 = $("input#d4").val();
  var d5 = $("input#d5").val();
  var d6 = $("input#d6").val();
  var d7 = $("input#d7").val();
  var d8 = $("input#d8").val();
  var d9 = $("input#d9").val();
  var d10 = $("input#d10").val();
  var d11 = $("input#d11").val();
  var d12 = $("input#d12").val();
  var d13 = $("input#d13").val();
  var d14 = $("input#d14").val();
  var form2 = $(".form2").val();
  var form3 = $(".form3").val();
  var form4 = $(".form4").val();
  var form5 = $(".form5").val();
  var form6 = $(".form6").val();
  var form7 = $(".form7").val();

  $("button").click(function(){
    $(".form").fadeIn();
  });
//Developer//
  $("input#d2").click(function(){
    $(".form3").show();
  });
//Designer//
  $("input#d3").click(function(){
    $(".form2").show();
  });
//Designer: Choose Illustrate Photos//
  $("input#d4").click(function(){
    $(".form6").show();
  });
//Designer: Choose Manipulate Templates//
 $("input#d5").click(function(){
   $(".form4").show();
 });
 //Designer: Choose develop Wordpress, Drupal, and Joomla//
 $("input#d8").click(function(){
   $("span#php").show();
 });


//Desginer: Choose develop Android//





$("#output").click(function(event){
event.preventDefault();

$("#output").text(result);

  });
});
