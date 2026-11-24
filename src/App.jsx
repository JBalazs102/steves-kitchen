
import React, { useState } from "react";

import Header from "./components/Header";
import MenuSelector from "./components/MenuSelector";
import DaySelector from "./components/DaySelector";
import MenuOptions from "./components/MenuOptions";
import Cart from "./components/Cart";

import "./app.css";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("A");
  const [selectedDay, setSelectedDay] = useState("Hetfo");
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((previousCart) => {
      const existing = previousCart.find(
        (product) => product.id === item.id
      );

      if (existing) {
        return previousCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [
        ...previousCart,
        { ...item, quantity: 1 },
      ];
    });
  }

  function removeFromCart(id) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  }

  function handleOrder() {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const summary = cart
      .map(
        (item) =>
          `${item.name} - ${item.quantity} db`
      )
      .join("\n");

    alert(
      `Rendelési összesítő:\n\n${summary}\n\nVégösszeg: ${total.toLocaleString("hu-HU")} Ft\n\nA rendelésed összeállítása megtörtént!`
    );

    setCart([]);
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <MenuSelector
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />

        <DaySelector
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />

        <MenuOptions
          selectedMenu={selectedMenu}
          selectedDay={selectedDay}
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          onOrder={handleOrder}
        />
      </main>

      <footer>
        <p>Jó étvágyat kíván a Steve's Kitchen & Pub!</p>
        <p>Székesfehérvár, Budai út 12.</p>
      </footer>
    </div>
  );
}

export default App;
