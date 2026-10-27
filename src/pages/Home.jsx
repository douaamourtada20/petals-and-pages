import heroImage from "../assets/hero1.jpg";
import heroImage2 from "../assets/hero2.jpg";
import heroImage3 from "../assets/hero3.jpg";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { useState } from "react";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Coffee,
  Flower2,
  BookOpen,
} from "lucide-react";

import "../styles/Home.css";
import SiteImage from "../components/SiteImage";
function Home({ addToCart, favorites, toggleFavorite }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const popularProducts = products.filter(
    (product) => [1, 6, 9].includes(product.id) && product.popular
  );

  const categories = [
    {
      id: 1,
      title: "Good Coffee",
      description:
        "Carefully crafted drinks made for your favorite moments.",
      icon: Coffee,
      link: "/menu",
      linkText: "Discover Drinks",
    },
    {
      id: 2,
      title: "Fresh Flowers",
      description:
        "Beautiful blooms to celebrate life's little joys.",
      icon: Flower2,
      link: "/menu",
      linkText: "Explore Flowers",
    },
    {
      id: 3,
      title: "Lovely Books",
      description:
        "Stories and ideas to inspire your next chapter.",
      icon: BookOpen,
      link: "/menu",
      linkText: "Browse Books",
    },
  ];

  return (
    <main>

      {/* =====================
          HERO SECTION
      ===================== */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left content */}
            <div className="col-lg-6">
              <div className="hero-content">
                <p className="hero-label">
                  GOOD COFFEE • BLOOMING IDEAS • GREAT BOOKS
                </p>

                <h1>
                  A Place to
                  <br />
                  Sip, Explore
                  <br />
                  and Bloom
                </h1>

                <p className="hero-description">
                  Specialty coffee, fresh bites, beautiful flowers
                  and a cozy selection of books — all in one place.
                </p>

                <div className="hero-buttons d-flex flex-wrap gap-3">
                  <Link to="/menu" className="btn btn-burgundy">
                    Explore Menu
                    <ArrowRight size={17} />
                  </Link>

                  <Link to="/about" className="btn btn-outline-rose">
                    Our Story
                  </Link>
                </div>
              </div>
            </div>

            {/* Right visual placeholder */}
            <div className="col-lg-6">
              <div className="hero-visual">

                <div className="hero-image-placeholder">
                  <SiteImage
                    src={heroImage2}
                    alt="Cozy café with coffee, books, and flowers"
                    fallback="Coffee • Flowers • Books"
                  />
                </div>

                {/* 
                <div className="hero-floating-text">
                  <span>Coffee</span>
                  <span>Flowers</span>
                  <span>Books</span>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================
          WELCOME SECTION
      ===================== */}
      <section className="welcome-section">
        <div className="container text-center">

          <p className="section-label">
            A LITTLE SOMETHING FOR EVERYONE
          </p>

          <h2>More Than Just a Café</h2>

          <p className="welcome-description mx-auto">
            Whether you're here for your morning coffee,
            a fresh bouquet, or your next favorite book,
            there's always something waiting to brighten your day.
          </p>

          <div className="row g-4 mt-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div className="col-md-4" key={category.id}>
                  <div className="welcome-card">
                    <Icon size={36} strokeWidth={1.4} />

                    <h3>{category.title}</h3>

                    {/* <p>{category.description}</p> */}

                    <Link to={category.link}>
                      {category.linkText}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================
          CLOSING SECTION
      ===================== */}
      {/* <section className="home-quote-section">
        <div className="container text-center">
          <Flower2 size={32} strokeWidth={1.2} />

          <h2>
            Come for the coffee,
            <br />
            stay for the little moments.
          </h2>

          <Link to="/menu" className="btn btn-burgundy">
            Explore Our Menu
            <ArrowRight size={17} />
          </Link>
        </div>
      </section> */}
      {/* =====================
    POPULAR PRODUCTS SECTION
===================== */}
      <section className="home-quote-section">
        <div className="container">

          <div className="text-center">
            <Flower2 size={32} strokeWidth={1.2} />

            <h2>
              Come for the coffee,
              <br />
              stay for the little moments.
            </h2>
          </div>

          <div className="row g-4 mt-4">
            {popularProducts.map((product) => (
              <div className="col-md-4" key={product.id}>
                <ProductCard
                  product={product}
                  onViewDetails={setSelectedProduct}
                  isFavorite={favorites.some(
                    (item) => item.id === product.id
                  )}
                  onToggleFavorite={toggleFavorite}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/menu" className="btn btn-burgundy">
              Explore Full Menu
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          addToCart={addToCart}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}

export default Home;
