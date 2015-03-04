// Javascript Goes Here~
//
$(document).ready(funtion(){

  $('#login_button').on("click",function(event){
    event.preventDefault();
    $.ajax({
      type:'get',
      url:'/login'
    }).success(function(resonse){
      $("#login_button").hide();
    });
  });

$('#signup_button').on("click",function(event){
  $event.preventDefault();
  var target = $(this);
  var url =target.attr('href');
      if ($('nav #signup-form').length === 0) {
      $.ajax({
        type: 'get',
        url: url,
        success: function (response) {
          target.after(response);
        }
      });
    } else {
      $('#signup-form').remove();
    }
  });
 });

});