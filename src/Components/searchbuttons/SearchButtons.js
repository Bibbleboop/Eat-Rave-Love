import { useState } from 'react';

const SearchButtons = ({ setFilter }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (value) => {
    setFilter(value);
    setSelectedButton(value);
  };


  return (
    
    <div className="m-6 space-x-4">
  <button
    className={`flex-shrink-0 bg-blue-500 hover:bg-red-700 text-sm text-white py-1 px-2 rounded ${selectedButton === 'date:today' ? 'selected bg-red-500' : ''}`}
    type="button"
    onClick={() => handleButtonClick('date:today')}
  >
    Today's Events
  </button>
  <button
    className={`flex-shrink-0 bg-blue-500 hover:bg-red-700 text-sm text-white py-1 px-2 rounded ${selectedButton === 'date:tomorrow' ? 'selected bg-red-500' : ''}`}
    type="button"
    onClick={() => handleButtonClick('date:tomorrow')}
  >
    Tomorrow's Events
  </button>
  <button
    className={`flex-shrink-0 bg-blue-500 hover:bg-red-700 text-sm text-white py-1 px-2 rounded ${selectedButton === 'date:week' ? 'selected bg-red-500' : ''}`}
    type="button"
    onClick={() => handleButtonClick('date:week')}
  >
    This Week's Events
      </button>
      <button
    className={`flex-shrink-0 bg-blue-500 hover:bg-red-700 text-sm text-white py-1 px-2 rounded ${selectedButton === 'date:next_week' ? 'selected bg-red-500' : ''}`}
        type="button"
        onClick={() => handleButtonClick('date:next_week')}
      >
        Next Week's Events
      </button>
      <button
    className={`flex-shrink-0 bg-blue-500 hover:bg-red-700 text-sm text-white py-1 px-2 rounded ${selectedButton === 'date:month' ? 'selected bg-red-500' : ''}`}
        type="button"
        onClick={() => handleButtonClick('date:month')}
      >
        This Month's Events
      </button>
      <button
    className={`flex-shrink-0 bg-blue-500 hover:bg-red-700 text-sm text-white py-1 px-2 rounded ${selectedButton === 'date:next_month' ? 'selected bg-red-500' : ''}`}
        type="button"
        onClick={() => handleButtonClick('date:next_month')}
      >
        Next Month's Events
      </button>
      <button
    className={`flex-shrink-0 bg-blue-500 hover:bg-red-700 text-sm text-white py-1 px-2 rounded ${selectedButton === 'event_type:Virtual-Event' ? 'selected bg-red-500' : ''}`}
        type="button"
        onClick={() => handleButtonClick('event_type:Virtual-Event')}
      >
        Online Events
      </button>
    </div>
  );
};

export default SearchButtons;