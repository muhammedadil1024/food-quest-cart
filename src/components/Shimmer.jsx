
const Shimmer = () => {
    return (
        <div className="flex items-center justify-center flex-wrap m-4">
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div className="shimmer-card" key={index}>
                        <div className="shimmer shimmer-img"></div>
                        <div className="shimmer shimmer-heading"></div>
                        <div className="shimmer shimmer-text"></div>
                        <div className="shimmer shimmer-text"></div>
                    </div>
                ))
            }
        </div>
    );
}

export default Shimmer

export const RestaurantShimmer = () => {
    return (
        <div className="space-y-5 mt-6 sm:mx-12 md:mx-40">
            {/* Box with heading and text */}
            <div className="p-5 bg-white rounded-lg shadow-lg flex flex-col gap-3 my-2">
                <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse h-6 w-3/5 rounded-md"></div>
                <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse h-4 w-1/3 rounded-md"></div>
                <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse h-4 w-1/3 rounded-md"></div>
            </div>
            {/* Card with image on right and text on left */}
            {Array(5)
                .fill("")
                .map((e, index) => (
                    <div className="p-5 bg-white rounded-lg shadow-lg flex gap-5 items-center" key={index}>
                        {/* Text content */}
                        <div className="flex-1 flex flex-col gap-3">
                            <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse h-6 w-3/5 rounded-md"></div>
                            <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse h-4 w-1/3 rounded-md"></div>
                            <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse h-4 w-4/5 rounded-md"></div>
                        </div>
                        {/* Image */}
                        <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-lg"></div>
                    </div>
                ))}
        </div>
    );
}