import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addItem(state,action){
            state.cart.push({
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                price: action.payload.price,
                image: action.payload.image,
            })
        },
        removeItem(state, action) {
            state.cart = state.cart.filter(item=> item.id !== action.payload.id)
        }
        
    }
})
export const {addItem, removeItem} = cartSlice.actions
export default cartSlice.reducer