import React from "react";
import Faves from "../faves/faves";


function Card({ title, date, address, link, image, description, event_location_map, id }) {
  return (
    <div className="w-full mx-auto my-4 rounded-xl overflow-hidden shadow-lg flex bg-cyan-950">
      <div className="w-1/3">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="w-full h-52 object-cover" src={image} alt={title} />
        </a>
      </div>
      <div className="w-2/3 mx-8">
        <div className="flex justify-between">
          <div className="font-bold text-xl my-2 text-white">{title}</div>
          <div className="my-2">
            <Faves
              id={id}
              title={title}
              date={date}
              address={address}
              link={link}
              image={image}
              description={description}
              event_location_map={event_location_map}
            />
          </div>
        </div>
        {date && (
          <p className="text-white text-base mb-2">
            <span className="font-bold">Event: </span>
            {date.when}
          </p>
        )}
        <div className="flex flex-row-reverse justify-end mb-2">
          <div>
            {event_location_map && (
              <a
                href={event_location_map.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white mx-2"
                >
                  <path d="M12 3.5c-3.3 0-6 2.7-6 6 0 2.8 4.1 9.6 5.4 11.2.2.3.4.3.6 0C13.9 19.1 18 12.3 18 9.5c0-3.3-2.7-6-6-6zm0 8.4c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6S14.6 7.1 14.6 8.5 13.4 12 12 12z" />
                </svg>
              </a>
            )}
          </div>
          <div>
            {event_location_map && (
              <a
                className="my-2"
                href={event_location_map.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                  {address && (
                  <span className="text-white text-base my-2">
                    <span className="font-bold">Venue: </span>
                    {address.join(", ")}
                  </span>
                )}
              </a>
            )}
          </div>
        </div>
        <p className="text-white text-base mb-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
