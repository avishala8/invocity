const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.CONNECTION_STRING);

async function start() {
  const start = await client.connect();
  if (start) console.log("connected to DB");
  module.exports = client;
  const app = require("./app");
  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
  });
}

start();
