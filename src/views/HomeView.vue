<template>
  <div class="home">
    <h1>Store Blog :)</h1>
    <div class="blog-area">
      <BlogPosts :page="page" />
    </div>
    <button @click="addPage" class="button">More posts!</button>
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
  padding: 10px 50px;
  background: rgba(17, 136, 248, 0.933);
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  font-size: 20px;
  border: 3px solid rgba(0, 130, 251, 0.933);
  
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  transition: all 100ms ease-in-out;;
  
  &:hover{
    background: rgba(0, 130, 251, 0.933);
    border-color: rgba(17, 136, 248, 0.933);
    transform: scale(1.05);
  }
}
</style>
