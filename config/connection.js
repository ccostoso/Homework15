var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
}

connection.connect(err => {
    if (err) {
        console.log(`Connection Error: ${err.stack}`);
        return;
    }

    console.log(`Connected as: ${connection.threadId}`);
})

module.exports = connection;