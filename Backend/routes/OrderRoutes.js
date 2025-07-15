import express from "express";
import Order from "../models/Order.js"; 
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { user, items, total, shippingInfo } = req.body;

    if (!user || !items || !total || !shippingInfo) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = new Order({ user, items, total, shippingInfo });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ message: "Failed to place order" });
  }
});

export default router;
