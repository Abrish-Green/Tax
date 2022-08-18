import React from 'react';
import AddTax from './Components/App/AddTax/Index';
import ListingTax from './Components/App/ListingTax/Index';
import SearchBar from './Components/App/SearchBar/Index';
import UserInput from './Components/App/UserInput/Index';

function App() {
  return (
    <div className="App flex justify-center">
      <div className="wrapper grid grid-rows-2 border w-[50%] shadow-lg mt-5 rounded-lg">
        <div className="top-part flex-col py-6 px-10 border-b">
         <AddTax />
         <UserInput />
        </div>
        <div className="body px-10 flex-col">
          <SearchBar />
          <ListingTax />
        </div>
      </div>
    </div>
  );
}

export default App;
