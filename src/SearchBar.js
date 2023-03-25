import React, { useState } from 'react';
import SerpApi from 'google-search-results-nodejs';
import Card from './Card';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

const search = () => {
  const search = new SerpApi.GoogleSearch("99e862960da1f6c3c8cfcc8f6ba4f35968cee4846f4411a8a8e75b8e697c3d9e");
  const params = {
        q: query,
    engine: "google_events",
    num: "20"
  };
  search.json(params, (data) => {
    setResults(data.events_results);
  });
};

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  return (
    <div>
      <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search events"
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={search}
          
        >

        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {Array.isArray(results) && results.map((result) => (
          <Card
            key={result.cache_id}
            title={result.title}
            date={result.date}
            image={result.image}
            link={result.link}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
