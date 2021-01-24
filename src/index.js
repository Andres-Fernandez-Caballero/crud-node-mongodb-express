const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')

// defino env
require('dotenv').config()


const port = process.env.PORT || 5000
const database = process.env.DB_DATABASE
//conexion a base de datos
/***  conexion a local***/

/*
mongoose.connect('mongodb://127.0.0.1:27017/crud-mongo')
    .then(db => console.log('conectado a base dedatos' + db))
    .catch(err => console.log('error al conectarse a base de datos' + err))
andres, DorianElGris
 */

const db_name = process.env.DB_USERNAME || 'andres'
const db_password = process.env.DB_PASSWORD || 'DorianElGris'
const db_database = process.env.DB_DATABASE || 'MEDIDAS_MAU'


mongoose.connect('mongodb+srv://'
                    + db_name
                    + ':'
                    + db_password
                    + '@cluster0.8uz6w.mongodb.net/'
                    + db_database
                    + '?retryWrites=true&w=majority'
)
    .then(db => console.log('conectado a base dedatos ' + db_database))
    .catch(err => console.log('error al conectarse a base de datos' + err))



//importing routes
const indexRoutes = require('./routes/rutas')

//settings
app.set('port', port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/', indexRoutes)

app.listen(port, () =>{
    console.log('conectado al puerto %d', port)
    console.log('database ' + database)
})
