import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import config from "../utils/config";

export const getFavs = createAsyncThunk("GET_FAVS", async (userId) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/fav/user/1`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
});

export const addFavs = createAsyncThunk("ADD_FAVS", async (movie) => {
  try {
    const res = await axios.post(
      `http://localhost:${config.port}/api/fav/user/${movie.owner}`,
      { ...movie, owner: movie.owner }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
});

export const removeFavs = createAsyncThunk("REMOVE_FAVS", async (values) => {
  try {
    await axios.delete(
      `http://localhost:8000/api/fav/${values.userId}`,
      {
        data: {data: values.imdbID},
      }
    );
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  favs: [],
};

const favsReducer = createReducer(initialState, {
  [getFavs.fulfilled]: (state, action) => {
    return { ...state, favs: action.payload };
  },
  [addFavs.fulfilled]: (state, action) => {
    return { ...state, favs: [...state.favs, action.payload] };
  },
  [removeFavs.fulfilled]: (state, action) => {
    return { ...state, favs:  action.payload};
  },
});

export default favsReducer;
