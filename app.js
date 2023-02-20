const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const teacherRoute = require("./Routes/teachersRoute");
const childsRoute = require("./Routes/childsRoute");
const classesRoute = require("./Routes/classesRoute");

const port = process.env.PORT || 8080;
const server = express();
server.listen(port, () => console.log(`listening on http://localhost:${port}`));

server.use(cors());
server.use(logger("dev"));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(teacherRoute);
server.use(childsRoute);
server.use(classesRoute);

server.use((require, result, next) => {
	result.status(404).json({ massage: "Not Found" });
});

server.use((error, require, result, next) => {
	let status = error.status || 500;
	result.status(status).json({ massage: error + "" });
});
