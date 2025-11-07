import React from 'react';

const BottomNav: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 h-16 bg-slate-800 border-t border-slate-700 z-20">
            <div className="flex justify-around items-center h-full max-w-lg mx-auto relative">
                <NavItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.75A.75.75 0 0 1 3 4.5h.75m0 0h.75A.75.75 0 0 1 4.5 6v.75m0 0v.75A.75.75 0 0 1 3.75 8.25h-.75m0 0h.75a.75.75 0 0 1 .75.75v.75m0 0h.75a.75.75 0 0 1 .75.75v.75m0 0v.75a.75.75 0 0 1-.75.75h-.75m0 0h.75a.75.75 0 0 1 .75.75v.75" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>} label="Earn" />
                <NavItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>} label="Nerts oil" />
                <div className="w-16"></div>
                <NavItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m-6 2.25h6M9 11.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>} label="Cashout" />
                <NavItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>} label="Invest" active />
            </div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <button className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-600/30 ring-4 ring-slate-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
        </footer>
    );
};

interface NavItemProps {
    // Fix: Use React.ReactElement to resolve 'Cannot find namespace JSX' error.
    icon: React.ReactElement;
    label: string;
    active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => {
    return (
        <button className={`flex flex-col items-center gap-1 text-xs transition-colors duration-200 ${active ? 'text-green-400' : 'text-slate-400 hover:text-white'}`}>
            {icon}
            <span>{label}</span>
        </button>
    );
}

export default BottomNav;