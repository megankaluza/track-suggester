$(document).ready(function(event){
  var result = result;
  var developer = $("input#developer").val();
  var designer = $("input#designer").val();
  var php = $("input#php").val ();
  var android = $("input#android").val();

  $("button").click(function(){
    $(".intro-form").addClass("show");
  });
  //Developer//
  $("input#developer").click(function(){
    $(".developer-form").addClass("show");
  });
  //Designer//
  $("input#designer").click(function(){
    $(".designer-form").addClass("show");
  });
  //Designer: Choose Manipulate your own design//
  $("input#illustrate").click(function(){
    $(".user-form").addClass("show");
  });
  //Designer: Choose Manipulate Templates//
  $("input#manipulate").click(function(){
    $(".develop-form").addClass("show");
  });
  //Designer: Choose develop Wordpress, Drupal, and Joomla//
  //IF STATEMENT(PHP AND DRUPAL)//
  $("input#php").click(function(){
    $("#output").addClass("show");
  });
  //Designer: Choose develop Android//
  //IF STATEMENT(Java AND Android)//
  $("input#android").click(function(){
    $("#output2").addClass("show");
  });
  //Designer: Choose User Interface (UI) & atomic design//
  //IF STATEMENT(CSS AND DESIGN)
  $("input#user-interface").click(function(){
    $("#output3").addClass("show");
  });
  //Designer: Choose Object-oriented design basics//
  //IF STATEMENT(C# AND .NET)
  $("input#object-oriented").click (function(){
    $("#output4").addClass("show");
  });
  //Developer: Choose start-up company//
  $("input#start-up").click(function(){
    $(".develop-form").addClass("show");
  });
  //Developer: Choose larger complany//
  $("input#large").click(function(){
    $(".micro-form").addClass("show");
  });
  //Developer: Choose Microsoft//
  //IF STATEMENT(JAVA and C#)//
  $("input#microsoft").click(function(){
    $("#output5").addClass("show");
  });
  //Developer: Choose .NET//
  //IF STATEMENT (Ruby and Rails)//
  $("input#net").click (function(){
    $("#output6").addClass("show");
  });
  //event.preventDefault();
});
