import { FaRegStopCircle, FaStar } from "react-icons/fa";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { IMG_CDN_URL } from "../Config";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast, Toaster } from "sonner";

const MenuItem = ({ menu, name, imageId, isVeg, price, defaultPrice, ratings, description, isOpen }) => {

    const dispatch = useDispatch();
    
    // add to cart - dispatching redux action
    const addMenuItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <>
            {isOpen && (
                // showing menu items if accordion is open - default true
                <div className="my-2 border-t-2">
                    <Toaster richColors position="top-center" />
                    <div className="flex items-center justify-between gap-1 my-2 py-5 text-gray-700 transition duration-300 leading-6">
                        {/* text details of menu item */}
                        <div className="w-3/4">
                            {isVeg ? (
                                <FaRegStopCircle color="green" className="h-10 font-bold" />
                            ) : (
                                <FaRegSquareCaretUp color="red" className="h-9 font-bold" />
                            )}
                            <h4 className="mt-[-8px] text-lg font-bold">{name}</h4>
                            <h5 className="font-bold">₹ {defaultPrice ? defaultPrice / 100 : price / 100}</h5>
                            <h6 className="flex items-center gap-1 my-2 font-semibold">
                                <FaStar color="green" />
                                {ratings?.aggregatedRating?.rating && ratings.aggregatedRating.ratingCountV2
                                    ? `${ratings.aggregatedRating.rating} (${ratings.aggregatedRating.ratingCountV2})`
                                    : null}
                            </h6>
                            <h6 className="">{description}</h6>
                        </div>
                        {/* image of menu item and add to cart button */}
                        <div className="relative">
                            <img
                                className="w-32 h-32 sm:w-40 sm:h-40 object-cover aspect-auto shadow rounded-xl"
                                src={IMG_CDN_URL + imageId}
                                alt="Items img"
                            />
                            <button
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-[#1ba672] rounded px-4 sm:px-10 py-1.5 font-bold shadow-lg hover:bg-[#d7dade]"
                                onClick={() => {
                                    addMenuItem(menu);
                                    toast.success("Item added to Cart");
                                }}
                            >
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuItem