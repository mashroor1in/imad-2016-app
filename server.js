var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles={
     articleOne:{
    title: 'Article One | Mashroor Alam',
    heading: 'Article one',
    date: '26th September 2016',
    
   
    content: `
                <p> Hello this is article one, Hello this is article one , Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one  
                </p>
                
                <p>
                    
                    Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one 
                </p>`
},
     articleTwo:{ title: 'Article Two | Mashroor Alam',
    heading: 'Article Two',
    date: '27th Sept 2016',
    
   
    content: `
                <p> Hello this is article one, Hello this is article one , Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one  
                </p>
                
                <p>
                    
                    Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one Hello this is article one 
                </p>`
}
  
};


function createTemplate (data){
        var title=data.title;
        var heading=data.heading;
        var date=data.date;
        var content=data.content;
    

        var htmlTemplate=`
        <html>
        <head>
            <title>
                ${title}
               <img src="/ui/madi.png" class="img-medium"/>
               
            </title>
           <meta name="viewport" content="width=device-width, initial-scale=1"/>
           <link href="/ui/style.css" rel="stylesheet" />
          
        </head>
        
            <body>
                
                <div class="container">
                    <div> 
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    
                    <h3> ${heading} </h3>
                    
                    <div>
                       ${date}
                    </div>
                    
                    <div>
                        
                       ${content}
                        
                       ${content}
                    </div>
                </div>
            </body>
        </html>
        `;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});


app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
