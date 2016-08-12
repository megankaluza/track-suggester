$(document).ready(function(){
  var result = result;
  var php = $("input#php").val ();

  $("button").click(function(){
    $(".intro-form").fadeIn();
  });
  //Developer//
  $("input#developer").click(function(){
    $(".developer-form").show();
  });
  //Designer//
  $("input#designer").click(function(){
    $(".designer-form").show();
  });
  //Designer: Choose Manipulate your own design//
  $("input#illustrate").click(function(){
    $(".user-form").show();
  });
  //Designer: Choose Manipulate Templates//
  $("input#manipulate").click(function(){
    $(".develop-form").show();
  });

  document.getElementById("php").addEventListener("click", function() {
    var result = result;

    if (result === 'php') {
      $("#php").show();
    } else if (result === 'android') {
      $("#android").show();
    
    };
      $("#output").text(result);
  });

  //Designer: Choose develop Wordpress, Drupal, and Joomla//
  //IF STATEMENT(PHP AND DRUPAL)//
  //Designer: Choose develop Android//
  //IF STATEMENT(Java AND Android)//


  //Designer: Choose User Interface (UI) & atomic design//
  //IF STATEMENT(CSS AND DESIGN)
  //Designer: Choose Object-oriented design basics//
  //IF STATEMENT(C# AND .NET

  //Developer: Choose start-up company//
  $("input#start-up").click(function(){
    $(".develop-form").show();
  });

  //Developer: Choose larger complany//
  $("input#large").click(function(){
    $(".micro-form").show();
  });

  //Developer: Choose develop Wordpress, Drupal, and Joomla//
  //IF STATEMENT(PHP AND DRUPAL)//
  //Developer: Choose develop Android//
  //IF STATEMENT(Java AND Android)//

  //Developer: Choose Microsoft//
  //IF STATEMENT(JAVA and C#)//
  //Developer: Choose .NET//
  //IF STATEMENT (Ruby and Rails)//
});
