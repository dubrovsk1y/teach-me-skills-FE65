import { create } from "apisauce";

type UserType = {
  username: string;
  password: string;
  email: string;
};

const API = create({
  baseURL: "https://studapi.teachmeskills.by/",
});

const getPosts = () => {
  return API.get("/blog/posts/");
};

const getSelectedPost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};

const registerUser = (userData: UserType) => {
  return API.post("/auth/users/", userData);
};

const userActivate = (uuid: any, token: any) => {
  return API.post("/auth/users/activation/", { uid: uuid, token });
};

export { getPosts, getSelectedPost, registerUser, userActivate };
