import express from "express";
import { config } from "dotenv";
config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello...!");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
