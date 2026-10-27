import SiteImage from "./SiteImage";
import { useEffect, useState } from "react";

import {
  X,
  Plus,
  Minus,
  Coffee,
  CupSoda,
  Croissant,
  Flower2,
  BookOpen,
} from "lucide-react";

function ProductModal({ product, onClose, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedSize(product.sizes[0] || "");
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [product, onClose]);

  if (!product) return null;

  const icons = {
    coffee: Coffee,
    cup: CupSoda,
    bakery: Croissant,
    flower: Flower2,
    book: BookOpen,
  };

  const Icon = icons[product.icon] || Coffee;

  const totalPrice = product.price * quantity;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    onClose();
  };

  return (
    <div
      className="product-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="product-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          className="modal-close-btn"
          type="button"
          onClick={onClose}
          aria-label="Close product details"
        >
          <X size={22} />
        </button>

        <div className="row g-0">

          {/* Product visual */}
          <div className="col-md-5">
            <div className="modal-product-image">
              <SiteImage
                src={product.image}
                alt={product.name}
                fallback={product.name}
              />
            </div>
          </div>

          {/* Product information */}
          <div className="col-md-7">
            <div className="modal-product-details">

              <p className="product-category">{product.category}</p>

              <h2 id="product-modal-title">{product.name}</h2>

              <p className="modal-description">
                {product.description}
              </p>

              <h3 className="modal-price">
                ${product.price.toFixed(2)}
              </h3>

              {/* Size */}
              {product.sizes.length > 0 && (
                <div className="modal-size-section">
                  <p className="modal-label">Choose Size</p>

                  <div className="d-flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`size-btn ${selectedSize === size ? "active" : ""
                          }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="modal-quantity-section">
                <p className="modal-label">Quantity</p>

                <div className="quantity-control">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity === 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={17} />
                  </button>

                  <span>{quantity}</span>

                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={17} />
                  </button>
                </div>
              </div>

              <button
                className="btn btn-burgundy w-100 modal-add-btn"
                type="button"
                onClick={handleAddToCart}
              >
                Add to Cart — ${totalPrice.toFixed(2)}
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductModal;
