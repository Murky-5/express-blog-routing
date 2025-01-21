const express = require('express')
const app = express()

const memePosts = reqire('posts')

app.get('/', (req, res) => {
    let verified_NaN = (isNaN(req.id) ? 500 : true)
    let verified = (memePosts.find((verifier) => req.id == verifier.id) && verified_NaN === true ? 200 : 404)
    req.sendStatus(verified_NaN || verified)
    res.json(memePosts)
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