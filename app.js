const express = require('express')
const app = express()
const port = process.env.PORT || 2000

const router = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use('/', router)

app.listen(port, ()=> {console.log(`ORDER APP WORKING ON PORT: ${port}`)})