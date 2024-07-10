import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  api_url: "http://127.0.0.1:8000",
  all_projects_endpoint: "/api/projects",
  projects: null,
  pagination_data: "",
  resp_success: false,
  search_text: "",
  search_text_pag: "",

  fetchData(url) {
    axios
      .get(url)
      .then((resp) => {
        //console.log(resp.data);
        this.resp_success = resp.data.success;
        console.log(this.resp_success);
        this.projects = resp.data.results.data;
        console.log(this.projects);
        this.pagination_data = resp.data.results.links;
        console.log(this.pagination_data);
      })
      .catch((err) => {
        console.log(err.code);
      });
  },

  goTo(url) {
    console.log(url + `&search=${this.search_text}`);
    state.fetchData(url + `&search=${this.search_text}`);
    //state.fetchData(url); //così piu semplice ma paginazione va solo con all_projects. Non dopo la search()
  },

  search() {
    const url =
      this.api_url + this.all_projects_endpoint + `?search=${this.search_text}`;

    console.log(url);
    this.fetchData(url);
    this.search_text_pag = this.search_text;
    //this.search_text = ""; //non pulisco input dopo @click perchè così mi funziona la pagination anche dopo search
  },
});
