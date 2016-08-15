$(document).ready(function(){
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
    $(".develop-form").show("show");
  });

  if (result === 'php') {
    $("#php-drupal").addClass("show");
  } else if (result === 'android') {
    $("#java-android").addClass("show");
    $("php-drupal").removeClass();
  };
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
    $(".develop-form").addClass("show");
  });
  //Developer: Choose larger complany//
  $("input#large").click(function(){
    $(".micro-form").addClass("show");
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
