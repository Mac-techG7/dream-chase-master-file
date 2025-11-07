
import React from 'react';
import { AgriGrowLogo } from './Icons';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="flex items-center justify-between p-4 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-20">
            <div className="flex items-center gap-2">
                <AgriGrowLogo />
                <span className="text-xl font-bold text-slate-100">AgriGrow</span>
            </div>
            <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-purple-400">
                    <path fillRule="evenodd" d="M5.588 1.432c.133-.22.44-.22.572 0l1.72 2.868 3.32-.228c.28-.02.516.242.496.52l-.332 4.648 2.868 1.72c.22.133.22.44 0 .572l-2.868 1.72.332 4.648c.02.28-.217.54-.496.52l-3.32-.228-1.72 2.868c-.133.22-.44.22-.572 0l-1.72-2.868-3.32.228c-.28.02-.516-.242-.496-.52l.332-4.648-2.868-1.72c-.22-.133-.22-.44 0-.572l2.868-1.72-.332-4.648c-.02-.28.217-.54.496-.52l3.32.228 1.72-2.868Z" clipRule="evenodd" />
                </svg>
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">0</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="font-semibold text-yellow-400">5</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400">
                       <path d="M10 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                       <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm12.895 2.152a.75.75 0 0 0-1.297-.81L11 13.993V11.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75v-2.25a.75.75 0 0 0-.105-.398Z" clipRule="evenodd" />
                    </svg>
                </div>
                 <button onClick={onMenuClick} className="p-1 rounded-full text-slate-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
