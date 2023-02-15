import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import userService from '../services/users';

export interface RegisteredUserState {
  username: string | null
}

export interface LoggedInUserState extends RegisteredUserState {
	token: string | null,
}

const initialState: LoggedInUserState = {
  username: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action:PayloadAction<RegisteredUserState>) => {
      state.username = action.payload.username;
    },
    login: (state, action: PayloadAction<LoggedInUserState>) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.username = null;
      state.token = null;
    }
  },
});

export const { register, login, logout } = userSlice.actions;

export const registerUser = ( email: string, username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    const response = await userService.register(email, username, password);
    if (response.result === true) {
      dispatch(register(response));
    }
    return response.result;
  };
};

export const loginUser = (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    const response = await userService.login(username, password);
    if (response.result === true) {
      dispatch(login(response));
    }
    return response.result;
  };
};

export default userSlice.reducer;