let Parser = require('rss-parser');
var express = require("express");
var app = express();
var port = 3000;

let parser = new Parser();

var lista = [];
var knowbe4 = [];

(async () => {
    let feed = await parser.parseURL('https://www.cyberpilot.io/cyberpilot-blog/rss.xml');

    feed.items.forEach((item) => {
        console.log(item.title);       
        lista.push(item);
    });
})();


(async () => {
    let feed = await parser.parseURL('https://blog.knowbe4.com/rss.xml');

    feed.items.forEach((item) => {
        console.log(item.title);       
        knowbe4.push(item);
    });
})();

app.get("/", (req, res) => {
    res.send(lista); 
    
})

app.get("/knowbe4", (req, res) => {
    res.send(knowbe4); 
    
})

app.listen(port, () => {
    console.log("Server listing on port " + port);
})

