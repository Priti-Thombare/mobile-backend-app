const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.json({
        message: "Cloud-Based Mobile Backend is running!",
        status: "Success"
    });
});

// Health Check API
app.get("/health", (req, res) => {
    res.json({
        status: "Healthy",
        application: "Mobile Backend"
    });
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Mobile Backend running on port ${PORT}`);
});