var express = require("express");
var app = express();


app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/found/:thing", function(req, res){
	var thing = req.params.thing
	res.render("found.ejs", {passedThing: thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Brian"},
		{title: "Post 2", author: "Sophie"},
		{title: "Post 3", author: "Candice"},
		{title: "Post 4", author: "Jen"}
	];
	res.render("posts.ejs", {posts: posts});
	
})

app.listen(3000, function(){
	console.log("Serving app on port 3000");
});