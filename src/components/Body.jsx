import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/utils";
import { useFetchRestaurant } from "../utils/hooks/useFetchRestaurant";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState();

    // custom hook data fetching
    const allRestaurants = useFetchRestaurant();

    useEffect(() => {
        setFilteredRestaurants(allRestaurants);
    }, [allRestaurants]);

    // Early return - to avoid the error undefined eg: 'allRestaurant' we can also do optional chaining
    if (!allRestaurants) return null;

    return allRestaurants?.length == 0 ? (
        // showing shimmer cards for loading
        <Shimmer />
    ) : (
        <>
            {/* search and search results */}
            {/* search box and button */}
            <div className="flex m-4 items-center justify-center gap-2">
                <input
                    className="border-2 p-1.5 md:p-2 border-[#282c3f4d] rounded-md outline-none md:w-full max-w-80"
                    type="search"
                    name="inp-search"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    required
                />
                <button
                    type="button"
                    className="bg-[#ff5200] text-white px-3 py-1.5 md:px-5 md:py-2"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            {/* not found and back button */}
            <div className="restaurant-list flex flex-wrap justify-center">
                {filteredRestaurants?.length == 0 ? (
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl">Restaurants Not Found</h1>
                        <button
                            type="button"
                            className="my-4 text-center px-6 py-2 bg-[#1c9a16] hover:bg-[#20ab19] text-white rounded-lg shadow transition-all"
                            onClick={() => {
                                setFilteredRestaurants(allRestaurants);
                            }}
                        >
                            Back
                        </button>
                    </div>
                ) : (
                    // restaurants list cards
                    filteredRestaurants?.map((restaurant) => (
                        <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
                            <RestaurantCard {...restaurant} />
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}

export default Body