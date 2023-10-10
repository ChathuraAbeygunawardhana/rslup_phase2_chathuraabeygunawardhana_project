const express = require("express");
const app = express();

/* api end points */
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/posts", (req, res) => {
  res.send("posts page");
});

app.get("/api/users", (req, res) => {
  res.send("users page");
});

port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
