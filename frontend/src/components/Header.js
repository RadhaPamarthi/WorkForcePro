import React, { useState } from 'react';
import { Bell, ChevronDown, Search, Share2, Menu } from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-2 bg-white shadow-sm h-14">
      {/* Adding the Menu Icon to the left */}
      <div className="ml-4">
        <button className="p-1 text-gray-700 bg-white rounded-full hover:bg-teal-500 hover:text-white">
          <Menu size={24} />
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Moving the search bar slightly left and reducing its height */}
        <div className="relative ml-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        {/* Adjusting margins and size for better button spacing */}
        <button className="p-1 text-gray-700 bg-white rounded-full hover:bg-teal-500 hover:text-white ml-2">
          <Share2 size={20} />
        </button>

        <button className="relative p-1 text-gray-700 bg-white rounded-full hover:bg-teal-500 hover:text-white ml-2">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        {/* Profile Name without Avatar */}
        <div className="relative ml-4">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2 bg-white p-1 rounded-full text-gray-700 focus:outline-none hover:bg-teal-500 hover:text-white transition-colors duration-200"
          >
            {/* Name and Chevron */}
            <span className="font-medium text-sm whitespace-nowrap">Radha R</span>
            <ChevronDown size={18} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 bg-white hover:bg-teal-500 hover:text-white">
                Profile
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 bg-white hover:bg-teal-500 hover:text-white">
                Settings
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 bg-white hover:bg-teal-500 hover:text-white">
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
