import React from 'react';
import AddTax from './Components/App/AddTax/Index';
import ListingTax from './Components/App/ListingTax/Index';
import SearchBar from './Components/App/SearchBar/Index';

function App() {
  return (
    <div className="App flex justify-center">
      <div className="wrapper flex-col border w-[60%] shadow-lg mt-5 rounded-lg">
        <div className="top-part flex-col py-6 px-10 border-b">
         <AddTax />
        </div>
        <div className="body px-10 flex-col py-5">
          <SearchBar />
          <ListingTax />
        </div>
        <div className='w-full flex justify-end py-5 px-5'>
          <button type="submit" className="px-4 text-lg bg-[#e05b1f] hover:bg-[#da6725] rounded-sm py-2 text-white">Apply tax to 2 item(s)</button>
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
