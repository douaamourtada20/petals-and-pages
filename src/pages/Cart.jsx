import SiteImage from "../components/SiteImage";
import { products } from "../data/products";
import { Link } from "react-router-dom";

import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  Coffee,
  CupSoda,
  Croissant,
  Flower2,
  BookOpen,
} from "lucide-react";

import "../styles/Cart.css";

function Cart({ cart, removeFromCart, updateQuantity }) {
  const icons = {
    coffee: Coffee,
    cup: CupSoda,
    bakery: Croissant,
    flower: Flower2,
    book: BookOpen,
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <div className="container">

        <div className="cart-heading text-center">
          <ShoppingBag size={32} strokeWidth={1.3} />

          <p className="section-label mt-3">YOUR LITTLE COLLECTION</p>

          <h1>Shopping Cart</h1>

        </div>

        {cart.length === 0 ? (
          <div className="cart-empty text-center">
            <ShoppingBag size={65} strokeWidth={1} />

            <h2>Your cart is empty</h2>

            <p>There are beautiful things waiting to be discovered.</p>

            <Link to="/menu" className="btn btn-burgundy">
              Explore Our Menu
            </Link>
          </div>
        ) : (
          <div className="row g-4">

            {/* Cart items */}
            <div className="col-lg-8">
              <div className="cart-items-box">
                <div className="cart-items-header">
                  <h2>Your Items ({totalItems})</h2>
                </div>

                {cart.map((item) => {
                  const Icon = icons[item.icon] || Coffee;

                  return (
                    <div
                      className="cart-item"
                      key={`${item.id}-${item.size}`}
                    >
                      <div className="cart-item-image">
                        <SiteImage
                          src={
                            products.find((product) => product.id === item.id)?.image ||
                            item.image
                          }
                          alt={item.name}
                          fallback={item.name}
                        />
                      </div>

                      <div className="cart-item-info">
                        <p className="product-category">{item.category}</p>
                        <h3>{item.name}</h3>

                        {item.size && (
                          <p className="cart-item-size">
                            Size: {item.size}
                          </p>
                        )}

                        <span className="cart-item-price">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      <div className="cart-item-actions">
                        <button
                          className="cart-remove-btn"
                          type="button"
                          onClick={() => removeFromCart(item.id, item.size)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={18} />
                        </button>

                        <div className="quantity-control">
                          <button
                            type="button"
                            disabled={item.quantity === 1}
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus size={15} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus size={15} />
                          </button>
                        </div>

                        <strong className="cart-line-total">
                          ${(item.price * item.quantity).toFixed(2)}
                        </strong>
                      </div>
                    </div>
                  );
                })}

                <Link to="/menu" className="cart-continue-link">
                  <ArrowLeft size={17} />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order summary */}
            <div className="col-lg-4">
              <div className="cart-summary">
                <h2>Order Summary</h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row summary-total">
                  <strong>Total</strong>
                  <strong>${subtotal.toFixed(2)}</strong>
                </div>

                <button
                  className="btn btn-burgundy w-100"
                  type="button"
                  disabled
                  title="Checkout will require a backend integration"
                >
                  Checkout
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;
