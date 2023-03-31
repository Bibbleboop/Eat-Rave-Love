import React, { useState } from 'react';

function PageNumbers(props) {
  const { handlePageClick, pageNumber } = props;

  const [currentPage, setCurrentPage] = useState(pageNumber);

  const handleButtonClick = (start) => {
    handlePageClick(start);
    setCurrentPage(start);
  };

  return (
    <div className="flex justify-center">
      <nav className="block">
        <ul className="flex pl-0 rounded-xl list-none flex-wrap space-x-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((start) => (
            <li key={start}>
              <button
                className={`bg-${start === currentPage ? 'black' : 'cyan'}-950 hover:bg-${start === currentPage ? 'black' : 'cyan'}-700 text-white font-bold py-2 px-4 border-${start === currentPage ? 'black' : 'cyan'}-700 rounded-xl ${start === currentPage ? 'selected' : ''}`}
                onClick={() => handleButtonClick(start)}
              >
                {start}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default PageNumbers;

