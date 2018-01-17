console.log("fgdd")


$("#d1").mouseover(function(){
    console.log("on on on on ");
    $(".subMenu").css("display", "block")
})

$(".topnavmenu").mouseleave(function(){
    console.log("off off off ");
    $(".subMenu").css("display", "none")
})
