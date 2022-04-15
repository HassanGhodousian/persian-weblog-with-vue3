<template>
  <div class="add container">
    <form @submit.passive="doAdd">
      <div class="mb-3">
        <label for="title-text" class="form-label">موضوع:</label>
        <input
          type="email"
          class="form-control"
          id="title-text"
          v-model="article.title"
        />
      </div>
      <div class="mb-3">
        <label for="description-text" class="form-label">شرح:</label>
        <textarea
          class="form-control"
          id="description-text"
          rows="3"
          v-model="article.description"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="content-text" class="form-label">محتوا:</label>
        <textarea
          class="form-control"
          id="content-text"
          rows="9"
          v-model="article.content"
        ></textarea>
      </div>
      <button class="btn btn-success" type="submit ">ثبت</button>
    </form>
  </div>
</template>

<script>
// import { reactive } from "@vue/reactivity";
export default {
  name: "addView",

  components: {},
  setup() {
    let articlse = localStorage.getItem("article");
    articlse = JSON.parse(articlse);

    function doAdd() {
      console.log("article");
    }
    return { articlse, doAdd };
  },
};
</script>
