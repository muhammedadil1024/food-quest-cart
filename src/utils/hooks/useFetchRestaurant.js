import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../../Config";

export const useFetchRestaurant = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    
    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        try {
            const data = await fetch(FETCH_RESTAURANT_URL);
            const jsonData = await data.json();

            const toMapData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            const toMapDataCardOne = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            if (toMapData == undefined) {
                const extractedData = toMapDataCardOne?.map((singleData) => ({
                    id: singleData.info.id,
                    name: singleData.info.name,
                    cloudinaryImageId: singleData.info.cloudinaryImageId,
                    cuisines: singleData.info.cuisines,
                    avgRating: singleData.info.avgRating,
                    slaString: singleData.info.sla.slaString,
                    locality: singleData.info.locality,
                }));
                setAllRestaurants(extractedData);
            } else {
                const extractedData = toMapData?.map((singleData) => ({
                    id: singleData.info.id,
                    name: singleData.info.name,
                    cloudinaryImageId: singleData.info.cloudinaryImageId,
                    cuisines: singleData.info.cuisines,
                    avgRating: singleData.info.avgRating,
                    slaString: singleData.info.sla.slaString,
                    locality: singleData.info.locality,
                }));
                setAllRestaurants(extractedData);
            }
     
            // setFilteredRestaurants(extractedData);
        } catch (error) {
            console.error(error);
        }
    };
    
    return allRestaurants;
}
