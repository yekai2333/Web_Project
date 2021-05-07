$(document).ready(function(){
    $("#li-1").click(function(){
        $(".m-li").fadeTo("slow",0.15);
        $("#pic1").fadeIn(3000)
    });
    $("#pic1").click(function(){
        $("#pic1").fadeOut(1000)
        $(".m-li").fadeTo("slow",1);
    });

    $("#li-2").click(function(){
        $(".m-li").fadeTo("slow",0.15);
        $("#pic2").fadeIn(3000)
    });
    $("#pic2").click(function(){
        $("#pic2").fadeOut(1000)
        $(".m-li").fadeTo("slow",1);
    });

    $("#li-3").click(function(){
        $(".m-li").fadeTo("slow",0.15);
        $("#pic3").fadeIn(3000)
    });
    $("#pic3").click(function(){
        $("#pic3").fadeOut(1000)
        $(".m-li").fadeTo("slow",1);
    });

    $("#li-4").click(function(){
        $(".m-li").fadeTo("slow",0.15);
        $("#pic4").fadeIn(3000)
    });
    $("#pic4").click(function(){
        $("#pic4").fadeOut(1000)
        $(".m-li").fadeTo("slow",1);
    });

    $("#li-5").click(function(){
        $(".m-li").fadeTo("slow",0.15);
        $("#pic5").fadeIn(3000)
    });
    $("#pic5").click(function(){
        $("#pic5").fadeOut(1000)
        $(".m-li").fadeTo("slow",1);
    });

    $("#li-6").click(function(){
        $(".m-li").fadeTo("slow",0.15);
        $("#pic6").fadeIn(3000)
    });
    $("#pic6").click(function(){
        $("#pic6").fadeOut(1000)
        $(".m-li").fadeTo("slow",1);
    });

    $("#li-7").click(function(){
        $(".m-li").fadeTo("slow",0.15);
        $("#pic7").fadeIn(3000)
    });
    $("#pic7").click(function(){
        $("#pic7").fadeOut(1000)
        $(".m-li").fadeTo("slow",1);
    });

    $("#li-8").click(function(){
        $(".m-li").fadeTo("slow",0.15);
        $("#pic8").fadeIn(3000)
    });
    $("#pic8").click(function(){
        $("#pic8").fadeOut(1000)
        $(".m-li").fadeTo("slow",1);
    });
});

$(document).ready(function(){
    let $divLi =$(".m-title > ul > li");
    $divLi.click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");

        let index =  $divLi.index(this);
        $("div.m-box > div")
            .eq(index).show()
            .siblings().hide();
    })
})

let lastNum = 4;
$(document).ready(function(){
    $("#btn").click(function(){
        $('ol').append("<div class='m-listDiv1'>" +
            "<li class='m-list1'>"+(lastNum++)+"</li>" +
            "<li class='m-list2'>&nbsp</li>" +
            "<li class='m-list3'>Delete</li>"+
            "</div>")
        $(".m-list3").click(function(){
            $(this).parent().remove();
        });
    });
    $(".m-list3").click(function(){
        $(this).parent().remove();
    });
})
