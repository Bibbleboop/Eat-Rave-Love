import React, { useState, useEffect } from "react";
import Card from "../cards/Card";
import Faves from "../faves/faves";

function SavedCards() {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
    setSavedCards(faveCards);
  }, []);

  const handleFaveClick = (card) => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");

    const index = faveCards.findIndex((c) => c.id === card.id);
    if (index === -1) {
      const newFaveCards = [...faveCards, card];
      localStorage.setItem("faves", JSON.stringify(newFaveCards));
      setSavedCards(newFaveCards);
    } else {
      const newFaveCards = [
        ...faveCards.slice(0, index),
        ...faveCards.slice(index + 1),
      ];
      localStorage.setItem("faves", JSON.stringify(newFaveCards));
      setSavedCards(newFaveCards);
    }
  };

  const handleRemoveFaveCard = (id) => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
    const newFaveCards = faveCards.filter((card) => card.id !== id);
    setSavedCards(newFaveCards);
    localStorage.setItem("faves", JSON.stringify(newFaveCards));
  };

  useEffect(() => {
    window.addEventListener("storage", () => {
      const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
      setSavedCards(faveCards);
    });
    return () => window.removeEventListener("storage", () => {});
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10" id="fav">
      <h1 className="text-3xl font-bold text-center mb-10">Saved Events</h1>
      {savedCards.length === 0 && (
        <p className="text-center text-lg">No saved events yet.</p>
      )}
      {savedCards.map((card) => (
        <div key={card.id}>
          <Card {...card} setSavedCards={setSavedCards}>
            <Faves
              {...card}
              setSavedCards={setSavedCards}
              handleFaveClick={handleFaveClick}
              handleRemoveFaveCard={handleRemoveFaveCard}
            />
          </Card>
        </div>
      ))}
    </div>
  );
}

export default SavedCards;
