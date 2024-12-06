import { FaStar } from "react-icons/fa";
import { IMG_CDN_URL } from "../Config";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId, slaString, locality }) => {
    return (
        <div className="w-ful max-w-80 p-3 my-1 transition-transform rounded-xl hover:shadow-lg">
            {/* restaurant image */}
            <img
                className="w-full h-full object-cover rounded-xl mt-1"
                src={IMG_CDN_URL + cloudinaryImageId}
                alt="restaurant img"
            />
            {/* card content */}
            <div className="pt-4 pb-1 leading-7">
                <h2 className="text-lg line-clamp-1">{name}</h2>
                <div className="flex gap-4">
                    {avgRating && (
                        <h4 className="flex items-center gap-1">
                            <FaStar color="green" />
                            {avgRating}
                        </h4>
                    )} ● 
                    <h4>{slaString}</h4>
                </div>
                <h3 className="text-[#02060c99] line-clamp-1">{cuisines.join(", ")}</h3>
                <h4 className="text-[#02060c99]">{locality}</h4>
            </div>
        </div>
    );
};

export default RestaurantCard