$(".imageHeader").click( function(e){
    e.preventDefault();
    count = $(".imageHeader").index(this);
    var imageTarget = $(this).attr("src");
    $(".mainImageFocuse").attr("src", imageTarget);
    $(".imageFocus").fadeToggle( function(){
        $(".imageFocus").css("display", "flex");
    });
})
var count = 0;
console.log(count);
$(".imageFocus").click(function(e){
    if(e.target == this){
        $(".imageFocus").fadeToggle(1000);
    }
})
$(".nxt").click(function(){
    count++
    count = count % $(".imageHeader").length;
    var imageTarget = $(".imageHeader").eq(count).attr("src");
    $(".mainImageFocuse").attr("src",imageTarget );

})
$(".perv").click(function(){
    count--
    if(count < 0){
        count = $(".imageHeader").length - 1;
    }
    var imageTarget = $(".imageHeader").eq(count).attr("src");
    $(".mainImageFocuse").attr("src",imageTarget );
})

