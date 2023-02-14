import { RootState } from '../store';

export const selectCurrentAuthToken = (state: RootState): null | string =>
  state.user.token;

export const selectCurrentUsername = (state: RootState): null | string =>
  state.user.username;
