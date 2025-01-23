import react from "react";
import aulaF75Image from '../assets/images/aula-f75.jpeg';
import vortextGT65Image from '../assets/images/vortex-gt65.jpg';
import vgnV87Image from '../assets/images/vgn-v87.jpeg';
import PageTransition from '../components/PageTransition';

function ComparisonPage() {
    const [selectedKeyboards, setSelectedKeyboards] = react.useState([]);

    const availableKeyboards = [
        {
            id: 'aula-f75',
            title: "Aula F75",
            image: aulaF75Image,
            price: "Rp749.000",
            layout: "75%",
            switch: "Mechanical",
            connectivity: "Bluetooth/2.4Ghz/Wired",
            features: ["Hot-swappable", "Gasket Mount", "RGB Backlight"],
            weight: "800g",
            material: "Aluminium + Steel Plate"
        },
        {
            id: 'vortexseries-gt65',
            title: "VortexSeries GT65 Byon",
            image: vortextGT65Image,
            price: "Rp899.000",
            layout: "65%",
            switch: "Mechanical",
            connectivity: "Wired",
            features: ["Hot-swappable", "South-facing LED", "Premium Build"],
            weight: "750g",
            material: "Plastic + Brass Plate"
        },
        {
            id: 'vgn-v87',
            title: "VGN V87",
            image: vgnV87Image,
            price: "Rp699.000",
            layout: "TKL",
            switch: "Mechanical",
            connectivity: "Wired",
            features: ["Hot-swappable", "Gasket Mount", "RGB Backlight"],
            weight: "850g",
            material: "Plastic + Steel Plate"
        }
    ];
    
    const addKeyboard = (keyboard) => {
        if (selectedKeyboards.length < 3) {
            setSelectedKeyboards([...selectedKeyboards, keyboard])
        }
    }




    const removeKeyboard = (keyboardId) => {
        setSelectedKeyboards(selectedKeyboards.filter(kb => kb.id !== keyboardId));
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Bandingkan Keyboard</h1>

            {/* selector keyboard */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Pilih Keyboard (Maksimal 3)</h2>
                <select
                    className="w-full md:w-64 p-2 border rounded-md"
                    onChange={(e) => {
                        const selected = availableKeyboards.find(kb => kb.id === e.target.value);
                        if (selected) addKeyboard(selected);
                    }}
                    value=""
                >
                    <option value="">Pilih Keyboard...</option>
                    {availableKeyboards
                        .filter(kb => !selectedKeyboards.find(selected => selected.id === kb.id))
                        .map(kb => (
                            <option key={kb.id} value={kb.id}>{kb.title}</option>
                        ))
                    }
                </select>
            </div>

            {selectedKeyboards.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border p-3 bg-gray-50">Spesifikasi</th>
                                {selectedKeyboards.map(kb => (
                                    <th key={kb.id} className="border p-3 bg-gray-50">
                                        <div className="flex flex-col items-center">
                                            <img 
                                                src={kb.image} 
                                                alt={kb.title} 
                                                className="w-32 h-32 object-cover mb-2"
                                            />
                                            <span className="font-bold">{kb.title}</span>
                                            <button 
                                                onClick={() => removeKeyboard(kb.id)}
                                                className="mt-2 text-sm text-red-600 hover:text-red-800"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Baris-baris spesifikasi */}
                            <tr>
                                <td className="border p-3 font-semibold">Harga</td>
                                {selectedKeyboards.map(kb => (
                                    <td key={kb.id} className="border p-3 text-center">{kb.price}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Layout</td>
                                {selectedKeyboards.map(kb => (
                                    <td key={kb.id} className="border p-3 text-center">{kb.layout}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Switch</td>
                                {selectedKeyboards.map(kb => (
                                    <td key={kb.id} className="border p-3 text-center">{kb.switch}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Konektivitas</td>
                                {selectedKeyboards.map(kb => (
                                    <td key={kb.id} className="border p-3 text-center">{kb.connectivity}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Berat</td>
                                {selectedKeyboards.map(kb => (
                                    <td key={kb.id} className="border p-3 text-center">{kb.weight}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Material</td>
                                {selectedKeyboards.map(kb => (
                                    <td key={kb.id} className="border p-3 text-center">{kb.material}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Fitur</td>
                                {selectedKeyboards.map(kb => (
                                    <td key={kb.id} className="border p-3">
                                        <ul className="list-disc list-inside">
                                            {kb.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">
                        Pilih keyboard untuk mulai membandingkan
                    </p>
                </div>
            )}
        </div>
    );
}

export default ComparisonPage;