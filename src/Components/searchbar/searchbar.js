import React, { useState } from 'react';
import SerpApi from 'google-search-results-nodejs';
import Card from '../cards/Card';
import SearchButtons from '../searchbuttons/SearchButtons';
import PageNumbers from '../pagenumbers/PageNumbers';

function SearchBar(props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [showComponents, setShowComponents] = useState(false);

  const search = (query, filter, pageNumber) => {
    const search = new SerpApi.GoogleSearch("c454b774640a879beb6a843015825e7d8c4e98701f51969d6dd8e5906d392064");
    const params = {
      q: query,
      engine: "google_events",
      htichips: filter,
      start: (pageNumber - 1) * 10
    };

    console.log('params:', params);

    search.json(params, (data) => {
      setResults(data.events_results);
      setShowComponents(true); // Set showComponents to true after results are set
    });
  };

  const handleInputChange = (event) => {
setQuery(event.target.value);
};

const handleKeyDown = (event) => {
if (event.key === 'Enter') {
search(query, filter, pageNumber);
}
};

const handleButtonClick = (filter) => {
setFilter(filter);
setPageNumber(1);
search(query, filter, 1);
};

const handlePageClick = (page) => {
setPageNumber(page);
search(query, filter, page);
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
className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded-xl focus:outline-none focus:shadow-outline"
type="button"
onClick={() => search(query, filter, pageNumber)} // Pass search function to onClick
>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
</button>
</div>
{showComponents && ( // Conditionally render SearchButtons and PageNumbers
<>
<SearchButtons setFilter={handleButtonClick} />
<div className="flex flex-wrap justify-center">
{Array.isArray(results) && results.map((result) => (
<Card key={result.id} {...result} />
))}
</div>
<PageNumbers query={query} setResults={setResults} handlePageClick={handlePageClick} />
</>
)}
</div>
);
}

export default SearchBar;