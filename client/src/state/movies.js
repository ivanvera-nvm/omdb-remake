import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import config from "../utils/config";

export const findMovies = createAsyncThunk(
  "FIND_MOVIES",
  async (movie = "avengers") => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${config.apiKey}&s=${movie}`
      );
      return res.data;
    } catch (e) {
      return e;
    }
  }
);

export const movieDetail = createAsyncThunk("MOVIE_DETAIL", async (movie) => {
  try {
    const res = axios.get(
      `https://www.omdbapi.com/?apikey=${config.apiKey}&t=${movie}`
    );
    return res;
  } catch (e) {
    console.log(e);
  }
});

const initialState = {
  movies: [],
  movieDetail: [],
};

const moviesReducer = createReducer(initialState, {
  [findMovies.fulfilled]: (state, action) => {
    return { ...state, movies: action.payload };
  },
  [movieDetail.fulfilled]: (state, action) => {
    return { ...state, movieDetail: action.payload };
  },
});

export default moviesReducer;
