const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello Fucking World</h1>');
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );