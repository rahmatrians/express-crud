const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./database')
const app = express()
// const router = express.Router()
const port = 3000

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Port yang digunain: http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('Homepage')
})


app.get('/books', function (req, res) {
    connection.query("SELECT * FROM books", function (err, getData, result) {
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }
        res.status(200).json({ success: true, data: getData.rows });
    })
})

// add a new book
app.post('/books', function (req, res) {
    let form_data = { ...req.body };

    connection.query("INSERT INTO books SET ?", form_data, function (err, result) {
        if (err) {
            return res.status(500).json({ message: err, error: err });
        }
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    })
})

app.put('/books/:id', function (req, res) {
    let form_data = { ...req.body };

    connection.query("UPDATE books SET ? WHERE id = ?", [form_data, req.params.id], function (err, result) {
        if (err) {
            return res.status(500).json({ message: 'Gagal update data!', error: err });
        }
        res.status(201).json({ success: true, message: 'Berhasil update data!' });
    })
})

app.delete('/books/:id', function (req, res) {

    connection.query("DELETE FROM books WHERE id = ?", req.params.id, function (err, result) {
        if (err) {
            return res.status(500).json({ message: 'Gagal hapus data!', error: err });
        }
        res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
    })
})