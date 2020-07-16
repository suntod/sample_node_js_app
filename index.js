const express = require('express');

const app = express();
app.use(express.json());

var movies = [
	{
	  "postDate": "2020-07-15",
	  "effectiveDate": "2020-07-16",
	  "unit": "Baht/Litre",
	  "publishedBy": "BCP/MPD"
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