// connect express
const express = require('express');
// using cors
const cors = require('cors');
// allow cors
const app = express();
app.use(cors());
// hello world
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.send('Hello Admin!');
});

app.get('/user/:id', (req, res) => {
    // get the id from req.params
    const id = req.params.id;
    // do something with the id
    res.send('Hello User ' + id);
    // res.send(`Hello User ${id}`);
    // res.send(`Hello User ${req.params.id}`);
    // res.send(`Hello User ${req.query.id}`);
    // res.send(`Hello User ${req.body.id}`);
    // res.send(`Hello User ${req.params.id} ${req.query.id} ${req.body.id}`);

}
);

app.get('/sound/:name', (req, res) => {
    // get the id from req.params
    const name = req.params.name;
    // do something with the id
    if (name === 'cat') {
        res.send('Meow');
    } else if (name === 'dog') {
        res.send('Woof');
    } else {
        res.send('Hello');
    }

    res.send('Hello Cat!');
});

// listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});