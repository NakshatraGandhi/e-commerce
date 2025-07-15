import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String,
  brand: String,
  description: {
    type: String,
    default: "This product enhances your natural beauty and provides essential care.",
  },
});

const Product = mongoose.model("Product", productSchema, "product");
export default Product;
