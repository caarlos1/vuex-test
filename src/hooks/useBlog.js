import { getPostsAPI } from "@/services/posts";
import store from "@/store";
import dayjs from "dayjs";

const useBlog = () => {
  return {
    getPosts: async (page = 1) => {
      let posts = store.getters.paginate;
      let lastUpdate = store.state.blog.lastUpdate;

      if (posts.length == 0 || dayjs().minute() - lastUpdate >= 1) {
        posts = await getPostsAPI();
        store.dispatch("storePosts", posts);
        posts = store.getters.paginate;
      }

      if (page != 1) {
        store.dispatch("changePage", page);
        posts = store.getters.paginate;
      }

      return posts;
    },
  };
};

export default useBlog;
