// Insert the code after yout getUser function in user.js
const db = require("./databaseConfig.js");

let User = {
  getUser: (userID, callback) => {
    let conn = db.getConnection();
    conn.connect((err) => {
      if (err) {
        console.log("Database Error!");
        return callback(err, null);
      } else {
        console.log("Database Connected!");
        let QUERY = `SELECT * FROM Users WHERE userID = ?`;
        conn.query(QUERY, [userID], (err, result) => {
          conn.end();
          if (err) {
            console.log("Query Error");
            return callback(err, null);
          } else {
            console.log("Query Success!");
            return callback(null, result);
          }
        });
      }
    });
  },

  getAllUser: (callback) => {
    let conn = db.getConnection();
    conn.connect((err) => {
      if (err) {
        console.log("Database Error!");
        return callback(err, null);
      } else {
        console.log("Database Connected!");
        let QUERY = `SELECT * FROM Users`;
        conn.query(QUERY, (err, result) => {
          conn.end();
          if (err) {
            console.log("Query Error");
            return callback(err, null);
          } else {
            console.log("Query Success!");
            return callback(null, result);
          }
        });
      }
    });
  },

  addUser : (username, email, course, age, password, callback) => {
    let conn = db.getConnection()
    conn.connect((err) => {
        if (err){
            return callback(err, null)
        }
        else{
            console.log('Database Connected!')
            let QUERY = `INSERT INTO Users(username, email, course, age, password) VALUES (?, ?, ?, ?, ?)`
            conn.query(QUERY, [username, email, course, age, password], (err, result) => {
                conn.end()
                if (err){
                    console.log('Query Error!')
                    return callback(err, null)
                }
                else{
                    console.log('Query Success!')
                    return callback(null, result.affectedRows)
                }
            })
        }
    })
}
};
module.exports = User;
