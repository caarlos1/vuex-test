export const blog = {
  state: () => ({
    posts: [],
    page: 1,
  }),
  getters: {
    allPosts: (state) => {
      return state.posts;
    },
    paginate: (state) => {
      return [...state.posts].slice(0, state.page * 8);
    },
  },
  mutations: {
    updatePosts(state, payload) {
      state.posts = [...payload];
    },
    updatePage(state, payload) {
      state.page = payload;
    },
  },
  actions: {
    storePosts(context, p) {
      context.commit("updatePosts", p);
    },
    changePage(context, p){
      context.commit("updatePage", p);
    }
  },
};

export default blog;
