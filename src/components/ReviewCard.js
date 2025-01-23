import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ReviewCard({ title, image, rating, description, videoId }) {
    const [showVideo, setShowVideo] = useState(false);
    const slug = title.toLowerCase().replace(/ /g, '-');

    return (
        <div className="relative">
            <Link to={`/review/${slug}`}>
                <motion.div 
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    {!showVideo ? (
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-48 object-cover"
                        />
                    ) : (
                        <iframe
                            className="w-full h-48"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`${title} Review`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <h3 className="text-xl font-bold flex-grow">{title}</h3>
                            <div className="flex items-center">
                                <span className="text-yellow-400">★</span>
                                <span className="ml-1 text-gray-600">{rating}</span>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">{description}</p>
                    </div>
                </motion.div>
            </Link>
            {videoId && (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowVideo(!showVideo)}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-lg"
                >
                    {!showVideo ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </motion.button>
            )}
        </div>
    );
}

export default ReviewCard;