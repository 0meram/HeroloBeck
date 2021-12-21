const express = require("express");
const axios = require("axios");
const router = express.Router();
const apiKey = "CmOr1j1ebeSKhEKTWhUa5Q5pw5gtFZi8";
const urlLocation = "http://dataservice.accuweather.com/locations/v1/cities/";

router.post("/getAutoComplete", async (req, res) => {
	try {
		let result = "";
		const base = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`;
		const query = `?apikey=${apiKey}&q=${req.body.input}`;
		await axios.get(base + query).then((response) => {
			if (response.data) {
				return (result = response.data);
			} else {
				return (result = "error");
			}
		});
		return res.send(result);
	} catch (err) {
		res.send(err);
	}
});

router.post("/getCity", async (req, res) => {
	try {
		let result = "";
		const base = `${urlLocation}/search`;
		const query = `?apikey=${apiKey}&q=${req.body.inputChange}`;
		await axios.get(base + query).then((response) => {
			if (response.data.length !== 0) {
				return (result = response.data[0].Key);
			} else {
				return (result = "error");
			}
		});
		return res.send(result);
	} catch (err) {
		res.send(err);
	}
});

router.post("/getForecast", async (req, res) => {
	try {
		let result = "";
		const base = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`;
		const query = `${req.body.cityId}?apikey=${apiKey}`;
		await axios.get(base + query).then((response) => {
			if (response.data.DailyForecasts.length !== 0) {
				return (result = response.data.DailyForecasts);
			} else {
				return (result = "error");
			}
		});
		return res.send(result);
	} catch (err) {
		res.send(err);
	}
});

router.post("/getCurrentWether", async (req, res) => {
	try {
		let result = "";
		const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
		const query = `${req.body.cityId}?apikey=${apiKey}`;
		await axios.get(base + query).then((response) => {
			if (response.data.length !== 0) {
				return (result = response.data);
			} else {
				return (result = "error");
			}
		});
        console.log('~ result', result);
		return res.send(result);
	} catch (err) {
		res.send(err);
	}
});

module.exports = router;
