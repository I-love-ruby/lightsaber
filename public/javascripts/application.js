// Javascript Goes Here~
//
$(document).ready(funtion(){
  $("#login_button").on("click",function(event){
    event.preventDefault();
    $.ajax({
      type:'get',
      url:'/login'
    }).success(function(resonse){
      $("#login_button").hide();
    });
  });
});

$