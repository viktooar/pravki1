$('#fullPage').fullpage({
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    autoScrolling:true,
    scrollHorizontally: true


});

$(".btn-menu").click(()=>{

    $(".horizontal-scrolling").toggleClass("some","some1");
    // $(".horizontal-scrolling").css({"transform":"scale(1,0.85)"});


});