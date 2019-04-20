var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('insert');
});

router.post('/', function (req, res) {
    console.log("Searching the database...");
    var sql = "SELECT * FROM userData WHERE emailid=?";
    res.locals.connection.query(sql, [req.body.emailid], function (error, results, fields) {
	    if(error){
	  	res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	//If there is error, we send the error in the error section with 500 status
	  } else {
		//If there is no error, all is good and response is 200OK.
		console.log("Inserting record...");
		var sql = "INSERT INTO `userData` (`userName`, `emailId`, `phoneNo`, `password`) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE `userName`=?, `phoneNo`=?, `password`=?";
    		var data = [req.body.username, req.body.emailid, req.body.phonenumber, req.body.password, req.body.username, req.body.phonenumber, req.body.password];
    		res.locals.connection.query(sql, data, function (err, result, field) {
            		if (err) throw err;
			else {
	            		console.log("Record inserted.");
				var message = {userName: req.body.username, emailId: req.body.emailid, phoneNo: req.body.phonenumber, password: req.body.password};
				if (results.length > 0)
					var outcome = 'Record updated.';
				else
					var outcome = 'Record inserted.';
				res.render('result', {message, outcome});
			}
    		});
	  }
    });
});

module.exports = router;
