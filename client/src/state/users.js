import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";

import axios from "axios";
import config from "../utils/config";


export const clearUser = createAction("CLEAR_USER");

export const registerRequest = createAsyncThunk(
  "REGISTER_REQUEST",
  async ({ user }) => {
    try {
      await axios.post(
        `http://localhost:${config.port}/api/user/register`,
        user
      );
    } catch (err) {
      console.log(err);
    }
  }
);

export const loginRequest = createAsyncThunk(
  "LOGIN_REQUEST",
  async ({ user }) => {
    try {
      const res = await axios.post(
        `http://localhost:${config.port}/api/user/login`,
        user
      );
      localStorage.setItem("token", JSON.stringify(res.data.token));
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchMe = createAsyncThunk("FETCH_ME", async () => {
  const loginToken = JSON.parse(localStorage.getItem("token"));
  try {
    const res = await axios.get(
      `http://localhost:${config.port}/api/me`,
      {
        headers: { Authorization: `Bearer ${loginToken}` },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const sendToken = createAsyncThunk("LOGIN", async (token) => {
  try {
    const res = await axios.post(
      `http://localhost:/${config.port}/api/me`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (err) {
    return console.log(err);
  }
});

const initialState = {
  user: [],
  register: [],
};

const userReducer = createReducer(initialState, {
  [fetchMe.fulfilled]: (state, action) => {
    return { ...state, user: action.payload };
  },
  [loginRequest.fulfilled]: (state, action) => {
    return { ...state, user: action.payload };
  },
  [registerRequest.fulfilled]: (state, action) => {
    return { ...state, register: action.payload };
  },
  [sendToken.fulfilled]: (state, action) => {
    return { ...state, user: action.payload };
  },
  [clearUser]: (state, action) => {
    return { ...state, user: {} };
  },
});

export default userReducer;
