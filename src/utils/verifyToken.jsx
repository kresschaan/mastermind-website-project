import verify from "jsonwebtoken";

const verifyToken = (token) => {
    try {
        const decoded = verify(
            token,
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTUxOTk4NjYsImV4cCI6MTY5NTIwMzQ2Nn0.E14Go5O0C7vZuq6SuGT8jtE0COKCf1HN-dPjElzIL3Q"
        );

        return decoded;
    } catch (error) {
        console.error("Error verrifying token:", error);
        return null;
    }
};

export default verifyToken;
