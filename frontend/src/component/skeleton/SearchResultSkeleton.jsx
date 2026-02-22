
const SearchResultSkeleton = () => {
    const results = [0, 1, 2]

    return (
        <div className="absolute top-full mt-1 left-0 w-full shadow-lg rounded-md overflow-hidden z-50 select-none animate-pulse">

            {results.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 px-3 py-2 border-primary/20">
                    <div className="bg-zinc-400 w-12 h-12 object-cover rounded-md" />
                    <div className="flex flex-col gap-1">
                        <div className="bg-zinc-400 w-40 h-3 font-semibold text-sm rounded-xs" />
                        <div className="w-24 h-2 italic bg-gray-400 rounded-xs" />
                    </div>
                </div>
            ))
            }
        </div>
    );
};

export default SearchResultSkeleton;