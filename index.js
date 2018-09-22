const app = require('express')()
const fileUpload = require('express-fileupload')
const server = require('http').Server(app)

const template = require('./src/template')

app.use(fileUpload())

server.listen(3000)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

app.get('/template', template.get)