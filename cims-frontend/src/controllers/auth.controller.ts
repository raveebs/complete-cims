import client from "./axios-instance";

export const login = async (email: string, password: string) => {
  const url = `auth`;
  await client.post(url, {
    email,
    password,
  });
};

export const logout = async () => {
  const url = `auth`;
  await client.delete(url);
};
