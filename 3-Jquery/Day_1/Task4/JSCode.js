$("img").click(function(e){
   var imgsrc = $(e.target).attr("src");
   $(".mainImg").attr("src", imgsrc);
})