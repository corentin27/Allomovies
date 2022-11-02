import {configureStore, createSlice} from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: "fav",
    initialState: [],
    reducers: {
        addFav: (state, action) => {
            const newFav = {
                id: action.payload,
                done: false
            }
            state.push(newFav)
        },
        toggleFav: (state, action) => {
            const fav = state.find((t) => t.id === action.payload);
            fav.done = !fav.done;
        },
        deleteFav: (state, action) => {
            state = state.filter((t) => t.id !== action.payload)
        }
    }
})

export const store = configureStore({
    reducer: {
        fav: favSlice.reducer
    }
})