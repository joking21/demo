var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : '***',
  user     : '***',
  password : '***',
  database : 'my_db'
});
export default connection;