const express = require('express')
const app = express()
const port = 4000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => {
//   res.send('Hello World!') 
    const buah = [
        { name: "Anggur" },
        { name: "Semangka" },
        { name: "Nangka" }
    ]
    res.render("index", {
        name: "Fajrul Aslim",
        profesi: "Programmer & Investor",
        buah: buah
    })
})
app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})