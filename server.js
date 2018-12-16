var express = require("express");
// var router = require('route');
var app = express();
var path = require("path");

var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
// app.use('/static', express.static(path.join(__dirname + 'add.html')))

// app.use(function(req, res, next) {

// });

//DATA
var reservation = [];
var waitingList = [];

function addReservation(){

};

function addWaiting(){

};




//ROUTES
app.get('/testing', function(req, res) {
    console.log('testing conncectivity');
    res.send('test 1');
});

app.get('/add', function(req,res) {
    console.log('We are in the add page');
    res.sendFile(path.join(__dirname, "public/add.html"));
})

app.get('/view', function(req,res){
    console.log('We are in the view page');
    res.sendFile(path.join(__dirname, "public/view.html"))
})
app.get('/reservation', function(req, res){
    return res.json(reservation);
})


//POST
app.post('/reservation', function(req,res){
    var newReservation = req.body;

    reservation.push(newReservation);

    res.json(newReservation);

    console.log(res.json(newReservation));

    console.log(reservation);
});

app.post("/wait", function(req, res){
    var newWait = req.body;
    waitingList.push(newWait);
    res.json(newWait);
    console.log(res.json(newWait));
    console.log(waitingList);

})


app.listen(PORT, function(){
    console.log("We live baybeee at.. " + PORT);
});