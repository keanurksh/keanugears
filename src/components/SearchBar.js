import react, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
            setSearchTerm(``);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex w-full max-w-md">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari keyboard..."
                className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500"
               />
            <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition duration-300"
            >
                Cari
            </button>
        </form>
    );
}

export default SearchBar;