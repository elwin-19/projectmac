import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Battery, BatteryCharging } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BatteryCharging className="h-8 w-8 text-green-400" />
              <span className="font-bold text-xl">Hybrid EV Charger</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-slate-800 px-3 py-2 rounded-md">Home</Link>
              <Link to="/product" className="hover:bg-slate-800 px-3 py-2 rounded-md">Product</Link>
              <Link to="/about" className="hover:bg-slate-800 px-3 py-2 rounded-md">About Us</Link>
              <Link to="/contact" className="hover:bg-slate-800 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-slate-800 px-3 py-2 rounded-md">Home</Link>
            <Link to="/product" className="block hover:bg-slate-800 px-3 py-2 rounded-md">Product</Link>
            <Link to="/about" className="block hover:bg-slate-800 px-3 py-2 rounded-md">About Us</Link>
            <Link to="/contact" className="block hover:bg-slate-800 px-3 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;