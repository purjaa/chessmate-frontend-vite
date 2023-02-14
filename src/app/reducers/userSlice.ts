import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import userService from '../services/users';

export interface UserState {
  username: string | null,
	token: string | null,
}

const initialState: UserState = {
  username: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.username = null;
      state.token = null;
    }
  },
});

export const { login, logout } = userSlice.actions;

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    const response = await userService.login(email, password);
    if (response.result === true) {
      dispatch(login(response));
    }
    return response.result;
  };
};

export default userSlice.reducer;