import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ProductRoutes from "./routes/ProductRoutes.js";
import OrderRoutes from "./routes/OrderRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://NAKSHATRA:123@cluster0.sdknc3w.mongodb.net/glowbeauty?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ DB connection error:", err));

// User Schema and Model 
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

// ===== JWT Token Generator =====
const generateToken = (userId) => {
  return jwt.sign({ userId }, "yourSecretKey", { expiresIn: "7d" });
};

// ===== Register Route =====
app.post("/api/users/register", async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  const token = generateToken(user._id);

  res.status(201).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    token,
  });
});

// ===== Login Route =====
app.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const isMatch = user && await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = generateToken(user._id);

  res.json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    token,
  });
});

// ===== API Routes =====
app.use("/api/product", ProductRoutes);
app.use("/api/orders", OrderRoutes);

// ===== Root Endpoint =====
app.get("/", (req, res) => {
  res.send(" GlowBeauty API is running...");
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
