const csv = require('fast-csv')
const mongoose = require('mongoose')
const Author = require('./author')

exports.post = (req, res) => {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.')
    }

    const authorFile = req.files.file

    const authors = []

    csv.fromString(authorFile.data.toString(), {
        headers: true,
        ignoreEmpty: true
    })
    .on('data', (data) => {
        data['_id'] = new mongoose.Types.ObjectId()

        authors.push(data)
    })
    .on('end', () => {
        Author.create(authors, (err, documents) => {
            if (err) throw err
        })

        res.send(authors.length + ' authors have been successfully uploaded.')
    })
}