import axios from 'axios';

const USERS_PATH = '/Users';

interface RegisterUserResponse {
  result: boolean,
  username: string
}

interface LoginUserResponse extends RegisterUserResponse {
  token: string
}

const register = async (email: string, username: string, password: string) => {
  const { data } = await axios.post<RegisterUserResponse>(
    `${import.meta.env.VITE_API_URL_BASE}${USERS_PATH}/register`,
    { email, username, password }
  );

  return data;
};

const login = async (username: string, password: string) => {
  const { data } = await axios.post<LoginUserResponse>(
    `${import.meta.env.VITE_API_URL_BASE}${USERS_PATH}/authenticate`,
    { username, password }
  );

  return data;
};

export default { register, login };