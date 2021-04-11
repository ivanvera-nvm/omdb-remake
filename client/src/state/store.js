import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import moviesReducer from "./movies";
import userReducer  from "./users";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default store;
