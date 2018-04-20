var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "skon",
    password: "PhilanderChase",
    database: "skon"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM PhoneBook", function (err, result, fields) {
	if (err) throw err;
	Object.keys(result).forEach(function(key) {
	    var row = result[key];
	    console.log(row.First+" "+row.Last+", Phone:"+row.Phone+"  ["+row.Type+"]");
	});
	//console.log(result);
    });
});

