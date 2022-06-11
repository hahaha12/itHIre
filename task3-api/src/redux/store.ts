import {
    configureStore,
    ThunkAction,
    Action,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import logger from "redux-logger";
import commentsSlice  from './feuters/commentsSlice/comments'


  const middleware = [...getDefaultMiddleware(), logger];
export const store = configureStore({
    reducer: {
      commentsSlice:commentsSlice
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