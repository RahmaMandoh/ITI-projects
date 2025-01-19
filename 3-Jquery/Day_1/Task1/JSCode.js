$("#loader").animate({ width: "100%" }, 2000);
$("#loader").animate({ height: "100vh" }, 1500, function () {
  $("h1").fadeIn(1000, function () {
    $("#POne").fadeIn(1000, function () {
      for (var i = 0; i < 3; i++) {
        (function(i){

            setTimeout(() => {
              $("img")
                .eq(i)
                .slideDown(1000, function () {
                  $(".ProductsContaner  p").fadeIn(1000);
                });
            }, 1000 * (i));
        })(i)
      }
    });
  });
});
