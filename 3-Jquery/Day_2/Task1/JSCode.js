var aboutOffSet = ($("#ProductContant2").offset().top);
$(window).scroll(function(){
  var scrollTop = ($(window).scrollTop());
  if(scrollTop > (aboutOffSet - 50)){
    $("nav").css("backgroundColor", "tomato");
    $("span").show(500);
  }else{
    $("nav").css("backgroundColor", "blue");
    $("span").hide(1000);
  }
});

$("span").click(function(){
  $("html").animate({scrollTop : 0}, 1000);
});