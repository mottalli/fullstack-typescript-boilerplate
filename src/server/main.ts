import express from "express";

const app = express();

app.use(express.static("_output/static"));

app.get("/api/hello", (req, res) =>
  res.json({ body: "Hello world from server!" })
);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));
