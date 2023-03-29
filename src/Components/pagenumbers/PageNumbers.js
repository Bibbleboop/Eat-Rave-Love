import React from 'react';

function PageNumbers(props) {
  const { handlePageClick } = props;

  const handleButtonClick = (start) => {
    handlePageClick(start);
  };

  return (
    <div className="flex justify-center">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap space-x-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((start) => (
<li key={start}>
<button
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
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
