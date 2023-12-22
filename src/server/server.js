import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const salt = 10;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root12345",
  database: "shoesite",
});

// Middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    // If no token, user is not authenticated
    req.isAuthenticated = false;
    return next();
  }

  jwt.verify(token, "jwt-secret-key", (err, user) => {
    if (err) {
      req.isAuthenticated = false;
      return next();
    }

    req.isAuthenticated = true;
    req.user = user; // You can access user information in routes using req.user
    return next();
  });
};

// Use the authentication middleware for routes that require authentication
app.use("/protected", authenticateUser);

// Handle database connection errors and log success
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Checking the backend working
app.listen(8081, () => {
  console.log("Server is running on port 8081");
});

// Register
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const hash = bcrypt.hashSync(password, salt);

  const sql =
    "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
  const values = [name, email, hash];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res
        .status(500)
        .json({ error: "Internal Server Error", specificError: err.message });
    }

    console.log("User registered successfully");
    return res.json({ status: "Success" });
  });
});

// Login
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ error: "Login error in server" });

    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) return res.json({ error: "Password compare error" });

          if (response) {
            const user = {
              id: data[0].id,
              name: data[0].name,
              email: data[0].email,
            };

            const token = jwt.sign({ user }, "jwt-secret-key", {
              expiresIn: "1d",
            });

            res.cookie("token", token, { httpOnly: true });
            return res.json({ status: "Success", isAuthenticated: true, user });
          } else {
            return res.json({ error: "Password not matched" });
          }
        }
      );
    } else {
      return res.json({ error: "No email existed" });
    }
  });
});

app.post("/logout", (req, res) => {
  // Clear the token cookie
  res.clearCookie("token");
  return res.json({ status: "Success", isAuthenticated: false });
});

// Protected route that requires authentication
app.get("/protected", (req, res) => {
  if (req.isAuthenticated) {
    res.json({ message: "You are authenticated!" });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});
