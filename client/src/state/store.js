import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import favsReducer from "./favorites";
import moviesReducer from "./movies";
import userReducer from "./users";

const store = configureStore({
  /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), */
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    favs: favsReducer,
  },
});

export default store;
