var button=document.getElementById('counter');



button.onclick = function(){
   
   var request = new XMLHTTPRequest();
   request.onreadystatechange= function()
   {
        if(request.readyState === XMLHttpRequest.Done)
        {
            if(request.satus===200)
            {
                var counter= request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        
   
   
   };
   request.open('GET', 'mashroor1in.imad.hasura-app.io/counter', true);
   request.send(null);
};




