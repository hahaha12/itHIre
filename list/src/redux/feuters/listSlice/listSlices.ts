import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Content } from "./model";
import { initialState } from "./state";

const listSlice = createSlice({
    name: 'list',
    initialState: initialState,
    reducers: {
        getFormData: (state, { payload }: PayloadAction<Content>) => {
            state.data = [...state.data, payload]
        },
        remuveFormDataItem:(state, { payload }: PayloadAction<number>) => {
            const data = [...state.data]
            data.splice(payload, 1) 
            state.data = data
        },
    }
})

export const {
    getFormData,
    remuveFormDataItem
} = listSlice.actions

export default listSlice.reducer