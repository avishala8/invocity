const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./db");

connectDb();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./router"));

const server = require("http").createServer(app);

app.listen(process.env.PORT || 8001, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
