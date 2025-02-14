
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const authMiddleware = require("../middleware/authMiddleware"); // Import the middleware

const router = express.Router();

router.post("/register", async (req, res) => {
});

router.post("/login", async (req, res) => {
});

router.get("/profile", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
