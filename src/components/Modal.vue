<script>
import { state } from "../state.js";
export default {
  name: "Modal",
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
  <div
    class="modal fade"
    :id="`post-${project.id}`"
    tabindex="-1"
    role="dialog"
    :aria-labelledby="`modal-project-${project.id}`"
  >
    <div class="modal-dialog modal-sm modal-fullscreen" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`modal-project-${project.id}`">
            {{ project.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex gap-3 justify-content-between">
          <div>
            <img
              :src="state.api_url + '/storage/' + project.cover_image"
              alt=""
            />
          </div>
          <div>
            {{ project.description }}
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>
<style></style>
