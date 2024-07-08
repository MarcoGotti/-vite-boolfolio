<script>
import { state } from "../src/state.js";
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  name: "App",
  components: {
    ProjectCard,
  },
  data() {
    return {
      state,
    };
  },
  mounted() {
    const url = state.api_url + state.all_projects_endpoint;
    state.fetchData(url);
  },
};
</script>

<template>
  <section class="projects py-5" v-if="state.resp_success">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3">
        <div class="col" v-for="project in state.projects">
          <ProjectCard :project="project"></ProjectCard>

          <!-- <div class="card">
            <img :src="api_url + '/storage/' + project.cover_image" alt="" />
            <div class="card-body">
              <h3>{{ project.name }}</h3>
              {{ project.description }}
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>

  <section class="unsuccessful_call" v-else>there are no projects</section>
</template>

<style></style>
