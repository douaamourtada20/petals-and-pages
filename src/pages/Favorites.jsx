
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

import "../styles/Menu.css";
import "../styles/Favorites.css";

function Favorites({ favorites, toggleFavorite, addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="favorites-page">
      <div className="container">

        <div className="favorites-heading text-center">
          <Heart size={32} strokeWidth={1.3} />

          <p className="section-label mt-3">SAVED WITH LOVE</p>

          <h1>Your Favorites</h1>
        </div>

        {favorites.length === 0 ? (
          <div className="favorites-empty text-center">
            <Heart size={60} strokeWidth={1} />

            <h2>No favorites yet</h2>

            <p>Explore our collection and save what you love.</p>

            <Link to="/menu" className="btn btn-burgundy">
              Explore Our Menu
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {favorites.map((product) => (
              <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                <ProductCard
                  product={product}
                  onViewDetails={setSelectedProduct}
                  isFavorite={true}
                  onToggleFavorite={toggleFavorite}
                />
              </div>
            ))}
          </div>
        )}

      </div>

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

export default Favorites;
