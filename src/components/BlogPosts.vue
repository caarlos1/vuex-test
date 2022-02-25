<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id" class="post">
      <img :src="post.cover" :alt="post.title" />
      <h2>{{ post.id }} - {{ post.title }}</h2>
      <div>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
import useBlog from "@/hooks/useBlog";
export default {
  props: {
    page: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      posts: [],
    };
  },

  async mounted() {
    const { getPosts } = useBlog();
    this.posts = await getPosts(this.page);
  },

  watch: {
    async page(newPage) {
      const { getPosts } = useBlog();
      this.posts = await getPosts(newPage);
    },
  },
};
</script>

<style lang="scss">
.posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;

  .post {
    background: rgb(243, 243, 243);
    padding: 15px;
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
    border-radius: 20px;
  }

  img {
    max-width: 100%;
  }
}
</style>
