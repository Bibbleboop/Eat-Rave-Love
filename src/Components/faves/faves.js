import React, { useState } from "react";
import { CiBeerMugFull } from "react-icons/ci";

function Faves({
  id,
  title,
  date,
  address,
  link,
  image,
  description,
  event_location_map,
  setSavedCards,
  cards = [],
}) {
  const [isFave, setIsFave] = useState(false);

  const handleFaveClick = () => {
    setIsFave(!isFave);
    if (!isFave) {
      const card = { id, title, date, event_location_map, address, link, image, description };
      onAdd(card);
    } else {
      handleRemoveFaveCard(id);
    }
  };

  const onAdd = (card) => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
    const newFaveCards = [...faveCards, card];
    localStorage.setItem("faves", JSON.stringify(newFaveCards));
  };

  const handleRemoveFaveCard = (id) => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
    const newFaveCards = faveCards.filter((card) => card.id !== id);
    setSavedCards(newFaveCards);
    localStorage.setItem("faves", JSON.stringify(newFaveCards));
  };


  return (
    <>
      {isFave || cards.some((card) => card.id === id) ? (
        <button onClick={handleFaveClick} style={{ border: "none" }}>
          <CiBeerMugFull className="bg-cyan-950 text-yellow-500 h-10 w-10" />
        </button>
      ) : (
        <button onClick={handleFaveClick} style={{ border: "none" }}>
          <CiBeerMugFull className="bg-cyan-950 hover:bg-cyan-950 color-cyan-950 border-black h-10 w-10" />
        </button>
      )}
    </>
  );
}

export default Faves;
