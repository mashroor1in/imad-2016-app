var button=document.getElementById("button");
var counter =0;


button.onclick = function(){
    counter=counter+1;
    var display=document.getElementById("snap1");
    display.innerHTML=counter.toString();
    
};



