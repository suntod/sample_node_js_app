const express = require('express');

//const xml2js = require('xml2js');
const fs = require('fs');
//const xmlparser = require("express-xml-bodyparser");
//const parser = new xml2js.Parser({ attrkey: "ATTR" });

const app = express();
app.use(express.json());

var oilpricelist = [
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
	];

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/api/bcpoilprice', (req, res) => {
    res.send(oilpricelist);
});

app.post('/api/bcpoilprice', (req, res) => {
	const oilpricenew = {
	  "postDate": "2020-07-22",
	  "effectiveDate": "2020-07-23",
	  "unit": "Baht/Litre",
	  "publishedBy": "BCP/MPD",
	  "oilprice": [
		{
		  "id": "Hi Premium Diesel S",
		  "updatedPrice": 27.06,
		  "variance": 0.40
		},
		{
		  "id": "Diesel S",
		  "updatedPrice": 22.59,
		  "variance": 0.40
		},
		{
		  "id": "Hi Diesel S B10",
		  "updatedPrice": 19.59,
		  "variance": 0.40
		},
		{
		  "id": "Hi Diesel B20 S",
		  "updatedPrice": 19.34,
		  "variance": 0.40
		},
		{
		  "id": "Gasohol E85 S EVO",
		  "updatedPrice": 18.19,
		  "variance": 0.20
		},
		{
		  "id": "Gasohol E20 S EVO",
		  "updatedPrice": 20.44,
		  "variance": 0.40
		},
		{
		  "id": "Gasohol 95 S EVO",
		  "updatedPrice": 21.68,
		  "variance": 0.40
		},
		{
		  "id": "Gasohol 95 S EVO",
		  "updatedPrice": 21.95,
		  "variance": 0.40
		}
	  ]
	}
	oilpricelist.push(oilpricenew);
	res.send(oilpricelist);
	
});

app.post('/api/testsendsms', (req, res) => {
    //res.send('<h1>Hello SMS</h1>');
	res.send('Current Date is ' + Date());
	res.send(req.body.firstName);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );