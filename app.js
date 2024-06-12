const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserInfo = require("./mongo");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MongoDB connection URL
const dbURL = "mongodb://localhost:27017/car_website_project";

// Connect to MongoDB
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

// Define routes

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the car website project API");
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserInfo.findOne({ username });

    if (user) {
      const isMatch = await user.comparePassword(password);
      if (isMatch) {
        res.json({ success: true });
      } else {
        res.json({ success: false, message: "Invalid username or password" });
      }
    } else {
      res.json({ success: false, message: "Invalid username or password" });
    }
  } catch (e) {
    console.error('Login error:', e);
    res.json({ success: false, message: "An error occurred. Please try again later." });
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await UserInfo.findOne({ username });

    if (existingUser) {
      res.json({ success: false, message: "Username already exists" });
    } else {
      const newUser = new UserInfo({
        username,
        email,
        password
      });

      await newUser.save();
      res.json({ success: true });
    }
  } catch (e) {
    console.error('Signup error:', e);
    res.status(500).json({ success: false, message: "An error occurred during signup. Please try again later." });
  }
});


// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
