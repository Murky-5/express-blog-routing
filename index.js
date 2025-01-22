/*

Create un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

*/


// server
const hostname = "127.0.0.1"
const port = 3000


// ```js```
const express = require('express')
const app = express()
const routes = require('./routers/routes.js')
const middle = require('./routers/middlewere.js')

// starts a simple http server locally on port 3000
app.get('', (req, res) => {
    res.send("Server del mio blog")
});

app.get('/bacheca:id', (req, res) => {
    console.log(middle(req, routes))
    res.json(routes)
})


app.listen(port, `${hostname}`, () => {
    console.log(`Listening on http://${hostname}:${port}/`);
});


// seen in online lession
app.use(express.static('images'))