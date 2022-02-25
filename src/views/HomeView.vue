<template>
  <div class="home">
    <h1>Miserable Store Blog Posts :(</h1>
    <div class="blog-area">
      <BlogPosts :page="page" />
    </div>
    <button @click="addPage" class="button">Abrir mais posts!</button>
  </div>
</template>

<script>
import BlogPosts from "@/components/BlogPosts.vue";

export default {
  name: "HomeView",

  components: {
    BlogPosts,
  },

  data() {
    return {
      page: 1,
    };
  },

  methods: {
    addPage() {
      this.page = this.page + 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-area {
  padding: 30px
}

.button {
  margin: 30px;
  padding: 10px 30px;
  background: rgba(69, 97, 255, 0.933);
  border: 1px solid rgba(40, 72, 255, 0.933);
  font-size: 20px;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
