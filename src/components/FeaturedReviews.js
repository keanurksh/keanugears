import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import ReviewCardSkeleton from "./ReviewCardSkeleton";
import aulaF75Image from '../assets/images/aula-f75.jpeg';
import vortextGT65Image from '../assets/images/vortex-gt65.jpg';
import vgnV87Image from '../assets/images/vgn-v87.jpeg';

function FeaturedReviews() {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    useEffect(() => {
        // simulasi loading data
        console.log('Loading:', loading)
        setTimeout(() => {
            setReviews([
                {
                    title: "Aula F75",
                    image: aulaF75Image,
                    rating: "9.5/10",
                    description: "Keyboard dengan layout 75% terbaik di kelasnya. Hot-swappable dengan gasket mount yang memberikan feel premium.",
                    videoId: "pHUJkCpaYx8"
                },
                {
                    title: "VortexSeries GT65 Byon",
                    image: vortextGT65Image,
                    rating: "9/10",
                    description: "Keyboard layout 65% dengan performa tinggi. Pendatang baru yang siap menggemparkan pasar keyboard 65%.",
                    videoId: "ofrqPieyi7c"
                },
                {
                    title: "VGN V87",
                    image: vgnV87Image,
                    rating: "8.8/10",
                    description: "Keyboard TKL yang dilengkapi dengan fitur-fitur premium seperti hot-swappable dan gasket mount.",
                    videoId: "zUt9SGcEMVg"
                }
            ]);
            setLoading(false);
            console.log('Loading Completed');
        }, 1500); 
    }, []); // Tambahkan dependency array kosong

    return (
        <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="py-16 bg-gray-50"
        >
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Review Terpopuler
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {loading ? (
        console.log('Rendering skeletons') || // Debug render
        <>
            <ReviewCardSkeleton />
            <ReviewCardSkeleton />
            <ReviewCardSkeleton />
        </>
    ) : (
        console.log('Rendering reviews') || // Debug render
        reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
        ))
    )}
</div>
            </div>
        </motion.section>
    );
}

export default FeaturedReviews;