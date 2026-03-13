require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const Product = require("./models/product");
const Order = require("./models/order");

const app = express();

mongoose.connect("mongodb://atlas-sql-69b446804a19d00d51519329-acfsme.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB connection error:", err));

// ----------------- Routes -------------------

// Get all products
app.get("/get-products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add product
app.post("/add-product", upload.single("image"), async (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = new Product({
    name,
    price,
    description,
    image: req.file.filename
  });
  await newProduct.save();
  res.json({ message: "Product Added" });
});

// Delete product
app.delete("/delete-product/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) return res.json({ message: "Product Not Found" });
    res.json({ message: "Product Deleted Successfully" });
  } catch (err) {
    res.json({ message: "Error Deleting Product" });
  }
});

// Place order
app.post("/order", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Order Placed Successfully" });
});

// Get all orders
app.get("/get-orders", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Delete order
app.delete("/delete-order/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order Deleted Successfully" });
  } catch {
    res.json({ message: "Error Deleting Order" });
  }
});

// Admin login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
    res.json({ message: "Login Successful" });
  } else {
    res.json({ message: "Invalid Credentials" });
  }
});

// Serve frontend files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));