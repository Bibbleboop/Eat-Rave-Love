import React from 'react';

function Card({ title, date, address, link, image, description }) {
  return (
    <div className="w-full mx-auto my-4 rounded-xl overflow-hidden shadow-lg flex">
      <div className="w-1/3">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="w-full h-48 object-cover" src={image} alt={title} />
        </a>
      </div>
      <div className="w-2/3 mx-8">
        <a className="text-black" href={link} target="_blank" rel="noopener noreferrer">
          <div className="font-bold text-xl my-2 text-black-400">{title}</div>
        </a>
        {date && (
          <p className="text-gray-700 text-base my-2 font-bold">Event: {date.when}</p>
        )}
        <a className="font-bold text-sm my-2" href={link} target="_blank" rel="noopener noreferrer">Get Tickets</a>
        {address && (
          <p className="text-gray-700 text-base mb-2">{address.join(', ')}</p>
        )}
        <p className="text-gray-700 text-base mb-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
