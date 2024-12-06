import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {}, 
        totalItemsCount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const itemId = action.payload.id; // Extract the item ID
            const existingItem = state.items[itemId]; // Check if the item already exists in the cart

            // Update quantity: increment if the item exists, otherwise set it to 1
            const updatedItem = {
                ...action.payload,
                quantity: existingItem ? existingItem.quantity + 1 : 1,
            };

            // Update the items and increment total item count
            state.items[itemId] = updatedItem;
            state.totalItemsCount++;
        },

        removeItem: (state, action) => {
            const itemId = action.payload; // Extract the item ID
            const existingItem = state.items[itemId]; // Check if the item exists in the cart

            if (!existingItem) return; // If the item doesn't exist, exit early

            if (existingItem.quantity > 1) {
                // Reduce the quantity if it's greater than 1
                existingItem.quantity--;
            } else {
                // Remove the item if the quantity reaches 0
                delete state.items[itemId];
            }

            // Decrement the total item count
            state.totalItemsCount--;
        },
        clearCart: (state) => {
            // Clear all items and reset total count
            state.items = {};
            state.totalItemsCount = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;