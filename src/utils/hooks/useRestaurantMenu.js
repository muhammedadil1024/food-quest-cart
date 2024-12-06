import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../Config";

export const useRestaurantMenu = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        const getRestaurantMenu = async () => {
            try {
                const data = await fetch(
                    `${FETCH_MENU_URL}${id}&catalog_qa=undefined&submitAction=ENTER`
                );
                const jsonData = await data.json();
               
                // setting restaurant details
                setRestaurant(jsonData?.data?.cards[2]?.card?.card?.info);

                // ---------------------------- Current ---------------------------------
                // this is for menuItems -> itemCards card position for data fetching. - this is using for inconsistency in swiggy api for dataCards. 

                const menuData = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
                // this is because some time Swiggy api's inconsistency, menu data info will be in different position in card or the above 'menuData' will be undefined, in that case will use below menuData
                const menuDataCardOne = jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
                const menuDataRegularCard = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
                const menuDataRegularCardOne = jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
            
                if (!menuData) {
                    const mappedMenu = Object?.values(menuDataCardOne)?.map((items) => items.card.info);
                    setRestaurantMenu(mappedMenu);
                    console.log(mappedMenu);
                    
                } else if (menuDataRegularCard) {
                    const mappedMenu = Object?.values(menuDataRegularCard)?.map((items) => items.card.info);
                    setRestaurantMenu(mappedMenu);
                    console.log(mappedMenu);
                } else if (menuDataRegularCardOne) {
                    const mappedMenu = Object?.values(menuDataRegularCardOne)?.map((items) => items.card.info);
                    setRestaurantMenu(mappedMenu);
                    console.log(mappedMenu);
                } else {
                    const mappedMenu = Object?.values(menuData)?.map((items) => items.card.info);
                    setRestaurantMenu(mappedMenu);
                    console.log(mappedMenu);
                }
                // --------------------------- End - Current ------------------------------

                // New method ----------------

                // console.log(jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

                // const newMapTry = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                // const newMapTryOne = jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                
                // New method trying -------------------------------------
                // if (!newMapTry) {
                //     const titles = newMapTryOne.map((item) => item.card.card.title);
                //     const itemsCards = newMapTryOne.map((item) => item.card.card.itemCards);
                //     setRestaurantMenu({ titles, itemsCards });
                // } else {
                //     const titles = newMapTry.map((item) => item.card.card.title);
                //     const itemsCards = newMapTry.map((item) => item.card.card.itemCards);
                //     setRestaurantMenu({ titles, itemsCards });
                // }
            } catch (error) {
                console.error(error);
            }
        };
        getRestaurantMenu();
    }, [id]);

    return { restaurant, restaurantMenu };
};