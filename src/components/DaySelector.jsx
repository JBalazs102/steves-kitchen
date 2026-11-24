import React from "react";
import { menuData } from "../data/menuData";

function DaySelector({ selectedDay, setSelectedDay }) {
  return (
    <section className="day-selector">
      <h2>Válassz napot!</h2>

      <div className="day-buttons">
        {Object.entries(menuData).map(([key, value]) => (
          <button
            key={key}
            className={selectedDay === key ? "active" : ""}
            onClick={() => setSelectedDay(key)}
          >
            {value.day}
          </button>
        ))}
      </div>
    </section>
  );
}

export default DaySelector;
