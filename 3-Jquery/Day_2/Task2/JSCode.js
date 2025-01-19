$.get('https://jsonplaceholder.typicode.com/users', function(data){
    data.forEach(function(ele , index){
        var btn = document.createElement("button");
        $(btn).text(ele.name);
        $(btn).addClass("btn");
        $(btn).attr("id", ele.id);
        $(".showBtns").append(btn);
        // console.log(btn);
    });
    $(".btn").click(function(){
        var btnId = $(this).attr("id");
        // $.get(`https://jsonplaceholder.typicode.com/posts?userId=${btnId}`,
        //     function(posts){
        //         console.log(posts);
        //     }
        // );
        // console.log($(this).attr("id"));
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts?userId=${btnId}`,
            method: "GET",
            success: function(posts){
                // console.log(posts[0]);
                $(".showData").empty();
                posts.forEach(function(post){
                    var newDiv = document.createElement("div");
                    var postDiv = $(newDiv).text(post.title);
                    $(postDiv).addClass("posts");
                    $(".showData").append(postDiv);
                });
            },

        });
    });
});
