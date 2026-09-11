const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", (req, res) => {
  res.json({
    online: true,
    message: "Pocket AI is running"
  });
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Pocket AI running on http://127.0.0.1:3000");
});
