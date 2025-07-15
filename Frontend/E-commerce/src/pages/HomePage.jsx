import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const categories = [
  { title: "Skincare", image: "https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?w=600" },
  { title: "Makeup", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600" },
  { title: "Haircare", image: "https://images.unsplash.com/photo-1712641966973-327ce5829913?w=600" },
  { title: "Fragrance", image: "https://plus.unsplash.com/premium_photo-1679106770086-f4355693be1b?w=600" },
  { title: "Sun Protection", image: "https://images.unsplash.com/photo-1689414748960-0498d6675f20?w=600" },
  { title: "Moisturizers", image: "https://images.unsplash.com/photo-1583334529937-bc4761d2cdad?w=600" },
  { title: "Body Care", image: "https://media.istockphoto.com/id/1331093282/photo/shot-of-a-young-women-in-bathrobe-applying-hand-cream-moisture-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=aoIIVWIRr1DRtPbgywneUakcNtedIG92MIKA6jP_0zY=" },
  { title: "Face Masks", image: "https://media.istockphoto.com/id/1367405864/photo/portrait-of-a-beautiful-young-plus-size-woman-with-a-cosmetic-face-mask-as-part-of-her.webp?a=1&b=1&s=612x612&w=0&k=20&c=1eMKQOldZDCD5R0D4lMjzLAREOjm21MbGKjAaJcoUgg=" },
];

const offers = [
  {
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752143446/buy1get1free_kmyto6.avif",
    title: "Buy 1 Get 1 Free",
    description: "Best-selling beauty combos with free gifts!"
  },
  {
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752143796/2nd_rjrmxq.avif",
    title: "Flat 40% Off",
    description: "Exciting discounts on skincare must-haves."
  },
  {
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752143796/3rd_smcvtp.avif",
    title: "Glow Kits at ₹299",
    description: "Starter kits to get your glow on!"
  },
  {
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752143797/4th_cpvzkl.avif",
    title: "Free Gift on ₹999+",
    description: "Get a surprise gift with your purchase!"
  }
];

const newArrivals = [
  {
    id: "1",
    name: "Vitamin C Face Serum",
    price: 599,
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752134557/vitaminc_ybelq5.avif",
  },
  {
    id: "2",
    name: "Glow Foundation Stick",
    price: 699,
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752144078/glowfoundation_hqkdzd.avif",
  },
  {
    id: "3",
    name: "Matte Liquid Lipstick",
    price: 499,
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752135386/matteliquidlipstick_m3c2ms.avif",
  },
  {
    id: "4",
    name: "Hydrating Toner Mist",
    price: 399,
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752134954/hydratingfacemist_nqfeoe.avif",
  },
];

const bestsellers = [
  {
    id: "5",
    name: "Glow Matte Lipstick",
    price: 499,
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752141980/glowmattelipstick_wwtr3j.avif",
    rating: 4.5,
  },
  {
    id: "6",
    name: "Rose Water Gulab Jal",
    price: 199,
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752134954/rosewatergulabjal_voq9bg.avif",
    rating: 4.0,
  },
  {
    id: "7",
    name: "Hydra Pro Gel Creme",
    price: 599,
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752146580/hydragel_lfvixn.avif",
    rating: 5.0,
  },
  {
    id: "8",
    name: "Hair Nourishing Cream",
    price: 235,
    image: "https://res.cloudinary.com/doumhyqxh/image/upload/v1752135694/hairnourishingcream_wiwrfr.avif",
    rating: 4.2,
  },
];

const HomePage = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="text-gray-800 px-2 sm:px-4 ">
      {/* Hero */}
      <img
        src="https://res.cloudinary.com/doumhyqxh/image/upload/v1752145633/herohhh_lq1bat.png"
        alt="Hero"
        className="w-full h-60 md:h-96 object-cover rounded-lg shadow-lg mb-10"
      />

      {/* CTA */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-3">
          Glow Up with GlowBeauty 💄
        </h1>
        <p className="text-gray-600 mb-5">
          Discover premium skincare and beauty essentials curated just for you.
        </p>
        <Link
          to="/product"
          className="inline-block bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
        >
          Shop All Products
        </Link>
      </div>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={`/product?category=${encodeURIComponent(cat.title)}`}
              className="bg-white border border-pink-100 rounded-lg shadow hover:shadow-md transition"
            >
              <img src={cat.image} alt={cat.title} className="w-full h-40 object-cover rounded-t" />
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Offers */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-pink-700 mb-4"> Top Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="rounded overflow-hidden border shadow bg-white hover:shadow-md transition">
              <img src={offer.image} alt={offer.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="text-base font-semibold text-pink-700">{offer.title}</h3>
                <p className="text-sm text-gray-600">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-pink-700 mb-4"> New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((item) => (
            <div key={item.id} className="border rounded shadow hover:shadow-md transition bg-white">
              <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-pink-600 font-bold">₹{item.price}</p>
                <button
                  className="bg-pink-600 text-white text-sm px-4 py-1 rounded hover:bg-pink-700 transition"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-pink-700 mb-4"> Bestsellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bestsellers.map((item) => (
            <div key={item.id} className="border rounded shadow hover:shadow-md transition bg-white">
              <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-pink-600 font-bold">₹{item.price}</p>
                <button
                  className="bg-pink-600 text-white text-sm px-4 py-1 rounded hover:bg-pink-700 transition"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-pink-700 mb-4 text-center">💬 What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-pink-100 rounded-lg p-5 shadow hover:shadow-md transition">
            <p className="text-gray-700 mb-2">“Absolutely love the Vitamin C serum! My skin has never felt smoother.”</p>
            <p className="text-sm text-pink-600 font-semibold">— Aanya, Mumbai</p>
          </div>
          <div className="bg-white border border-pink-100 rounded-lg p-5 shadow hover:shadow-md transition">
            <p className="text-gray-700 mb-2">“Fast delivery and such good packaging. The lipstick stays all day!”</p>
            <p className="text-sm text-pink-600 font-semibold">— Riya, Bangalore</p>
          </div>
          <div className="bg-white border border-pink-100 rounded-lg p-5 shadow hover:shadow-md transition">
            <p className="text-gray-700 mb-2">“Ordered a glow kit for my sister’s birthday and she loved it!”</p>
            <p className="text-sm text-pink-600 font-semibold">— Meera, Chennai</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;