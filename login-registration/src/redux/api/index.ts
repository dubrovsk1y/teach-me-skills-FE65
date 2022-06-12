import { create } from "apisauce";

type UserType = {
  username: string;
  password: string;
  email: string;
};

const API = create({
  baseURL: "https://studapi.teachmeskills.by/",
});

const getAllPostsApi = ({ search = "", limit = 10, offset = 0 }) => {
  return API.get("/blog/posts/", { search, limit, offset });
};

const getMyPostsApi = (token: any) => {
  return API.get(
    "/blog/posts/my_posts/",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const createPostApi = (token: any, postData: any) => {
  return API.post("/blog/posts/", postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getSelectedPostApi = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};

const registerUserApi = (userData: UserType) => {
  return API.post("/auth/users/", userData);
};

const activateUserApi = (uuid: string, token: string) => {
  return API.post("/auth/users/activation/", { uid: uuid, token });
};

const loginUserApi = (data: any) => {
  return API.post("/auth/jwt/create", data);
};

const getUserInfoApi = (token: any) => {
  return API.get(
    "/auth/users/me/",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const verifyToken = (token: string) => {
  return API.post("/auth/jwt/verify/", { token });
};

const getNewAccessToken = (refresh: string) => {
  return API.post("auth/jwt/refresh/", { refresh });
};

export {
  getAllPostsApi,
  getMyPostsApi,
  getSelectedPostApi,
  getUserInfoApi,
  registerUserApi,
  activateUserApi,
  loginUserApi,
  verifyToken,
  getNewAccessToken,
  createPostApi,
};
