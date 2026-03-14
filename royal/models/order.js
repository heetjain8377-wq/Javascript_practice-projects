const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    product: { type: String, required: true },
    price: { type: String, required: true },
    status: { type: String, default: "Pending" },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);

