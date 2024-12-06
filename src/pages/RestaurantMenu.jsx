import { useParams } from 'react-router-dom'
import { RestaurantShimmer } from '../components/Shimmer';
import { useRestaurantMenu } from '../utils/hooks/useRestaurantMenu';
import MenuItem from '../components/MenuItem';
import { FaStar } from "react-icons/fa";
import { TbArrowLoopLeft } from "react-icons/tb";
import { TbArrowLoopRight } from "react-icons/tb";
import { useState } from 'react';

const RestaurantMenu = () => {
    const { id } = useParams();
    const { restaurant, restaurantMenu } = useRestaurantMenu(id);
    const [isOpen, setIsOpen] = useState(true);    

    const toggleContents = () => setIsOpen((prev) => !prev);

    return !restaurant ? (
        <RestaurantShimmer />
    ) : (
        // restaurant menu - main section
        <div className="m-4 sm:mx-12 md:mx-40">
            {/* restaurant details */}
            <div className="my-6">
                <h3 className="text-xl text-center sm:text-2xl font-bold my-5 text-[#02023a]">{restaurant?.name}</h3>
                <div className="p-5 leading-8 border rounded-2xl mt-2 shadow-xl">
                    <div className="flex gap-2 sm:gap-3 font-bold">
                        <h4 className="flex items-center gap-1">
                            <FaStar color="green" />
                            {restaurant?.avgRating}{" "}
                        </h4>
                        <h4>({restaurant?.totalRatings} ratings)</h4>
                        <h4>{restaurant?.costForTwoMessage}</h4>
                    </div>
                    <h4 className="underline text-[#ff5200] font-semibold">{restaurant?.cuisines?.join(", ")}</h4>
                    <h4 className="font-semibold">
                        Outlet <span className="text-[#02060c99] pl-1">{restaurant?.locality}</span>
                    </h4>
                    <h4 className="font-semibold">{restaurant?.sla?.slaString?.toLowerCase()}</h4>
                </div>
            </div>
            {/* Menu and menu items list */}
            <div>
                <h2 className="text-2xl py-6 flex items-center font-bold justify-center">
                    <TbArrowLoopLeft />
                    ----- Menu ----
                    <TbArrowLoopRight />
                </h2>
                {/* accordion button and - list */}
                <div>
                    <button
                        className="w-full flex justify-between items-center py-4 text-left border-none"
                        onClick={toggleContents}
                    >
                        <span className="text-lg sm:text-xl font-bold">Recommended ({restaurantMenu?.length})</span>
                        <svg
                            className={`h-6 w-6 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {/* Menu item list */}
                    {restaurantMenu?.map((menu) => (
                        <MenuItem key={menu.id} {...menu} isOpen={isOpen} menu={menu} />
                    ))}
                    <hr className="border-8 rounded-sm mt-6" />
                </div>
                {/* this code is for swiggy api all menu items card listing - its not working */}
                {/* <div className="">
                    {restaurantMenu?.titles?.map((item) => (
                        <div key={item.id}>
                            <button
                                className="w-full flex justify-between items-center py-4 text-left border-none"
                                onClick={toggleAccordion}
                            >
                                <span className="text-lg font-medium">{item.title}</span>
                                <svg
                                    className={`h-6 w-6 transform transition-transform ${openIndex ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {restaurantMenu?.itemsCard[item.id]?.map((item) => (
                                <CategoryAccordion key={item.id} menu={item.card.info} />
                            ))}
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default RestaurantMenu