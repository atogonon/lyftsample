const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/test', (req, res) => {
    let string_to_cut=req.body.string_to_cut
    let return_string=newString(string_to_cut)
    res.json({ 'return_string': return_string })
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))


function newString(string) {
  let result=''
  for (let i=0; i<string.length; i++) {
    if ((i+1)%3===0) {
      result+=string[i]
    }
  }
  return result
}
