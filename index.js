
var mysql = require('mysql')
var pool = mysql.createPool({
    connectionLimit: 10,
     host:'134.192.79.113',
     user: 'root',
     password: 'root',
     database: 'DBdemo'
})

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})


exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!';


pool.query('SELECT * FROM user', function (err, result, fields) {
    if (err) {   res.status(200).send(err);
 throw new Error(err);}
   res.status(200).send(result);

    consoel.log(result,"")
    // Do something with result.
})

};
