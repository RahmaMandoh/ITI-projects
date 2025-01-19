$(".Tab1").click(function(){
    $(".Content").fadeIn(1000)
    $(".Content").text(`Contant ${$(this).text().split(" ")[1]}`);
});