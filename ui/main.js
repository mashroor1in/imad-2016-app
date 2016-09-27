console.log('Mash Loaded!');


var img=document.getElementById('image');
var marginleft=0;


function moveLeft(){
  marginleft=marginleft+1;
  img.style.marginLeft=marginleft+'px';
  
}
img.onclick=function(){
    var interval=setInterval(moveLeft,50);
   
    
    
};