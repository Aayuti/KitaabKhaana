if(process.env.NODE_ENV !== 'production') { //to check if we are running in the production env or not
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index') //now app knows that this router exists //indexRouter is set to the 'router' of index.js file since we are exporting it there

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') //__dirname is for current directory
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 4000)


