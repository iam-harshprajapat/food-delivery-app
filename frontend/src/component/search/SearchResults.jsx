import React from "react";
import { motion } from 'framer-motion';

const SearchResults = ({ results }) => {
    if (!results || results.length === 0) return null;

    return (
        <div className="absolute top-full mt-1 left-0 w-full shadow-lg rounded-md overflow-hidden z-50 select-none">
            {results.map((product) => (
                <div
                    key={product.objectID}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-primary/20 duration-200 cursor-pointer transition border-primary/20"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md"
                    />

                    <div className="flex flex-col">
                        {/* Product Name */}
                        <span className="font-semibold text-sm">
                            {product.name}
                        </span>

                        {/* Category in Italic */}
                        <span className="text-xs italic text-gray-500">
                            {product.type}
                        </span>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default SearchResults;