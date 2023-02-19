const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const server = express();
const port = process.env.PORT || 8080;

server.use(cors());
server.use(logger("dev"));

server.use((require, result, next) => {
	if (true) {
		next();
	} else {
		next(new Error("not authentication "));
	}
});

server.use((require, result, next) => {
	result.status(404).json({ massage: "page not found" });
});

server.use((error, require, result, next) => {
	result.status(500).json({ massage: error + "" });
});

server.listen(port, () => console.log(`listening on http://localhost:${port}`));
