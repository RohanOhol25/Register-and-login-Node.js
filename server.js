const express = require('express');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoues');

const app = express();
app.use(express.json()); 

connectDB();
const PORT = 5088;

app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
    res.send("Hello, server started!");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
