console.log("fgdd")


$("#m1").mouseover(function(){
    $(".subMenu1").css("display", "block")
})

$("#m2").mouseover(function(){
     $(".subMenu2").css("display", "block")
})

$("#m3").mouseover(function(){
     $(".subMenu3").css("display", "block")
})

$("#m4").mouseover(function(){
    $(".subMenu4").css("display", "block")
})




$(".topnavmenu").mouseleave(function(){
    $(".subMenu1, .subMenu2, .subMenu3, .subMenu4").css("display", "none")
})
