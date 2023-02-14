import axios from 'axios';

const USERS_PATH = '/Users';

interface LoginUserResponse {
  result: boolean,
  token: string,
  username: string
}

const login = async (username: string, password: string) => {
  const { data } = await axios.post<LoginUserResponse>(
    `${import.meta.env.VITE_API_URL_BASE}${USERS_PATH}/authenticate`,
    { username, password }
  );

  return data;
};

export default { login };