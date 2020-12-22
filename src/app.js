const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')

const port = 3000

//conexion a base de datos
/***  conexion a local***/
/*
mongoose.connect('mongodb://127.0.0.1:27017/crud-mongo')
    .then(db => console.log('conectado a base dedatos' + db))
    .catch(err => console.log('error al conectarse a base de datos' + err))
*/
mongoose.connect('mongodb+srv://andres:DorianElGris@cluster0.8uz6w.mongodb.net/tutorial-crud?retryWrites=true&w=majority')
    .then(db => console.log('conectado a base dedatos' + db))
    .catch(err => console.log('error al conectarse a base de datos' + err))



//importing routes
const indexRoutes = require('./routes/index')

//settings
app.set('port', process.env || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', indexRoutes)

app.listen(port, () =>{
    console.log('conectado al puerto %d', port)
})