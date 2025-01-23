import React from "react";
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import aulaF75Image from '../assets/images/aula-f75.jpeg';
import vortextGT65Image from '../assets/images/vortex-gt65.jpg';
import vgnV87Image from '../assets/images/vgn-v87.jpeg';
import PageTransition from '../components/PageTransition';

function ReviewDetailPage() {
    const { id } = useParams();

    const reviewsData = {
        'aula-f75': {
            title: "Aula F75",
            image: aulaF75Image,
            rating: "9.5/10",
            price: "Rp749.000",
            pros: [
                "Build quality premium, tidak ringkih",
                "Tri-Mode Connection: Bluetooth, Dongle 2.4Ghz, Wired",
                "Gasket Mount",
                "Hot-swappable all keys, cocok untuk gonta ganti switch dan keycaps"
            ],
            cons: [
                "Ketahanan baterai yang kurang tahan lama",
                "Garansi yang tidak pasti, tergantung toko/distributor",
                "Implementasi tampilan Software yang masih kurang oke"
            ],
            fullReview: `Aula F75 adalah keyboard gaming dengan layout 75% yang menghadirkan pengalaman mengetik premium dengan harga terjangkau. Keyboard ini hadir dengan fitur hot-swappable yang memungkinkan pengguna untuk mengganti switch sesuai keinginan pengguna.`,
            affiliateLinks: {
                tokopedia: "https://tokopedia.link/3jPIRPdAmQb",
                shopee: "https://shopee.co.id/gamenofficialstore.id/24839324196 #ShopeeID"
            }
        },
        'vortexseries-gt65-byon': {
            title: "VortexSeries GT65 Byon",
            image: vortextGT65Image,
            rating: "9/10",
            price: "Rp899.000",
            pros: [
                "Desain minimalis yang elegan",
                "Hot-swappable PCB",
                "South-facing LED",
                "Build quality premium"
            ],
            cons: [
                "Harga cukup tinggi untuk kelasnya",
                "Ketersediaan stok terbatas",
                "Pilihan switch bawaan terbatas"
            ],
            fullReview: `VortexSeries GT65 Byon hadir sebagai pendatang baru yang menjanjikan di segmen keyboard 65%. Dengan build quality premium dan fitur hot-swappable, keyboard ini siap bersaing dengan kompetitor lainnya.`,
            affiliateLinks: {
                tokopedia: "https://tokopedia.link/khwtJ7FAmQb",
                shopee: "https://shopee.co.id/tokoteknopro/22511760699 #ShopeeID"
            }
        },
        'vgn-v87': {
            title: "VGN V87",
            image: vgnV87Image,
            rating: "8.8/10",
            price: "Rp595.000-Rp700.000",
            pros: [
                "Layout TKL yang ergonomis",
                "Hot-swappable PCB",
                "Gasket mount implementation",
                "Harga bersaing"
            ],
            cons: [
                "Stabilizer perlu tune",
                "Stock keycaps biasa",
                "Software kurang user friendly"
            ],
            fullReview: `VGN V87 menghadirkan pengalaman gaming dan mengetik yang solid dengan layout TKL klasik. Dengan fitur gasket mount dan hot-swappable, keyboard ini menawarkan value yang sangat baik untuk harganya.`,
            affiliateLinks: {
                tokopedia: "https://tokopedia.link/Eu5E3qOAmQb",
                shopee: "https://shopee.co.id/neko.mech/28072410859 #ShopeeID"
            }
        }
    };

    const currentReview = reviewsData[id] || reviewsData['aula-f75'];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{currentReview.title}</h1>
                <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-blue-600">{currentReview.rating}</span>
                    <span className="text-gray-600">{currentReview.price}</span>
                </div>
            </div>

            {/* image */}
            <div className="mb-8">
                <img
                    src={currentReview.image}
                    alt={currentReview.title}
                    className="w-full rounded-lg shadow-lg"
                />
            </div>

            {/* pros n cons */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-green-800 mb-4">Kelebihan</h2>
                    <ul className="space-y-2">
                        {currentReview.pros.map((pro, index) => (
                            <li key={index} className="flex items-center text-green-600">
                                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {pro}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-red-800 mb-4">Kekurangan</h2>
                    <ul className="space-y-2">
                        {currentReview.cons.map((con, index) => (
                            <li key={index} className="flex items-center text-red-700">
                                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                {con}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Affiliate Buttons */}
            <div className="flex justify-center space-x-4 my-8">
    <motion.a
        href={currentReview.affiliateLinks.tokopedia}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
    >
        <img 
            src="/tokopedia-logo.png" 
            alt="Tokopedia" 
            className="w-6 h-6 mr-2"
        />
        Beli di Tokopedia
    </motion.a>
    
    <motion.a
        href={currentReview.affiliateLinks.shopee}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
    >
        <img 
            src="/shopee-logo.png" 
            alt="Shopee" 
            className="w-6 h-6 mr-2"
        />
        Beli di Shopee
    </motion.a>
</div>


            {/* full review */}
            <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Review Lengkap</h2>
                <p className="text-gray-700 whitespace-pre-line">{currentReview.fullReview}</p>
            </div>
        </div>
    );
}

export default ReviewDetailPage;