import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroSetup from '../assets/images/setup1.jpg';

function HeroSection() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, 100]);

    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 py-16 relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Review Terlengkap Keyboard Gaming
                        </h1>
                        <p className="text-xl mb-8">
                            Temukan keyboard gaming terbaik untuk setup gaming Anda
                        </p>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mb-8"
                        >
                            <div className="flex max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
                                <input
                                    type="text"
                                    placeholder="Cari keyboard..."
                                    className="w-full px-4 py-3 text-gray-700 focus:outline-none"
                                />
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition duration-300"
                                >
                                    Cari
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        style={{ y }}
                        className="flex justify-center"
                    >
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            src={heroSetup}
                            alt="Gaming Setup"
                            className="rounded-lg shadow-xl w-full max-w-lg object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;