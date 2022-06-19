$(document).ready(function(){

    var slides = $("#slider .slides li");

    function pagerFunc(){
        var $index = $("#slider .slides li.active").index();
        $("#slider ol li").removeClass("active");
        $("#slider ol li").eq($index).addClass("active");
    }

    setInterval (function(){

        var $hover = $(".slides").hasClass("hover");
        var slide_index = $("#slider .slides li.active").index();

        if($hover == true){

        }else{
            slides.removeClass("active");
            slide_index = (slide_index + 1) % slides.length;
            slides.eq(slide_index).addClass("active");
            pagerFunc();
        }
        
    },4000);

    $(".slides").hover(function(){
        $(this).addClass("hover");
    },function(){
        $(this).removeClass("hover");
    })

    $("#slider .prev").click(function(){

        var slides_index = $("#slider .slides li.active").index();
        slides.removeClass("active");
        if(slides_index == 0){ // 현재 active가 있는 li의 인덱스 번호
            slides.eq(slides.length - 1).addClass("active");
        }else{
            slides.eq(slides_index).prev().addClass("active");
        }

        pagerFunc();

        return false;
    });

    $("#slider .next").click(function(){

        var slides_index = $("#slider .slides li.active").index();
        slides.removeClass("active");
        if(slides_index == slides.length - 1){
            slides.eq(0).addClass("active");
        }else{
            slides.eq(slides_index).next().addClass("active");
        }
        
        pagerFunc();

        return false;
    });

    $("#slider ol li").click(function(){
        var $index = $(this).index();
        $("#slider ol li").removeClass("active");
        $(this).addClass("active");

        slides.removeClass("active");
        slides.eq($index).addClass("active");
    });

    var $tabbox_arr = [

        ["tab_interior/interior_01.jpg", "Living Room"],
        ["tab_interior/interior_02.jpg", "Rest Room"],
        ["tab_interior/interior_03.jpg", "kitchen"],
        ["tab_interior/interior_04.jpg", "Bed Room"],
        ["tab_exterior/exterior_01.jpg", "Deco Wall"],
        ["tab_exterior/exterior_02.jpg", "Garden"],
        ["tab_exterior/exterior_03.jpg", "Swim Pool"],
        ["tab_exterior/exterior_04.jpg", "Stair"],
        ["tab_furniture/furniture_01.jpg", "Sofas"],
        ["tab_furniture/furniture_02.jpg", "Bed"],
        ["tab_furniture/furniture_03.jpg", "Chair"],
        ["tab_furniture/furniture_04.jpg", "Desk"]

    ];

    for(i=0; i < $tabbox_arr.length; i++){
        $("#Categories .cont").append(`
            <div class="tab">
                <div class="Image_part" style = 'background-image:url(./img/${$tabbox_arr[i][0]})'>
                    <div class="txt_part">
                        <span>${$tabbox_arr[i][1]}</span>
                        <div class="btn"><a href="">Detail More</a>
                        </div>
                    </div>
                </div>
        </div>  
        `);
    }

    $("#Categories .cont .tab").hide();
    $("#Categories .cont .tab").eq(4).prevAll().fadeIn();

    $("#Categories #content li").click(function(){
        var $index = $(this).index();
        console.log($index);
        $("#Categories .cont .tab").hide();
        $("#Categories .cont .tab").eq(4 * $index).fadeIn();
        $("#Categories .cont .tab").eq(4 * $index + 1).fadeIn();
        $("#Categories .cont .tab").eq(4 * $index + 2).fadeIn();
        $("#Categories .cont .tab").eq(4 * $index + 3).fadeIn();
        $("#Categories .btn_color").stop().animate({"left" : (100 / 3 * $index + "%")}, 400);
        return false;
    });

});