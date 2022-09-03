require('dotenv').config()

const connectToMongo = require('./database/mongodb')

const mongoose = require('mongoose')
const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Server
app.listen(port, async () => {

    try {
        await mongoose.connect(connectToMongo.uri, { useNewUrlParser: true, useUnifiedTopology: true } )

    } catch (err) {
        console.log('Failed to connect to Mongo Atlas')
        process.exit(1)
    }

    console.log(`Rent-Go-Where is listening on port ${port}`);

})