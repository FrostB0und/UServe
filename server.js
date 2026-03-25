const express = require("express");
const path = require("path");

const app = express();

// Serve frontend files from /public
app.use(express.static(path.join(__dirname, "public")));

// Optional routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});