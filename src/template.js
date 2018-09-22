const json2csv = require('json2csv')

exports.get = (req, res) => {

    const fields = [
        'name.firstName',
        'name.lastName',
        'biography',
        'twitter',
        'facebook',
        'linkedin'
    ]

    const csv = json2csv({ data: '', fields: fields })

    res.set('Content-Disposition', 'attachment;filename=authors.csv')
    res.set('Content-Type', 'application/octet-stream')

    res.send(csv)
}