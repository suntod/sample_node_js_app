const express = require('express');

const app = express();
app.use(express.json());

var oilpricelist = {
	{
	  "postDate": "2020-07-15",
	  "effectiveDate": "2020-07-16",
	  "unit": "Baht/Litre",
	  "publishedBy": "BCP/MPD",
	  "oilprice": [
		{
		  "id": "Hi Premium Diesel S",
		  "updatedPrice": 26.66,
		  "variance": -0.30
		},
		{
		  "id": "Diesel S",
		  "updatedPrice": 22.19,
		  "variance": -0.30
		},
		{
		  "id": "Hi Diesel S B10",
		  "updatedPrice": 19.19,
		  "variance": -0.30
		},
		{
		  "id": "Hi Diesel B20 S",
		  "updatedPrice": 18.94,
		  "variance": -0.30
		},
		{
		  "id": "Gasohol E85 S EVO",
		  "updatedPrice": 17.99,
		  "variance": -0.15
		},
		{
		  "id": "Gasohol E20 S EVO",
		  "updatedPrice": 20.04,
		  "variance": -0.30
		},
		{
		  "id": "Gasohol 95 S EVO",
		  "updatedPrice": 21.28,
		  "variance": -0.30
		},
		{
		  "id": "Gasohol 95 S EVO",
		  "updatedPrice": 21.55,
		  "variance": -0.30
		}
	  ]
	}
	};

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/api/bcpoilprice', (req, res) => {
    res.send(oilpricelist);
});

app.post('/api/bcpoilprice', (req, res) => {
	const oilpricenew = {
	}
	oilpricelist.push(oilpricenew);
	res.send(oilpricelist);
	
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );