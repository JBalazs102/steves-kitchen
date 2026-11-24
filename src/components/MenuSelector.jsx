import React from "react";

function MenuSelector({ selectedMenu, setSelectedMenu }) {
  return (
    <section className="menu-selector">
      <h2>Válassz menüt!</h2>

      <div className="menu-buttons">
        {["A", "B", "C"].map((menu) => (
          <button
            key={menu}
            className={
              selectedMenu === menu ? "active" : ""
            }
            onClick={() => setSelectedMenu(menu)}
          >
            {menu} menü
          </button>
        ))}
      </div>
    </section>
  );
}

export default MenuSelector;
