

 /* change index bck on hover */
$(document).ready(function(){
    
    
 $("#sintesi").mouseover(function(){
    $('.pssd-bg').addClass("pssd-bg1");
    $('#desc1').animate({opacity: 1},150)    //hover, add class "hover"
 });
 $("#sintesi").mouseout(function(){
    $('.pssd-bg').removeClass("pssd-bg1");
     $('#desc1').animate({opacity: 0},200)//hover out, remove class "hover"
 });
    
  $("#business").mouseover(function(){
    $('.pssd-bg').addClass("pssd-bg2");
    $('#desc2').animate({opacity: 1},150) //hover, add class "hover"
 });
 $("#business").mouseout(function(){
    $('.pssd-bg').removeClass("pssd-bg2");
     $('#desc2').animate({opacity: 0},200)//hover out, remove class "hover"
 });         
  $("#service").mouseover(function(){
    $('.pssd-bg').addClass("pssd-bg3");
      $('#desc3').animate({opacity: 1},150) //hover, add class "hover"
 });
 $("#service").mouseout(function(){
    $('.pssd-bg').removeClass("pssd-bg3");
     $('#desc3').animate({opacity: 0},200)//hover out, remove class "hover"
 });         
  $("#vault").mouseover(function(){
    $('.pssd-bg').addClass("pssd-bg4");
      $('#desc4').animate({opacity: 1},150) //hover, add class "hover"
 });
 $("#vault").mouseout(function(){
    $('.pssd-bg').removeClass("pssd-bg4");
     $('#desc4').animate({opacity: 0},200)//hover out, remove class "hover"
 });         
  $("#designstudio").mouseover(function(){
    $('.pssd-bg').addClass("pssd-bg5");
      $('#desc5').animate({opacity: 1},150) //hover, add class "hover"
 });
 $("#designstudio").mouseout(function(){
    $('.pssd-bg').removeClass("pssd-bg5"); 
     $('#desc5').animate({opacity: 0},200)//hover out, remove class "hover"
 });



 $("#harika").mouseover(function(){
    $('.commun-bg').addClass("comm-bg1");
});
 $("#harika").mouseout(function(){
    $('.commun-bg').removeClass("comm-bg1");
});
  
 $("#sacrem").mouseover(function(){
    $('.commun-bg').addClass("comm-bg2");
});
 $("#sacrem").mouseout(function(){
    $('.commun-bg').removeClass("comm-bg2");
});
    
 $("#sintesiv").mouseover(function(){
    $('.commun-bg').addClass("comm-bg3");
});
 $("#sintesiv").mouseout(function(){
    $('.commun-bg').removeClass("comm-bg3");
});
    
 $("#mediterranea").mouseover(function(){
    $('.commun-bg').addClass("comm-bg4");
});
 $("#mediterranea").mouseout(function(){
    $('.commun-bg').removeClass("comm-bg4");
});
    
 $("#expov").mouseover(function(){
    $('.commun-bg').addClass("comm-bg5");
});
 $("#expov").mouseout(function(){
    $('.commun-bg').removeClass("comm-bg5");
});    
    
});