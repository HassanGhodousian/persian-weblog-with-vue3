<template>
  <div class="add container">
    <form @submit.prevent="doAdd">
      <div class="mb-3">
        <label for="title-text" class="form-label">موضوع:</label>
        <input
          type="text"
          class="form-control"
          id="title-text"
          v-model="title"
        />
      </div>
      <div class="mb-3">
        <label for="description-text" class="form-label">شرح:</label>
        <textarea
          class="form-control"
          id="description-text"
          rows="3"
          v-model="description"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="content-text" class="form-label">محتوا:</label>
        <textarea
          class="form-control"
          id="content-text"
          rows="9"
          v-model="content"
        ></textarea>
      </div>
      <button class="btn btn-success" type="submit">ثبت</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addView",
  components: {},
  data() {
    let articles = [];
    articles = localStorage.getItem("articlse");
    articles = JSON.parse(articles);
    return {
      articles: articles,
      title: "",
      description: "",
      content: "",
      slug: "",
    };
  },
  methods: {
    doAdd() {
      let article = {
        title: this.title,
        description: this.description,
        content: this.content,
        slug: this.title.replaceAll(" ", "-").toLowerCase(),
      };
      console.log(typeof this.articles);
      this.articles.push(article);
      console.log(this.articles);
      let databace = JSON.stringify(this.articles);
      localStorage.setItem("articlse", databace);
      // this.$router.push(`article/${article.slug}`);
    },
  },
};
</script>
