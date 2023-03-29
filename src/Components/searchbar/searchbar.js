import React, { useState } from 'react';
import SerpApi from 'google-search-results-nodejs';
import Card from '../cards/Card';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

const search = () => {
  const search = new SerpApi.GoogleSearch("ecddabef330026be1f232884374692bbb15da48b06725cb8062df86df6d9dad3");
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
      <div className="flex items-center  border-b-2 border-sky-500 py-2">
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
          className="flex-shrink-0 bg-sky-500 hover:bg-sky-700 border-sky-500 hover:border-sky-700 text-sm border-4 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={search}
          
        >
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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
