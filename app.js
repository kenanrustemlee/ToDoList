const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.use(express.static("Public"));

var items = ["Buy food", "Cook food", "Eat food"];
app.get("/", function(req, res){
  var day = new Date();
  var options = {
     weekday: 'long',
     month: 'long',
     day: 'numeric'
  }
  var currentDay = day.toLocaleDateString('en-US', options);

  res.render("index.ejs", {today: currentDay, addNewItems: items});
});

app.post("/", function(req, res){

   var item = req.body.newItem;
   items.push(item);
   res.redirect("/");
});



app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
