
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Flower2 } from "lucide-react";

import { products } from "../data/products";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

import "../styles/Menu.css";

function Menu({ addToCart, favorites, toggleFavorite }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const search = searchParams.get("q") || "";

  const handleSearchChange = (value) => {
    setSearchParams(value ? { q: value } : {});
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchParams({});
  };

  return (
    <main>

      {/* Menu header */}
      <section className="menu-header">
        <div className="container text-center">
          <Flower2 size={30} strokeWidth={1.2} />

          <p className="section-label mt-3">MADE WITH LOVE</p>

          <h1>Explore Our Menu</h1>

        </div>
      </section>

      {/* Products */}
      <section className="menu-products-section">
        <div className="container">

          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="menu-toolbar d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

            <p className="menu-results-count mb-0">
              Showing <strong>{filteredProducts.length}</strong> products
            </p>

            <div className="menu-search">
              <Search size={19} />

              <input
                type="search"
                placeholder="Search our collection..."
                value={search}
                onChange={(event) => handleSearchChange(event.target.value)}
                aria-label="Search menu products"
              />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="row g-4">
              {filteredProducts.map((product) => (
                <div
                  className="col-12 col-sm-6 col-lg-4"
                  key={product.id}
                >
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
          ) : (
            <div className="menu-empty-state text-center">
              <Flower2 size={42} strokeWidth={1.2} />

              <h3>No products found</h3>

              <p>Try another search or choose a different category.</p>

              <button
                className="btn btn-burgundy"
                type="button"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          )}

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

export default Menu;
