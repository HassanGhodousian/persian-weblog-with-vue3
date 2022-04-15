<template>
  <div class="home">
    <h1 class="text-center mb-5">صفحه اصلی</h1>
    <article v-for="article in articlse" :key="article.index">
      <h3>
        <router-link :to="`/article/${article.slug}`"
          >{{ article.title }}
        </router-link>
      </h3>
      <div>{{ article.discription }}</div>
      <router-link :to="`/article/${article.slug}`"> بیشتر +</router-link>

      <hr />
    </article>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  components: {},
  setup() {
    let articlse = localStorage.getItem("article");
    articlse = JSON.parse(articlse);
    return { articlse };
  },
};
</script>
