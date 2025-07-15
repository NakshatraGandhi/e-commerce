import express from "express";
import Product from "../models/Product.js";
const router=express.Router();

router.get("/",async(req,res)=>{
    try{
        const search=req.query.search||"";
        const category=req.query.category||"";
        const filter={};
        if(search)filter.name={$regex:search,$options:"i"};
        if(category)filter.category=category;
        const products=await Product.find(filter);
        res.json(products);
    }catch(err){
        res.status(500).json({error:"Failed to fetch products"});
    }

    });
    //GET/api/products/:id-Fetch product by ID
   router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

export default router
