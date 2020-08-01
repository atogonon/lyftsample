const express = require('express')
const app = express()
const port = 3000
const newString=require('./utility')

// Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Our post route
app.post('/test', (req, res) => {
    let return_string=newString(req.body.string_to_cut)
    res.json({ 'return_string': return_string })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
