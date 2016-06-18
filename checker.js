var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var request = require('request');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var apiKey = "f92smiWRexvzEL6eIYgC3SMJ4szSCZEvpqiwP9LD5OISyE8eH8";


app.get('/', function(req, res){
	res.render('request');
});

app.get('/requestData',function(req,res){
   var context = {};
   var blogname = req.query.userid; 
   context.blogname = blogname; 

   request('https://api.tumblr.com/v2/blog/' + blogname + '.tumblr.com/info?api_key=' + apiKey, function(err, response, body){
  
	 var avatar = 'https://api.tumblr.com/v2/blog/'+ blogname+ '.tumblr.com/avatar/128';
     var data = JSON.parse(body);
	 context.image = avatar;
     context.title = data.response.blog.title; 
     context.name = data.response.blog.name; 
     context.posts = data.response.blog.posts; 
     context.description = data.response.blog.description;
     return res.render('receive',context);
   
 });
});


app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.')
});
