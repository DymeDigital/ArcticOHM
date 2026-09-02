import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';

export default function CartSlider({
  isOpen = false,
  onClose = () => {},
  cart = [],
  onUpdateQty = () => {},
  onRemove = () => {},
  onCheckout = () => {},
}) {
  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slider */}
      <aside
        className={`cart-slider ${isOpen ? 'open' : ''}`}
        aria-label="Shopping Cart"
      >
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button
            type="button"
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <ShoppingCart size={48} />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <div className="cart-item-price">
                      R {(item.price || 0).toLocaleString()}
                    </div>
                    <div className="cart-item-controls">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        disabled={item.qty <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="qty-value">{item.qty}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="cart-item-remove"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span className="cart-total-label">Total</span>
                <span className="cart-total-value">
                  R {total.toLocaleString()}
                </span>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={onCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
