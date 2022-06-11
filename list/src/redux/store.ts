import {
    configureStore,
    ThunkAction,
    Action,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import logger from "redux-logger";
import listSlices from "./feuters/listSlice/listSlices";


  const middleware = [...getDefaultMiddleware(), logger];
export const store = configureStore({
    reducer: {
        listSlice:listSlices
    },
    middleware       
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;