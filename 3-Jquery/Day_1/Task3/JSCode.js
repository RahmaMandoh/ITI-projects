$(".Plus").click(function(){


    //val -? "" span
    $(".InputFilds").append(
        `<div class = "child">
        <div>
            // <input type="checkbox" checked/>
            <span class="">${$('input[type="text"]').val()}</span>
        </div>
                
        <img class="Delete" src="svgexport-15 (10).svg"/>
        </div>`
    );
    $('input[type="text"]').val("")
    $('.Delete').click(function () {
        $(this).parent().remove()
    })
});