import React from "react";
import { menuData, prices } from "../data/menuData";

function MenuOptions({
  selectedMenu,
  selectedDay,
  addToCart,
}) {
  const day = menuData[selectedDay];
  const price = prices[selectedMenu];

  const mainDish = day[selectedMenu.toLowerCase()];

  const options = [
    {
      type: "full",
      name: "Teljes menü",
      description: `${day.soup} + ${mainDish}`,
      price: price.full,
    },
    {
      type: "soup",
      name: "Csak leves",
      description: day.soup,
      price: price.soup,
    },
    {
      type: "main",
      name: "Csak főétel",
      description: mainDish,
      price: price.main,
    },
  ];

  return (
    <section className="menu-options">
      <h2>{day.day} – {selectedMenu} menü</h2>

      {options.map((option) => (
        <div className="food-card" key={option.type}>
          <div>
            <h3>{option.name}</h3>
            <p>{option.description}</p>
            <strong>
              {option.price.toLocaleString("hu-HU")} Ft
            </strong>
          </div>

          <button
            onClick={() =>
              addToCart({
                id: `${selectedDay}-${selectedMenu}-${option.type}`,
                name: `${day.day} – ${option.name} (${selectedMenu} menü)`,
                description: option.description,
                price: option.price,
              })
            }
          >
            Kosárba
          </button>
        </div>
      ))}
    </section>
  );
}

export default MenuOptions;
