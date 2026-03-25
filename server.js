const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let users = [];

// REGISTER
app.post("/api/register", (req, res) => {
    const { email, password } = req.body;

    const exists = users.find(u => u.email === email);

    if (exists) {
        return res.json({ success: false, message: "User already exists" });
    }

    users.push({ email, password });

    res.json({ success: true, message: "Registered successfully" });
});

// LOGIN
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.json({ success: false, message: "Invalid credentials" });
    }

    res.json({ success: true, message: "Login successful" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});