import { create } from "apisauce";

type UserType = {
  username: string;
  password: string;
  email: string;
};

const API = create({
  baseURL: "https://studapi.teachmeskills.by/",
});

const getPostsApi = () => {
  return API.get("/blog/posts/");
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

export { getPostsApi, getSelectedPostApi, getUserInfoApi, registerUserApi, activateUserApi, loginUserApi };
