const app = require('express')()
const fileUpload = require('express-fileupload')
const server = require('http').Server(app)
const mongoose = require('mongoose')

const template = require('./src/template')
const upload = require('./src/upload')

app.use(fileUpload())

server.listen(3000)

mongoose.connect('mongodb://kankusai:csvimport123@ds018538.mlab.com:18538/csvimport', { useNewUrlParser: true })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

app.get('/template', template.get)

app.post('/', upload.post)