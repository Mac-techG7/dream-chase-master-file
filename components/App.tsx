
import React, { useState } from 'react';
import Header from './components/Header';
import UserInfoBar from './components/UserInfoBar';
import Sidebar from './components/Sidebar';
import FarmCard from './components/FarmCard';
import BottomNav from './components/BottomNav';
import { FARMS_DATA } from './constants';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-white bg-slate-900 flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <UserInfoBar />
        
        <main className="flex-1 overflow-y-auto px-4 py-6 pb-24">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-slate-100">Available Farms to Invest</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {FARMS_DATA.map((farm) => (
              <FarmCard key={farm.id} farm={farm} />
            ))}
          </div>
        </main>
        
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
