var button=document.getElementById('counter');
var counter =0;


button.onclick = function(){
    counter=counter+1;
    var display=document.getElementById('count');
    display.innerHTML=counter.toString();
    
};




