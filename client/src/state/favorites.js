import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import config from "../utils/config";

export const getFavs = createAsyncThunk("GET_FAVS", async (userId) => {
  try {
    const res = await axios.get(
      `https://localhost:${config.port}/api/fav/user/${userId}`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
});

const initialState = {
  favs: [],
};

const favsReducer = createReducer(initialState, {
  [getFavs.fulfilled]: (state, action) => {
    return { ...state, favs: action.payload };
  },
});

export default favsReducer;
