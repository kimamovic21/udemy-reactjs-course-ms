import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id) // checking if that item already exists
            state.totalQuantity = state.totalQuantity + 1;
            if (!existingItem) {  // if item does not exists
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } 
            else {  // adding to an existing item
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            };
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity = state.totalQuantity - 1;
            if (existingItem.quantity === 1) { // if quantity value is 1, then we want to remove the item from the array entirely
                state.items = state.items.filter(item => item.id !== id);
            }  
            else { // if quantity value is greater than 1, than then we want to reduce the quanttiy by 1
                existingItem.quantity = existingItem.quantity - 1;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            };
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
