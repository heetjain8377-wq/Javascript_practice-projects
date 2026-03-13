const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    image: { type: String, required: true }
});

module.exports = mongoose.model("Product", productSchema);