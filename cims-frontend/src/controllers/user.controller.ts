import client from "./axios-instance";
import { plainToInstance } from "class-transformer";
import User from "../models/user.model";

export const findAll = async (status?: string) => {
  const url = status ? `users?status=${status}` : `status`;
  const response = await client.get(url);
  const users: Array<User> = response.data.map((user: any) =>
    plainToInstance(User, user)
  );
  return users;
};

export const getCurrentUser = async () => {
  const url = `users/me`;
  const response = await client.get(url);
  const user = plainToInstance(User, response.data);
  return user;
};

export const addUser = async (fname: string, lname: string, email: string) => {
  const url = `users`;
  const response = await client.post(url, {
    fname,
    lname,
    email,
    roles: [],
  });
  const user = plainToInstance(User, response.data);
  return user;
};

export const disableUser = async (id: string) => {
  const url = `users/${id}/status`;
  const response = await client.patch(url, {
    status: "in_active",
  });
  const user = plainToInstance(User, response.data);
  return user;
};

export const enableUser = async (id: string) => {
  const url = `users/${id}/status`;
  const response = await client.patch(url, {
    status: "active",
  });
  const user = plainToInstance(User, response.data);
  return user;
};

export const deleteUser = async (id: string) => {
  const url = `users/${id}`;
  await client.delete(url);
};
