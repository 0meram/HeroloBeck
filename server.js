const express = require("express");
// require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;
// const cors = require("cors");

app.use(express.json());
// app.use(cors());
// app.use("/search", require("./routes/search"));

app.get("/", (req, res) => {
	res.send(`<h1>Herolo Server de hello there</h1>`);
});

app.listen(PORT, () => {
	console.log(`im ready to work on port ${PORT}`);
});
