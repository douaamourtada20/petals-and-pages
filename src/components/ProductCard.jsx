
import SiteImage from "./SiteImage";
import { ArrowUpRight, Heart } from "lucide-react";

function ProductCard({
  product,
  onViewDetails,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="product-card h-100">

      {/* Product image */}
      <div className={`product-image product-${product.category.toLowerCase()}`}>

        {/* Display the actual product image */}
        <SiteImage
          src={product.image}
          alt={product.name}
          fallback={product.name}
        />

        {/* Popular badge */}
        {product.popular && (
          <span className="popular-badge">Popular</span>
        )}

        {/* Favorite button */}
        <button
          type="button"
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => onToggleFavorite(product)}
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          <Heart
            size={20}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Product details */}
      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
          <span className="product-price">
            ${product.price.toFixed(2)}
          </span>

          <button
            className="product-view-btn"
            type="button"
            onClick={() => onViewDetails(product)}
          >
            View Details
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;
