const express = require('express');
var cors = require('cors')
require('./db/mongoose');
const AspirantRouter = require("./router/aspirant");

const app = express()
app.use(cors())
const port = process.env.PORT || 3001

app.use(express.json())
app.use(AspirantRouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
