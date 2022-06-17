export type PostType = {
  id: string;
  image?: string;
  title: string;
  text: string;
  date: string;
  likeStatus: null | string;
  save: boolean;
};

export type PostsListType = Array<PostType>;
