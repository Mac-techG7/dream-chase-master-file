
import React from 'react';

const UserInfoBar: React.FC = () => {
    return (
        <div className="flex items-center justify-between gap-4 px-4 py-2 bg-slate-800/50">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-slate-900 text-xl">A</div>
                <div>
                    <span className="text-lg font-bold text-slate-100">$ 15.20</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-300">
                        <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-3.69l-8.22-4.22a.75.75 0 0 0-.66 0L2.5 11.06Z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-slate-100">0</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-300">
                        <path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM8.375 5.313a.75.75 0 0 1 .188 1.042l-2.02 3.03a.75.75 0 0 1-1.23-.82l2.02-3.03a.75.75 0 0 1 1.042-.222ZM10 6.5A.75.75 0 0 1 10.75 7.25v5a.75.75 0 0 1-1.5 0v-5A.75.75 0 0 1 10 6.5ZM13.458 9.383a.75.75 0 0 1 1.23.82l-2.02 3.03a.75.75 0 1 1-1.23-.82l2.02-3.03Z" />
                    </svg>
                    <span className="font-semibold text-slate-100">5</span>
                </div>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-xl">A</div>
            </div>
        </div>
    );
};

export default UserInfoBar;
