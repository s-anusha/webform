var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('search');
});

router.post('/', function(req, res, next) {
        console.log("Searching the database...");
	var sql = "SELECT * FROM userData WHERE emailid=?";
	res.locals.connection.query(sql, [req.body.emailid], function (error, results, fields) {
		if(error){
			res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			//If there is no error, all is good and response is 200OK.
			if(results.length > 0) {
  				console.log("Record found.");
				res.render('result', {message: results[0], outcome: 'Record found.'});
	  		} else {
				console.log("Record not found.");
				res.render('resultfalse');
			}
	  	}
  	});
});

module.exports = router;
