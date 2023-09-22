require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const cors = require("cors");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const jsonServer = require("json-server");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = 3010;
const jsonServerRouter = jsonServer.router("db.json");
const secretKey = process.env.SECRET_KEY;

app.use(cors());
app.use(bodyParser.json());

const verifyTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user; // Attach user info to the request
        next();
    });
};

// Endpoint for hashing and storing a password
app.post("/api/create-user", async (req, res) => {
    try {
        const data = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        const hashedData = {
            ...data,
            password: hashedPassword,
        };

        const response = await axios.post(
            `http://localhost:3005/users`,
            hashedData
        );

        res.status(200).json({
            message: "User successfully created.",
        });
        //res.status(200).send("User successfully created.");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred." });
    }
});

app.post("/authenticate", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await axios.get("http://localhost:3005/users", {
            params: {
                username: username,
            },
        });

        if (user.data.length !== 1) {
            return res.status(401).json({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(
            password,
            user.data[0].password
        );

        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: user.id }, secretKey, {
            expiresIn: "1h",
        });

        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({
            token: token,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred." });
    }
});

app.post("/create-payment-intent", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "usd",
            payment_method_types: ["card"],
        });

        res.status(200).json(paymentIntent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/verify", verifyTokenMiddleware, async (req, res) => {
    try {
        res.json({
            message: "You have access to the protected route",
            status: true,
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

app.get("/test", async (req, res) => {
    try {
        res.json({
            message: "You have access to the protected route",
            status: true,
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
