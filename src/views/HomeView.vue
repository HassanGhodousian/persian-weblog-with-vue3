<template>
  <div class="home">
    <h1 class="text-center mb-5">صفحه اصلی</h1>
    <article v-for="article in articlse" :key="article.index">
      <h3>
        <!-- <router-link :to="`/article/${article.slug}`"
          >{{ article.title }}
        </router-link> -->
        <a href="">
          {{ article.title }}
        </a>
      </h3>
      <div>{{ article.discription }}</div>
      <!-- <router-link :to="`/article/${article.slug}`"> بیشتر +</router-link> -->
      <a href="">بیشتر +</a>
      <hr />
    </article>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",

  components: {},
  setup() {
    let articlse = localStorage.getItem("articlse");
    articlse = JSON.parse(articlse);
    console.log(articlse);
    return { articlse };
  },
};
</script>
