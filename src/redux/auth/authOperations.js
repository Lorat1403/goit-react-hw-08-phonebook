import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = 'https://connections-api.goit.global/';
const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    toast.success(`Welcome, ${data.user.name}!`);
    return data;
  } catch (error) {
    toast.error(`Email adress or password is incorrect. Please, try again.`);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    toast.success(`Welcome, ${data.user.name}!`);
    return data;
  } catch (error) {
    toast.error(`Email adress or password is incorrect. Please, try again.`);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    toast.success(`You are logged out now.`);
  } catch (error) {
    toast.error(`${error.message}. Please, try again.`);
  }
});

const fetchUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    toast.success(`Welcome back, ${data.name}!`);
    return data;
  } catch (error) {
    toast.error(`${error.message}. Please, try again.`);
  }
});

const operations = {
  register,
  logIn,
  logOut,
  fetchUser,
};

export default operations;
