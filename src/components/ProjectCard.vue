<script>
import { state } from "../state.js";
export default {
  name: "ProjectCard",
  data() {
    return {
      state,
    };
  },
  props: {
    project: Object,
  },
};
</script>
<template>
  <div class="card">
    <img :src="state.api_url + '/storage/' + project.cover_image" alt="" />
    <div class="card-body">
      <h3>{{ project.name }}</h3>
      {{ project.description }}
    </div>
  </div>
</template>
<style></style>
