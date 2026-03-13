const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const Product = require("./models/product");
const Order = require("./models/order");

const app = express();

// ---------- MIDDLEWARE ----------
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// ---------- MONGODB ----------
mongoose.connect("mongodb://127.0.0.1:27017/royalfashion")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// ---------- MULTER CONFIG ----------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// ---------- ROUTES ----------

// GET ALL PRODUCTS
app.get("/get-products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch(err) {
        res.status(500).json({ message: "Error fetching products" });
    }
});

// ADD PRODUCT (ADMIN)
app.post("/add-product", upload.single("image"), async (req, res) => {
    try {
        const { name, price, description } = req.body;
        if (!name || !price || !req.file) {
            return res.status(400).json({ message: "All fields required" });
        }

        const newProduct = new Product({
            name,
            price,
            description,
            image: req.file.filename
        });

        await newProduct.save();
        res.json({ message: "Product Added Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error adding product" });
    }
});

// DELETE PRODUCT (ADMIN)
app.delete("/delete-product/:id", async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Product Not Found" });
        res.json({ message: "Product Deleted Successfully" });
    } catch(err) {
        res.status(500).json({ message: "Error Deleting Product" });
    }
});

// GET ALL ORDERS
app.get("/get-orders", async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch(err) {
        res.status(500).json({ message: "Error fetching orders" });
    }
});

// PLACE ORDER (CUSTOMER)
app.post("/order", async (req, res) => {
    try {
        const { name, phone, address, product, price } = req.body;
        if (!name || !phone || !address || !product) {
            return res.status(400).json({ message: "All fields required" });
        }

        const order = new Order({ name, phone, address, product, price });
        await order.save();
        res.json({ message: "Order Placed Successfully" });
    } catch(err) {
        res.status(500).json({ message: "Error placing order" });
    }
});

// DELETE ORDER (ADMIN)
app.delete("/delete-order/:id", async (req, res) => {
    try {
        const deleted = await Order.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Order Not Found" });
        res.json({ message: "Order Deleted Successfully" });
    } catch(err) {
        res.status(500).json({ message: "Error Deleting Order" });
    }
});

// UPDATE ORDER STATUS (ADMIN)
app.put("/update-order/:id", async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!updated) return res.status(404).json({ message: "Order Not Found" });
        res.json({ message: "Order Updated Successfully", order: updated });
    } catch(err) {
        res.status(500).json({ message: "Error Updating Order" });
    }
});

// ADMIN LOGIN
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (email === "abcxyz1234@gmail.com" && password === "abcxyz1234") {
        res.json({ message: "Login Successful" });
    } else {
        res.status(401).json({ message: "Invalid Credentials" });
    }
});

// ---------- SERVER ----------
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));