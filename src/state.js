import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  api_url: "http://127.0.0.1:8000",
  all_projects_endpoint: "/api/projects",
  projects: null,
  pagination_data: null,
  resp_success: false,

  fetchData(url) {
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
});
