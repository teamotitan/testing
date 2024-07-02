// Create the following in the databaseConfig.js file

const mysql = require("mysql2") // Loads the MySQL library

const dbConnect = {

    getConnection: () => {
        let conn = mysql.createConnection({
            host: 'localhost', 
            user: 'root', // Username of your mysql workbench
            password: 'Ske3376p',// password of your mysql workbench
            database: 'testing' // Database(Schema) name
        })

        return conn
    }
}
module.exports = dbConnect
