export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Users = {
  id: number;
  name: string;
  username: string;
};

export type PostsState = {
  posts: Array<Post>;
  users: Array<Users>;
  searchValue: string;
};
