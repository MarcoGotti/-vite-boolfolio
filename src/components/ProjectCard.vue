<script>
import { state } from "../state.js";
import Modal from "./Modal.vue";
export default {
  name: "ProjectCard",
  components: {
    Modal,
  },
  data() {
    return {
      state,
    };
  },
  props: {
    project: Object,
  },

  methods: {
    //qui uso call ad endpoint Api/ProjectController.show()
    //add @click="show()" alla card
    /* show() {
      const url =
        state.api_url + state.all_projects_endpoint + `/${this.project.id}`;
      console.log(url);
    }, */
  },
};
</script>
<template>
  <div class="card">
    <!-- @click="show()" -->
    <img :src="state.api_url + '/storage/' + project.cover_image" alt="" />
    <div class="card-body">
      <h3>{{ project.name }}</h3>
      {{ project.description }}
    </div>
    <div class="card-footer">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-dark btn-sm"
        data-bs-toggle="modal"
        :data-bs-target="`#post-${project.id}`"
      >
        View
      </button>
      <Modal :project="project"></Modal>
      <!-- Modal -->
    </div>
  </div>
</template>
<style></style>
