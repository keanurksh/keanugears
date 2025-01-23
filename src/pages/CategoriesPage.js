import React, { useState } from 'react';
import ReviewCard from '../components/ReviewCard';
import aulaF75Image from '../assets/images/aula-f75.jpeg';
import vortextGT65Image from '../assets/images/vortex-gt65.jpg';
import vgnV87Image from '../assets/images/vgn-v87.jpeg';
import PageTransition from '../components/PageTransition';

function CategoriesPage() {
    // Data keyboard dengan kategori
    const keyboards = [
        {
            title: "Aula F75",
            image: aulaF75Image,
            rating: "9.5/10",
            description: "Keyboard dengan layout 75% terbaik di kelasnya",
            layout: "75%",
            switch: "Mechanical",
            priceRange: "500-750k"
        },
        {
            title: "VortexSeries GT65 Byon",
            image: vortextGT65Image,
            rating: "9/10",
            description: "Pendatang baru yang siap menggemparkan pasar keyboard 65%",
            layout: "65%",
            switch: "Mechanical",
            priceRange: "750k-1000k"
        },
        {
            title: "VGN V87",
            image: vgnV87Image,
            rating: "8.8/10",
            description: "Keyboard TKL dengan fitur premium",
            layout: "TKL",
            switch: "Optical",
            priceRange: "500-750k"
        }
    ];

    // State untuk filter
    const [activeFilters, setActiveFilters] = useState({
        layout: 'all',
        switch: 'all',
        priceRange: 'all'
    });

    // Filter options
    const filterOptions = {
        layout: ['all', '75%', '65%', 'TKL'],
        switch: ['all', 'Mechanical', 'Magnetic'],
        priceRange: ['all', '500k-750k', '750k-1000k']
    };

    // Filter keyboards
    const filteredKeyboards = keyboards.filter(keyboard => {
        return (activeFilters.layout === 'all' || keyboard.layout === activeFilters.layout) &&
               (activeFilters.switch === 'all' || keyboard.switch === activeFilters.switch) &&
               (activeFilters.priceRange === 'all' || keyboard.priceRange === activeFilters.priceRange);
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Kategori Keyboard</h1>
            
            {/* Filter Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Layout Filter */}
                    <div>
                        <h3 className="font-semibold mb-2">Layout</h3>
                        <select 
                            className="w-full p-2 border rounded-md"
                            value={activeFilters.layout}
                            onChange={(e) => setActiveFilters({...activeFilters, layout: e.target.value})}
                        >
                            {filterOptions.layout.map(option => (
                                <option key={option} value={option}>
                                    {option === 'all' ? 'Semua Layout' : option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Switch Type Filter */}
                    <div>
                        <h3 className="font-semibold mb-2">Jenis Switch</h3>
                        <select 
                            className="w-full p-2 border rounded-md"
                            value={activeFilters.switch}
                            onChange={(e) => setActiveFilters({...activeFilters, switch: e.target.value})}
                        >
                            {filterOptions.switch.map(option => (
                                <option key={option} value={option}>
                                    {option === 'all' ? 'Semua Switch' : option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Price Range Filter */}
                    <div>
                        <h3 className="font-semibold mb-2">Range Harga</h3>
                        <select 
                            className="w-full p-2 border rounded-md"
                            value={activeFilters.priceRange}
                            onChange={(e) => setActiveFilters({...activeFilters, priceRange: e.target.value})}
                        >
                            {filterOptions.priceRange.map(option => (
                                <option key={option} value={option}>
                                    {option === 'all' ? 'Semua Harga' : `Rp ${option}`}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredKeyboards.map((keyboard, index) => (
                    <ReviewCard 
                        key={index}
                        {...keyboard}
                    />
                ))}
            </div>
        </div>
    );
}

export default CategoriesPage;