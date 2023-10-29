<template>
  <div class="container mt-2 mb-3">
    <div class="row">
      <div class="col mx-2 px-2 py-3 alert alert-primary border rounded">
          <h3>To do</h3>
          <draggable class="draggable-list" :list="tasks.todo" group="tasks">
            <div v-for="(todo, i) in tasks.todo" :key="i">
              <div class="bg-white mt-3 p-2 shadow border rounded">
                <div class="position-relative">
                  <p>{{ todo }}</p>
                  <div class="container">
                    <div class="row justify-content-end">
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"><b-icon style="cursor: pointer;" icon="pencil-fill" font-scale="0.7"></b-icon></div>
                      <div class="col-sm"><b-icon style="cursor: pointer;" icon="trash" font-scale="0.7"></b-icon></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
      </div>
      <div class="col mx-2 px-2 py-3 alert alert-warning border rounded">
        <h3>In Progress</h3>
        <draggable class="draggable-list" :list="tasks.inProgress" group="tasks">
            <div v-for="(inProgress, i) in tasks.inProgress" :key="i">
              <div class="bg-white mt-3 p-2 shadow border rounded">
                <p>{{ inProgress }}</p>
                <div class="container">
                    <div class="row justify-content-end">
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"><b-icon style="cursor: pointer;" icon="pencil-fill" font-scale="0.7"></b-icon></div>
                      <div class="col-sm"><b-icon style="cursor: pointer;" icon="trash" font-scale="0.7"></b-icon></div>
                    </div>
                  </div>
              </div>
            </div>
          </draggable>
      </div>
      <div class="col mx-2 px-2 py-3 alert alert-success border rounded">
        <h3>Done</h3>
        <draggable class="draggable-list" :list="tasks.done" group="tasks">
            <div v-for="(done, i) in tasks.done" :key="i">
              <div class="bg-white mt-3 p-2 shadow border rounded">
                <p>{{ done }}</p>
                <div class="container">
                    <div class="row justify-content-end">
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"></div>
                      <div class="col-sm"><b-icon style="cursor: pointer;" icon="pencil-fill" font-scale="0.7"></b-icon></div>
                      <div class="col-sm"><b-icon style="cursor: pointer;" icon="trash" font-scale="0.7"></b-icon></div>
                    </div>
                  </div>
              </div>
            </div>
          </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      tasks: {
        todo: ["Migrate codebase to TypeScript"],
        inProgress: ["Dockerize App", "Add vue.draggable to project"],
        done: ["Implement Web3 Features", "Bump to vite.js"]
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: bold;
}
.col {
  height: 90vh;
}
</style>
