import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const findMovies = createAsyncThunk("FIND_MOVIES", (movie) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=batman`)
    .then((res) => res.data)
    .catch((e) => e);
});

export const movieDetail = createAsyncThunk("MOVIE_DETAIL", async (movie) => {
  try {
    const res = axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.APY_KEY}&t=${movie}`
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
