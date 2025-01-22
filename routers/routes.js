const express = require('express')
const app = express()
const memePosts = require('./posts.js')
const middle = require('./middlewere.js')

app.get('/:id', (req, res) => {
    console.log(middle(req, memePosts))               // let verified_NaN = (isNaN(req.id) ? 500 : true)
    res.json(middle(req, memePosts))                  // let verified = (memePosts.find((verifier) => req.id == verifier.id) && verified_NaN === true ? 200 : 404)
})

app.get('/:id', (req, res) => {

})

app.post('/', (req, res) => {

})

app.put('/:id', (req, res) => {

})

app.patch('/:id', (req, res) => {

})

app.delete('/:id', (req, res) => {

})

module.exports = app