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
    className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white  text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:today' ? 'selected bg-slate-500' : ''}`}
    type="button"
    onClick={() => handleButtonClick('date:today')}
  >
    Today's Events
  </button>
  <button
    className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:tomorrow' ? 'selected bg-slate-500' : ''}`}
    type="button"
    onClick={() => handleButtonClick('date:tomorrow')}
  >
    Tomorrow's Events
  </button>
  <button
    className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:week' ? 'selected bg-slate-500' : ''}`}
    type="button"
    onClick={() => handleButtonClick('date:week')}
  >
    This Week's Events
      </button>
      <button
    className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:next_week' ? 'selected bg-slate-500' : ''}`}
        type="button"
        onClick={() => handleButtonClick('date:next_week')}
      >
        Next Week's Events
      </button>
      <button
    className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:month' ? 'selected bg-slate-500' : ''}`}
        type="button"
        onClick={() => handleButtonClick('date:month')}
      >
        This Month's Events
      </button>
      <button
    className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:next_month' ? 'selected bg-slate-500' : ''}`}
        type="button"
        onClick={() => handleButtonClick('date:next_month')}
      >
        Next Month's Events
      </button>
      <button
    className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'event_type:Virtual-Event' ? 'selected bg-slate-500' : ''}`}
        type="button"
        onClick={() => handleButtonClick('event_type:Virtual-Event')}
      >
        Online Events
      </button>
    </div>
  );
};

export default SearchButtons;