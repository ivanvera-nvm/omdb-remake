import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";

import axios from "axios";
import clientConfig from "../utils/client.config";

export const clearUser = createAction("CLEAR_USER");

export const registerRequest = createAsyncThunk(
  "REGISTER_REQUEST",
  async (input) => {
    try {
      const res = await axios.post(
        `http://localhost:${clientConfig.port}/api/register`,
        input
      );
      const user = res.data;
      return user;
    } catch (e) {
      return console.log(e);
    }
  }
);

export const fetchMe = createAsyncThunk("FETCH_ME", async () => {
  const loginToken = JSON.parse(localStorage.getItem("token"));
  try {
    const r = await axios.get(`http://localhost:${clientConfig.port}/api/me`, {
      headers: { Authorization: `Bearer ${loginToken}` },
    });
    return r.data;
  } catch (err) {
    return console.log(err);
  }
});

export const loginRequest = createAsyncThunk("LOGIN_REQUEST", async (input) => {
  try {
    const res = await axios.post(
      `http://localhost:${clientConfig.port}/api/login`,
      input
    );
    localStorage.setItem("token", JSON.stringify(res.data.token));
  } catch (err) {
    return console.log(err);
  }
});

export const sendToken = createAsyncThunk("LOGIN", async (token) => {
  try {
    const res = await axios.post(
      `http://localhost:/${clientConfig.port}/me`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (err) {
    return console.log(err);
  }
});

export const userReducer = createReducer([], {
  [fetchMe.fulfilled]: (state, action) => action.payload,
  [loginRequest.fulfilled]: (state, action) => action.payload,
  [registerRequest.fulfilled]: (state, action) => action.payload,
  [sendToken.fulfilled]: (state, action) => action.payload,
  [clearUser]: (state, action) => {
    return {};
  },
});
