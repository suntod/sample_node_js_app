const express = require('express');

const app = express();
app.use(express.json());

var movies = [
{
  "postDate": "2020-07-15",
  "effectiveDate": "2020-07-16",
  "unit": "Baht/Litre",
  "oilPrice": [
	{
      "id": "hipremiumdiesel-s",
      "updatedPrice": 26.66,
	  "variance": -0.30
    },
	{
      "id": "hidiesel-s",
      "updatedPrice": 22.19,
	  "variance": -0.30
    },
	{
      "id": "hidiesel-s-b10",
      "updatedPrice": 19.19,
	  "variance": -0.30
    },
	{
      "id": "hidiesel-b20s",
      "updatedPrice": 18.94,
	  "variance": -0.30
    },
	{
      "id": "gasohol-e85s",
      "updatedPrice": 17.99,
	  "variance": -0.15
    },
	{
      "id": "gasohol-e20s",
      "updatedPrice": 20.04,
	  "variance": -0.30
    },
	{
      "id": "gasohol-91s",
      "updatedPrice": 21.28,
	  "variance": -0.30
    },
	{
      "id": "gasohol-95s",
      "updatedPrice": 21.55,
	  "variance": -0.30
    },
  ],
  "publishedBy": BCP/MPD
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