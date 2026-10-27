
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function ComingSoon({ title }) {
  return (
    <main className="container text-center py-5">
      <h1 style={{ color: "var(--burgundy)" }}>{title}</h1>
      <p>Something beautiful is blooming here. Coming soon!</p>
    </main>
  );
}

function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("petals-cart")) || [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("petals-favorites")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("petals-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("petals-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (product, quantity = 1, size = "") => {
    setCart((previousCart) => {
      const existingItem = previousCart.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        return previousCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...previousCart, { ...product, quantity, size }];
    });
  };

  const removeFromCart = (id, size) => {
    setCart((previousCart) =>
      previousCart.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
  };

  const updateQuantity = (id, size, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const toggleFavorite = (product) => {
    setFavorites((previousFavorites) => {
      const exists = previousFavorites.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return previousFavorites.filter(
          (item) => item.id !== product.id
        );
      }

      return [...previousFavorites, product];
    });
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cartCount}
        favoritesCount={favorites.length}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <Menu
              addToCart={addToCart}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              addToCart={addToCart}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={<ComingSoon title="Page Not Found" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
