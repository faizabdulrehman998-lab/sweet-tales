import { useEffect, useState } from "react";
import { MENU_CATEGORIES, img } from "../data/menu";

const TAX_RATE = 0.08875;

export default function Menu() {
  const [activeId, setActiveId] = useState(MENU_CATEGORIES[0].id);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const active = MENU_CATEGORIES.find((c) => c.id === activeId);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;
          const qty = item.qty + delta;
          return qty <= 0 ? null : { ...item, qty };
        })
        .filter(Boolean)
    );
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setCartOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = subtotal * TAX_RATE;

  return (
    <>
      <section className="menu-hero" aria-labelledby="menu-title">
        <div className="container">
          <span className="eyebrow">Order Online</span>
          <h1 id="menu-title">The Menu</h1>
          <p>Platters, sandwiches, sides and the sauces that made us famous.</p>
        </div>
      </section>

      <div className="category-bar">
        <div className="container">
          <div className="category-tabs" role="tablist" aria-label="Menu categories">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={activeId === cat.id}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActiveId(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section
        className="menu-section"
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
      >
        <div className="container">
          {active.items.length > 0 && (
            <div className="menu-grid">
              {active.items.map((item) => (
                <article key={item.id} className="menu-card">
                  <div className="menu-card-photo">
                    <img
                      src={img(item.image)}
                      alt={item.name}
                      width={240}
                      height={240}
                      loading="lazy"
                    />
                  </div>
                  <div className="menu-card-body">
                    <div className="menu-card-head">
                      <h3>{item.name}</h3>
                      <span className="menu-price">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="menu-tags">
                      {item.popular && (
                        <span className="chip chip-hot">Popular</span>
                      )}
                      {item.vegetarian && (
                        <span className="chip chip-veg">Vegetarian</span>
                      )}
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-block"
                      onClick={() => addToCart(item)}
                      aria-label={`Add ${item.name} to order`}
                    >
                      Add to Order
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {active.extras && active.extras.length > 0 && (
            <div className="menu-list">
              {active.extras.map((item) => (
                <div key={item.id} className="menu-list-row">
                  <div className="menu-list-info">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="menu-list-actions">
                    <span className="menu-price">${item.price.toFixed(2)}</span>
                    <button
                      type="button"
                      className="btn btn-dark btn-sm"
                      onClick={() => addToCart(item)}
                      aria-label={`Add ${item.name} to order`}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cart FAB */}
      <button
        type="button"
        className="cart-fab"
        onClick={() => setCartOpen(true)}
        aria-label={`Open your order${count > 0 ? `, ${count} items` : ""}`}
      >
        Your Order
        {count > 0 && <span className="cart-count">{count}</span>}
      </button>

      {/* Cart */}
      <div
        className={`cart-overlay ${cartOpen ? "open" : ""}`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`cart-drawer ${cartOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
        aria-hidden={!cartOpen}
      >
        <div className="cart-head">
          <h2>Your Order</h2>
          <button
            type="button"
            className="cart-close"
            onClick={() => setCartOpen(false)}
            aria-label="Close order"
          >
            ✕
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <strong>Nothing here yet</strong>
              <p>Add a platter or two — the sauces come free.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-line">
                <div className="cart-thumb">
                  {item.image ? (
                    <img src={img(item.image)} alt="" width={52} height={52} />
                  ) : (
                    <span className="thumb-fallback" aria-hidden="true">
                      {item.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="cart-line-info">
                  <h3>{item.name}</h3>
                  <span>${item.price.toFixed(2)} each</span>
                  <div className="qty" style={{ marginTop: 6 }}>
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, -1)}
                      aria-label={`Remove one ${item.name}`}
                    >
                      −
                    </button>
                    <span aria-live="polite">{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, 1)}
                      aria-label={`Add one ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-line-total">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-foot">
            <div className="cart-summary">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary">
              <span>Tax (NYC 8.875%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="cart-summary total">
              <span>Total</span>
              <span>${(subtotal + tax).toFixed(2)}</span>
            </div>
            <button type="button" className="btn btn-primary btn-block">
              Checkout ({count} {count === 1 ? "item" : "items"})
            </button>
            <p className="cart-note">
              Demo checkout — this prototype doesn&rsquo;t process real orders.
              Pickup is usually ready in ~15 minutes.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
