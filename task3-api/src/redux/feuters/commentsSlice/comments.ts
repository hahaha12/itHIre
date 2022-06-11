import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCommentsRes } from "../../../api/api";
import { dataType } from "./model";
import { initialState } from "./state";


const commentsSlice = createSlice({
    name: 'comme',
    initialState: initialState,
    reducers: {
        getComments: (state, { payload }: PayloadAction<dataType[]>) => {
            state.data = payload
        },
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload
        },
        nextData:(state) => {
            state.num = state.num += 1
        },
    }
})

export const {
    setLoading,
    getComments,
    nextData
} = commentsSlice.actions

export default commentsSlice.reducer

export const getCommentsData = (postNum:number): any => async (dispatch:any) => {
    dispatch(setLoading(true))
    try {
        const res = await getCommentsRes(postNum)
        dispatch(setLoading(false))
        dispatch(getComments(res.data))

    } catch (err: any) {
        throw Error(err)

    } finally {
        console.log('request send ')
    }
}
