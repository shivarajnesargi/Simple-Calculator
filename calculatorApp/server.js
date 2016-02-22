var express=require('express');
var app=express();
const PORT=9090;

app.use(express.static(__dirname+'/public'))
app.listen(PORT);
console.log("The app started listening on the port "+PORT);