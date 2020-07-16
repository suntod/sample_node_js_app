const express = require('express');

const app = express();
app.use(express.json());

var movies = [
    {
        id: 0,
        name: "The Flash",
        type: "series",
        isPublished: false
    },
    {
        id: 1,
        name: "Arrow",
        type: "series",
        isPublished: true
    },
    {
        id: 2,
        name: "Harry Potter",
        type: "movie",
        isPublished: false
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/api/bcpoilprice', (req, res) => {
    res.send(movies);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );