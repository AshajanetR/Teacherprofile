import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="flex justify-center mb-6">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for a teacher..."
                className="border-2 border-gray-300 px-4 py-2 rounded-lg"
            />
            <button 
                onClick={handleSearch} 
                className="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
