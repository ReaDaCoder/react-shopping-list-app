
import {createSlice} from "reduxjs/toolkit";

const itemsSlice = itemsSliceSlice({
    name: "List Item",
    initialState: {
        value: 0
    },
    reducers: {
        add: state => {
            state += 1
        },
        remove: state => {
            state -= 1
        }
    }
})

export const {add, remove} = itemsSlice.actions
export default itemsSlice