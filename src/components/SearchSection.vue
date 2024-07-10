<script>
import { state } from "../state.js";

export default {
  name: "SearchSection",
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <div class="px-5 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Front and Back Project</h1>
      <p class="col-md-8 fs-4">DB->Backend->Api->axios->Frontend</p>

      <form @submit.prevent="state.search()">
        <div class="input-group mb-3">
          <input
            type="search"
            class="form-control"
            placeholder="search..."
            v-model="state.search_text"
          />
          <button class="btn btn-outline-secondary" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
