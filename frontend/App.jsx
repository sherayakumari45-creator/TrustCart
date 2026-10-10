import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: 1299,
    category: "Fashion",
    emoji: "👟",
    color: "#e8eaff",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 1799,
    category: "Electronics",
    emoji: "🎧",
    color: "#fce8e8",
  },
  {
    id: 3,
    name: "Everyday Backpack",
    price: 999,
    category: "Accessories",
    emoji: "🎒",
    color: "#e2f4e8",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 2499,
    category: "Electronics",
    emoji: "⌚",
    color: "#fff0d9",
  },
  {
    id: 5,
    name: "Travel Mug",
    price: 499,
    category: "Home",
    emoji: "☕",
    color: "#e6f4f7",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 699,
    category: "Fashion",
    emoji: "🕶️",
    color: "#f4e6fa",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
    setMessage(`${product.name} added to your cart!`);
    setTimeout(() => setMessage(""), 2000);
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">
          Trust<span>Cart.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Shop</a>
          <a href="#about">About</a>
        </nav>

        <a className="cart-button" href="#products">
          🛒 Cart <span className="cart-count">{cart.length}</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">YOUR EVERYDAY SHOPPING DESTINATION</p>
            <h1>
              Shopping you love.
              <br />
              <span>Trust you deserve.</span>
            </h1>
            <p className="hero-description">
              Discover everyday essentials, cool gadgets and stylish finds
              at prices you'll love.
            </p>
            <a href="#products" className="primary-button">
              Explore Products →
            </a>
            <div className="trust-points">
              <span>✓ Great finds</span>
              <span>✓ Easy shopping</span>
              <span>✓ Made for you</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Shopping bags illustration">
            <div className="art-circle"></div>
            <div className="shopping-bag">🛍️</div>
            <div className="floating-card card-one">✨ Great deals</div>
            <div className="floating-card card-two">💝 Happy shopping</div>
          </div>
        </section>

        <section className="benefits">
          <div><span>🚚</span><div><strong>Easy ordering</strong><p>Shop in a few clicks</p></div></div>
          <div><span>💳</span><div><strong>Simple shopping</strong><p>Find what you need</p></div></div>
          <div><span>🎁</span><div><strong>Everyday finds</strong><p>Something for everyone</p></div></div>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR COLLECTION</p>
              <h2>Popular products</h2>
              <p className="section-description">
                A few of our favourite picks, just for you.
              </p>
            </div>

            <input
              className="search-input"
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="category-list">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "category active" : "category"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {message && <div className="toast" role="status">{message}</div>}

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div
                  className="product-image"
                  style={{ backgroundColor: product.color }}
                >
                  <span>{product.emoji}</span>
                  <span className="product-tag">{product.category}</span>
                </div>

                <div className="product-info">
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className="product-bottom">
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                    <button
                      className="add-button"
                      onClick={() => addToCart(product)}
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="empty-message">
              No products found. Try another search.
            </p>
          )}

          <div className="cart-summary">
            <span>🛒 Items in your cart: <strong>{cart.length}</strong></span>
            <span>
              Total: <strong>₹{cart.reduce((sum, item) => sum + item.price, 0).toLocaleString("en-IN")}</strong>
            </span>
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="eyebrow">WHY TRUSTCART?</p>
          <h2>A better way to discover your next favourite thing.</h2>
          <p>
            We're building a simple shopping experience where discovering
            products feels easy, enjoyable and convenient.
          </p>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">Trust<span>Cart.</span></a>
        <p>Made with care for everyday shoppers.</p>
        <p>© 2026 TrustCart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;