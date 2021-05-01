const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body
    let result = num1 + num2
    res.json({ result })
})

app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body
    let result = num1 - num2
    res.json({ result })
})

app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body
    let result = num1 * num2
    res.json({ result })
})

app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body
    let result = num1 / num2
    res.json({ result })
})

app.listen(port, () => console.log(`Example app listening on port port!`))