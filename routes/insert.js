var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('insert');
});

router.post('/', function (req, res) {
    console.log("Checking for record in the database...");
    var sql = "SELECT * FROM userData WHERE emailid=?";
    res.locals.connection.query(sql, [req.body.emailid], function (error, results, fields) {
	    if(error){
	  	res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	//If there is error, we send the error in the error section with 500 status
	  } else {
		//If there is no error, all is good and response is 200OK.
		if(results.length > 0) {
  			console.log("Record exists.\nUpdating previous record...");
			var sql = "UPDATE `userData` SET `userName`=?, `phoneNo`=?, `password`=? WHERE `emailId`=?";
			var data = [req.body.username, req.body.phonenumber, req.body.password, req.body.emailid];
  			res.locals.connection.query(sql, data, function (err, result, field) {
    				if (err) throw err;
				else {
    					console.log(result.message);
					console.log("Record updated.");
				}
  			});
	  	} else {
			console.log("Record doesn't exist.\nCreating new record.");
			var sql = "INSERT INTO `userData` (`userName`, `emailId`, `phoneNo`, `password`) VALUES (?, ?, ?, ?)";
    			var data = [req.body.username, req.body.emailid, req.body.phonenumber, req.body.password];
    			res.locals.connection.query(sql, data, function (err, result, field) {
            			if (err) throw err;
				else {
		    			console.log(result.message);
	            			console.log("Record created.");
				}
    			});
		}
	  }
    });
    res.redirect('insert');
});

module.exports = router;
