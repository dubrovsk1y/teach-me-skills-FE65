import { create } from "apisauce";

const API = create({
  baseURL: "https://studapi.teachmeskills.by/",
});

const getPosts = () => {
  return API.get("/blog/posts/");
};

const getSelectedPost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};

export { getPosts, getSelectedPost };
