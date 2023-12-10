 //   loader ------------------
 "use strict";
 firstLoad();

 function firstLoad() {
     setTimeout(function() {
         $(".main-loader-wrap .loader-spin").addClass("novisspin");
     }, 1500);
     setTimeout(function() {
         $(".main-loader-wrap").fadeOut(500);
     }, 2200);
     var chdpt = $(".content-holder").data("pagetitle");
     $(".breadcrumb-wrap span").text(chdpt);
 }
 //   load animation------------------
 $.fn.duplicate = function(a, b) {
     var c = [];
     for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
     return this.pushStack(c);
 };
 $("<div class='pl-row'><span class='pl-row-anim'></span></div>").duplicate(25).appendTo(".body-grid");

 function heroAnim() {
     $(".pl-row-anim").removeClass("pl-row-anim-dec-vis");
     randomItem();

     function randomItem() {
         for (var i = 0; i < 8; i++) {
             var length = $(".pl-row-anim").length;
             var random = Math.floor(Math.random() * length);
             $(".pl-row-anim").eq(random).addClass("pl-row-anim-dec-vis");
         }
     }
 }
 setInterval(function() {
     heroAnim();
 }, 2600);
 $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
 document.addEventListener('gesturestart', function(e) {
     e.preventDefault();
 });