require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const cors = require("cors");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const admin = require("firebase-admin");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = 3010;
const secretKey = process.env.SECRET_KEY;
const serviceAccountKey = process.env.GOOGLE_SECRET_KEY;

const fireBaseURL =
    "https://mastermind-website-91f7f-default-rtdb.asia-southeast1.firebasedatabase.app/";

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(serviceAccountKey)),
    databaseURL: fireBaseURL,
});

const db = admin.database();

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
            `${fireBaseURL}/users.json`,
            hashedData
        );

        res.status(200).json({
            message: "User successfully created.",
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred." });
    }
});

app.post("/authenticate", async (req, res) => {
    try {
        const { username, password } = req.body;

        const snapshot = await admin
            .database()
            .ref("users")
            .orderByChild("username")
            .equalTo(username)
            .once("value");

        if (!snapshot.exists()) {
            return res.status(404).json({ message: "Username not found" });
        }

        const matchedUserData = [];
        const keyID = [];

        snapshot.forEach((childSnapshot) => {
            const userData = childSnapshot.val();
            matchedUserData.push(userData);
            keyID.push({
                key: childSnapshot.key,
            });
        });

        if (matchedUserData.length !== 1) {
            return res.status(401).json({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(
            password,
            matchedUserData[0].password
        );

        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: keyID[0].key }, secretKey, {
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

app.get("/", async (req, res) => {
    try {
        res.json({
            message: "Mastermind Express Server",
            status: true,
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
