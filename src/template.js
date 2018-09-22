const json2csv = require('json2csv').parse

exports.get = (req, res) => {

    // If need fields to generate dynamically
    //const fields = Object.keys(Author.schema.obj);
    const fields = [
        'name.firstName',
        'name.lastName',
        'biography',
        'twitter',
        'facebook',
        'linkedin'
    ]

    const opts = { fields }
    
    const csv = json2csv('', opts)

    res.set('Content-Disposition', 'attachment;filename=authors.csv')
    res.set('Content-Type', 'application/octet-stream')

    res.send(csv)
}