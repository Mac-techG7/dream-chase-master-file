
import React from 'react';
import { Farm } from '../types';

interface FarmCardProps {
  farm: Farm;
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
    const formatCurrency = (amount: number) => {
        return `N${new Intl.NumberFormat('en-US').format(amount)}`;
    }

  return (
    <div className="relative rounded-xl overflow-hidden h-48 shadow-lg">
      <img src={farm.image} alt={farm.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h2 className="text-2xl font-bold text-white mb-2">{farm.name}</h2>
        <div className="flex justify-between items-center text-slate-200">
            <div className="flex gap-4">
                <div>
                    <p className="text-xs text-slate-400">{farm.duration} days</p>
                    <p className="font-semibold">{formatCurrency(farm.dailyReturn)}/day</p>
                </div>
                <div>
                    <p className="text-xs text-slate-400">Total</p>
                    <p className="font-semibold text-green-400">{formatCurrency(farm.totalReturn)}</p>
                </div>
            </div>
            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md">
                Invest
            </button>
        </div>
      </div>
    </div>
  );
};

export default FarmCard;
