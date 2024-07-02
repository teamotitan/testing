const express = require("express")
const User = require("../model/user.js")

const app = express()

// API Endpoints
app.use(express.json()) // used to parse JSON objects
app.use(express.urlencoded()) // used to parse URL-encoded bodies

app.get('/api/user/:userID', (req, res) => {
    let userID = req.params.userID

    User.getUser(userID, (err, result) => {
        if (!err){
            res.status(200).send(result)
        }
        else{
            res.status(500).send("Internal Server Error")
        }
    })
})


// Endpoint to get ALL users
app.get('/api/users', (req, res) => {
    
    User.getAllUser((err, result) => {
        if (!err){
            res.status(200).send(result)
        }
        else{
            res.status(500).send("Internal Server Error")
        }
    })
})


app.post('/api/user', (req, res) => {
    let username = req.body.username
    let email = req.body.email
    let course = req.body.course
    let age = req.body.age
    let password = req.body.password

    User.addUser(username, email, course, age, password, (err, result) => {
        if (!err){
            console.log(result)
            res.status(200).send(result + ' records inserted!')
        }
        else{
            res.status(err.statusCode).send("Server Error!")
        }
    })
})


module.exports = app