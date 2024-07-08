<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      api_url: "http://127.0.0.1:8000",
      all_projects_endpoint: "/api/projects",
      projects: null,
      pagination_data: null,
      resp_success: false,
    };
  },
  mounted() {
    const url = this.api_url + this.all_projects_endpoint;
    axios
      .get(url)
      .then((resp) => {
        //console.log(resp.data);
        this.resp_success = resp.data.success;
        console.log(this.resp_success);
        this.projects = resp.data.results.data;
        console.log(this.projects);
        this.pagination_data = resp.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<template>
  <section class="projects py-5" v-if="resp_success">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3">
        <div class="col" v-for="project in projects">
          <div class="card">
            <img :src="api_url + '/storage/' + project.cover_image" alt="" />
            <div class="card-body">
              <h3>{{ project.name }}</h3>
              {{ project.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="unsuccessful_call" v-else>there are no projects</section>
</template>

<style></style>
