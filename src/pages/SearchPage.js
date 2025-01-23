import react from "react";
import { useSearchParams } from "react-router-dom";
import ReviewCard from '../components/ReviewCard';
import aulaF75Image from '../assets/images/aula-f75.jpeg';
import vortextGT65Image from '../assets/images/vortex-gt65.jpg';
import vgnV87Image from '../assets/images/vgn-v87.jpeg';
import PageTransition from '../components/PageTransition';

function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

    // data keyboard
    const allKeyboards = [
        {
            title: "Aula F75",
            image: aulaF75Image,
            rating: "9.5/10",
            description: "Keyboard dengan layout 75% terbaik di kelasnya",
            price: "Rp749.000"
        },
        {
            title: "VortexSeries GT65 Byon",
            image: vortextGT65Image,
            rating: "9/10",
            description: "Pendatang baru yang siap menggemparkan pasar keyboard 65%",
            price: "Rp899.000"
        },
        {
            title: "VGN V87",
            image: vgnV87Image,
            rating: "8.8/10",
            description: "Keyboard TKL dengan fitur premium",
            price: "Rp699.000"  
        }
    ];

    // filter keyboard berdasarkan query
    const filteredKeyboards = allKeyboards.filter(keyboard => {
        const searchRegex = new RegExp(query, 'i');
        return (
            searchRegex.test(keyboard.title) ||
            searchRegex.test(keyboard.description)
        );
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">
                Hasil Pencarian: {query}
            </h1>
            <p className="text-gray-600 mb-8">
                Ditemukan {filteredKeyboards.length} hasil untuk "{query}"
            </p>

            {filteredKeyboards.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredKeyboards.map((keyboard, index) => (
                        <ReviewCard key={index} {...keyboard} />
                    ))}
                </div>

            ) : (
                <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-gray-600 mb-4">
                        Tidak ada hasil yang ditemukan
                    </h2>
                    <p className="text-gray-500">
                        Coba cari dengan kata kunci lain
                    </p>
                </div>
            )}
        </div>
    );
}

export default SearchPage;