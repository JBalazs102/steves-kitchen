import React from "react";

function Cart({ cart, removeFromCart, onOrder }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h2>🛒 Rendelésed</h2>

      {cart.length === 0 ? (
        <p>A kosarad jelenleg üres.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p>{item.quantity} db</p>
              <strong>
                {(item.price * item.quantity).toLocaleString("hu-HU")} Ft
              </strong>
            </div>

            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Törlés
            </button>
          </div>
        ))
      )}

      <div className="cart-total">
        Végösszeg: {total.toLocaleString("hu-HU")} Ft
      </div>

      <button
        className="order-button"
        disabled={cart.length === 0}
        onClick={onOrder}
      >
        Rendelés leadása
      </button>
    </section>
  );
}

export default Cart;
