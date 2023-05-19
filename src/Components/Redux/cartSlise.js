import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },

    },

});
// export const {value} = cartSlice.actions;
// export const { decrement } = cartSlice.actions;
// export const { dell } = cartSlice.actions;
// export const { increment } = cartSlice.actions;
export const { add } = cartSlice.actions;
export default cartSlice.reducer;