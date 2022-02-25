import { getPostsAPI } from "@/services/posts";
import store from "@/store";

const useBlog = () => {
  return {
    getPosts: async (page = 1) => {
      let posts = store.getters.paginate

      if (posts.length == 0) {
        posts = await getPostsAPI();
        store.dispatch("storePosts", posts);
        if(page > 1) store.dispatch("changePage", page);
        posts = store.getters.paginate;
      }

      if(page != 1) {
        store.dispatch("changePage", page);
        posts = store.getters.paginate;
      }

      return posts;
    },
  };
};

export default useBlog;
