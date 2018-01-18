console.log("fgdd")


$("#m1").mouseover(function(){
    console.log("on on on on ");
    $(".subMenu1").css("display", "block")
})

$("#m2").mouseover(function(){
    console.log("on on on on ");
    $(".subMenu2").css("display", "block")
})

$("#m3").mouseover(function(){
    console.log("on on on on ");
    $(".subMenu3").css("display", "block")
})

$("#m4").mouseover(function(){
    console.log("on on on on ");
    $(".subMenu4").css("display", "block")
})




$(".topnavmenu").mouseleave(function(){
    console.log("off off off ");
    $(".subMenu1, .subMenu2, .subMenu3, .subMenu4").css("display", "none")
})
