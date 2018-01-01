var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs")

app.get("/", function(req, res){
	res.render("home");
});

app.get("/found/:thing", function(req, res){
	var thing = req.params.thing
	res.render("found", {passedThing: thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Brian"},
		{title: "Post 2", author: "Sophie"},
		{title: "Post 3", author: "Candice"},
		{title: "Post 4", author: "Jen"}
	];
	res.render("posts", {posts: posts});
	
})

app.listen(3000, function(){
	console.log("Serving app on port 3000");
});