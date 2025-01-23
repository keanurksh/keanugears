import React from 'react';
import { motion } from 'framer-motion';

function ReviewCardSkeleton() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
            {/* Skeleton untuk gambar */}
            <motion.div 
                animate={{ 
                    backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
                    transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                className="w-full h-48"
            />
            
            <div className="p-6 space-y-4">
                {/* Skeleton untuk judul */}
                <motion.div 
                    animate={{ 
                        backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
                        transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.2
                        }
                    }}
                    className="h-6 rounded-md w-3/4"
                />
                
                {/* Skeleton untuk rating */}
                <motion.div 
                    animate={{ 
                        backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
                        transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.4
                        }
                    }}
                    className="h-4 rounded-md w-1/4"
                />
                
                {/* Skeleton untuk deskripsi */}
                <motion.div 
                    animate={{ 
                        backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
                        transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.6
                        }
                    }}
                    className="h-4 rounded-md w-full"
                />
                
                {/* Skeleton untuk button */}
                <motion.div 
                    animate={{ 
                        backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
                        transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.8
                        }
                    }}
                    className="h-10 rounded-md w-1/3 mt-4"
                />
            </div>
        </motion.div>
    );
}

export default ReviewCardSkeleton;