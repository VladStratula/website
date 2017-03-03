$(function(){
  $("aside>#nav>ul>li").hover(function(){
    $(this).toggleClass("active");


    $(this).find("ul>li").stop().toggle(500);





  });


});
