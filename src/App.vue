<script>
import { state } from "../src/state.js";
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";
import SearchSection from "./components/SearchSection.vue";

export default {
  name: "App",

  components: {
    ProjectCard,
    SearchSection,
  },

  data() {
    return {
      state,
    };
  },

  methods: {},

  mounted() {
    const url = state.api_url + state.all_projects_endpoint;
    console.log(url);
    state.fetchData(url);
  },
};
</script>

<template>
  <SearchSection></SearchSection>

  <section class="projects py-5" v-if="state.projects != ''">
    <!-- v-if="state.resp_success" -->
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3 mb-5">
        <div class="col" v-for="project in state.projects">
          <ProjectCard :project="project"></ProjectCard>
        </div>
      </div>

      <nav aria-label="Page navigation" v-if="state.pagination_data.length > 3">
        <ul class="pagination pagination-sm justify-content-center">
          <li
            class="page-item"
            :class="{ disabled: !link.url, active: link.active }"
            v-for="link in state.pagination_data"
          >
            <button
              type="button"
              class="page-link"
              @click="state.goTo(link.url)"
            >
              <span v-html="link.label"></span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </section>

  <section class="unsuccessful_call" v-else>
    <!-- "state.projects.length == 0" -->
    there are no projects
  </section>
</template>

<style></style>
