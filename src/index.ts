import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World! XXX" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
