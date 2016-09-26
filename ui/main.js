console.log('Mash Loaded!');
var element =document.getElementById('newText');
element.innerHTML="New Value";

var img=document.getElementById('image');
var marginleft=0;
function moveLeft(){
  marginleft=marginleft+10;
  img.style.marginLeft=marginleft+'px';
  
}
img.onclick=function(){
    var interval=setInterval(moveLeft,200);
   
    
    
};