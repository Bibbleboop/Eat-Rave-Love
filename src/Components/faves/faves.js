import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/solid";

function Faves({
  id,
  title,
  date,
  address,
  link,
  image,
  description,
  setSavedCards,
  cards = [],
   // assuming you pass the `cards` prop
}) {
  const [isFave, setIsFave] = useState(false);

  const handleFaveClick = () => {
    setIsFave(!isFave);
    if (!isFave) {
      const card = { id, title, date, address, link, image, description };
      onAdd(card);
    } else {
      handleRemoveFaveCard(id);
    }
  };



  const onAdd = (card) => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
    const newFaveCards = [...faveCards, card];
    localStorage.setItem("faves", JSON.stringify(newFaveCards));
    console.log("Added card to faves:", card);
    console.log("New faves list:", newFaveCards);
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
        <button onClick={handleFaveClick}>
          <HeartIcon className="text-red-500 h-6 w-6" />
        </button>
      ) : (
        <button onClick={handleFaveClick}>
          <HeartIcon className="text-gray-500 h-6 w-6" />
        </button>
      )}
    </>
  );
}

export default Faves;
