const express = require('express')
const res = require('express/lib/response')
const { append } = require('express/lib/response')
const path = require('path')
const {db} = require('./DB')

const app = express()

const PORT = 3000

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src', 'views'))

app.get('/', function (req, res) {
  res.render('main', {photo:db})
})

app.get('/adress_book',()=>{
  res.send('ok')
})

app.get('*', (reg, res)=>{
  res.send(`<div>
  <h1>404</h1>
  <a href='/'>Link to main page</a>
  </div>`)
})

app.listen(PORT,()=>{
console.log(`server ran: ${PORT}`);
})

