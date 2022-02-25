import api from "./api";

export const getPostsAPI = async () => {
  const [posts, photos] = await Promise.all([
    api.get("https://jsonplaceholder.typicode.com/posts"),
    api.get("https://jsonplaceholder.typicode.com/photos"),
  ]);

  const { data: postList } = posts;
  const { data: photoList } = photos;

  return postList.map((post, i) => ({
    ...post,
    cover: photoList[i].url,
  }));
};
