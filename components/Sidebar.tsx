
import React from 'react';
import { NavItem } from '../types';
import { AgriGrowLogo, DashboardIcon, BriefcaseIcon, StoreIcon, WalletIcon, UserGroupIcon, CogIcon } from './Icons';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const NAV_ITEMS: NavItem[] = [
    { name: 'Dashboard', icon: <DashboardIcon /> },
    { name: 'My Investments', icon: <BriefcaseIcon /> },
    { name: 'Marketplace', icon: <StoreIcon /> },
    { name: 'Wallet', icon: <WalletIcon /> },
    { name: 'Referral', icon: <UserGroupIcon /> },
    { name: 'Settings', icon: <CogIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div 
                className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />
            <aside className={`fixed top-0 left-0 h-full bg-slate-800 w-64 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center gap-2 p-4 border-b border-slate-700">
                    <AgriGrowLogo />
                    <span className="text-xl font-bold text-slate-100">AgriGrow</span>
                </div>
                <nav className="p-4">
                    <ul>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.name} className="mb-2">
                                <a href="#" className={`flex items-center gap-3 p-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-200 ${item.name === 'Dashboard' ? 'bg-green-500/20 text-green-400' : ''}`}>
                                    {item.icon}
                                    <span className="font-medium">{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
