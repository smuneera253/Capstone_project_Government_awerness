// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database:"politicalleader"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// function customers(){
// con.connect(function(err) {
//     // if (err) throw err;
//     con.query("SELECT * FROM cmInfo", function (err, result) {
//      res.status(200).send(result)
//     });
//   });
// }
// customers();


// Import the required modules
const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

// Create an instance of Express
const app = express();

app.use(cors(),express.json());
// Create a connection to the MySQL database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:'politicalleader'
});

app.get('/CM',async(req,res) =>{
        var getTableData = `SELECT *  FROM cmInfo`;
        con.query(getTableData, function(err, result){
            if(err) throw err;
            // alert("Data added successfully!")
            res.status(200).send(result);
        })
})
app.get('cm/search/:leader',async(req,res) =>{
  var searchData=req.params.leader
  var getTableData = `SELECT *  FROM cmInfo where Name ="${searchData}"`;
  con.query(getTableData, function(err, result){
      if(err) throw err;
      // alert("Data added successfully!")
      res.status(200).send(result);
  })
})

// app.get('/president',async(req,res) =>{
//     var getTableData = `SELECT *  FROM president`;
//     con.query(getTableData, function(err, result){
//         if(err) throw err;
//         // alert("Data added successfully!")
//         res.status(200).send(result);
//     })
// })
// app.get('President/search/:prasidentleader',async(req,res) =>{
//     var searchData=req.params.prasidentleader
//     var getTableData = `SELECT *  FROM president where Name="${searchData}"`;
//     con.query(getTableData, function(err, result){
//         if(err) throw err;
//         // alert("Data added successfully!")
//         res.status(200).send(result);
//     })
//   })



const port = 5500;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});