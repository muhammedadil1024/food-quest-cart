export const filterData = (searchText, allRestaurants) => {
    const filteredData = allRestaurants.filter((restaurant) =>
        restaurant?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
};

export const getCartTotal = (cartItems) => {
    if (!cartItems || Object.keys(cartItems).length === 0) return 0; // Handle empty cart

    const totalPrice = Object.values(cartItems).reduce((total, item) => {
        const price = item.price || item.defaultPrice; // Use item.price if available, else defaultPrice
        return total + item.quantity * price;
    }, 0);

    return (totalPrice / 100).toFixed(2); // Convert to dollars (or similar) and format to 2 decimal places
};