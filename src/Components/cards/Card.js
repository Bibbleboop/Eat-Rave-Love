import React from "react";
import Faves from "../faves/faves";

function Card({ title, date, address, link, image, description, id }) {
  return (
    <div className="w-full mx-auto my-4 rounded-xl overflow-hidden shadow-lg flex bg-cyan-950">
      <div className="w-1/3">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="w-full h-48 object-cover" src={image} alt={title} />
        </a>
      </div>
      <div className="w-2/3 mx-8">
        <div className="flex justify-around">
          <div className="font-bold text-xl my-2 text-slate-400">{title}</div>
          <div className="my-2">
            <Faves
              id={id}
              title={title}
              date={date}
              address={address}
              link={link}
              image={image}
              description={description}
            />
          </div>
        </div>
        {date && (
          <p className="text-slate-400 text-base my-2 font-bold">
            Event: {date.when}
          </p>
        )}
        <a
          className="font-bold text-sm my-2 text-slate-400"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Tickets
        </a>
        {address && (
          <p className="text-slate-400 text-base mb-2">{address.join(", ")}</p>
        )}
        <p className="text-slate-400 text-base mb-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
