const express = require('express')
const request = require('request')

const app = express()

app.get("/" , (req,res) => (
    res.send("Hello this  is our weather project")
));

app.listen(3000, () => console.log('server started on port 3000'))