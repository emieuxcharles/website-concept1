
/** ###### MENU BTN SECTION ###### */
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("menu").style.width = "100%";
  document.getElementById("menu").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("menu").style.width = "0%";
}


  /** ###### CURSOR SECTION ###### */

$(window).mousemove(function(e) {     
  $(".cursor").css({
    left: e.pageX,
    top: e.pageY
  })    
});
$(window).mousemove(function(e) {
  $("a")
    .on("mouseenter", function() {   
    $('.cursor').addClass("active")   
  })  
});
$(window).mousemove(function(e) {
  $("a")
    .on("mouseleave", function() {    
    $('.cursor').removeClass("active")    
  })
});
$(window).mousemove(function(e) {
  $("#left")
    .on("mouseenter", function() {   
    $('.cursor').addClass("active-menu")   
  })  
});
$(window).mousemove(function(e) {
  $("#left")
    .on("mouseleave", function() {    
    $('.cursor').removeClass("active-menu")    
  })
});

  /** ###### CURSOR SECTION -  HOVER MENU ###### */
$(window).mousemove(function(e) {
  $("#left")
    .on("mouseenter", function() {   
      $('#menu-title').css({"color": "black"});
  })  
});
$(window).mousemove(function(e) {
  $("#left")
    .on("mouseleave", function() {    
    $('#menu-title').css({"color": "white"});
  })
});




$('.model').mousemove(function(e){
  
  var offs = $(this).offset(),
      p    = {x:offs.left, y:offs.top},
      mPos = {x:e.pageX, y:e.pageY},
      x    = mPos.x - p.x - 50,
      y    = mPos.y - p.y - 50;
      
  $('.gray', this).css({left:x, top:y, backgroundPosition: -x+'px '+-y+'px'});
    
});


