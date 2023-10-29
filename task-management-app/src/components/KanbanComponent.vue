<template>
  <div class="container mt-2 mb-3">
    <div class="row">
      <div class="col mx-2 px-2 py-3 alert alert-primary border rounded">
          <h3>To do</h3>
          <draggable class="draggable-list" :list="tasks.todo" group="tasks">
            <div v-for="(todo, i) in tasks.todo" :key="i">
              <div class="bg-white mt-3 p-2 shadow border rounded">
                <div class="position-relative">
                  <p>{{ todo.taskName }}</p>
                  <div class="container">
                    <div class="row justify-content-end">
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
                <p>{{ inProgress.taskName }}</p>
                <div class="container">
                    <div class="row justify-content-end">
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
                <p>{{ done.taskName }}</p>
                <div class="container">
                    <div class="row justify-content-end">
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
import axios from 'axios'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      tasks: {
        todo: [],
        inProgress: [],
        done: []
      },
    };
  },
  created: function(){
    this.getAllTasks()
  },
  methods:{
    getAllTasks: function(){
      axios.get("http://localhost:3000/task/getall")
            .then(response => {
              console.log(response);
              var tasks = response.data;
              this.setTasksByStatus(tasks);
            })
            .catch((error) => {
                console.log(error)
            })
    },
    setTasksByStatus(tasks){
      var toDoTasks = tasks.filter( task => task.status == "TO_DO");
      var inProgressTasks = tasks.filter( task => task.status == "IN_PROGRESS");
      var doneTasks = tasks.filter( task => task.status == "DONE");
      this.tasks.todo = toDoTasks;
      this.tasks.inProgress = inProgressTasks;
      this.tasks.done = doneTasks;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: bold;
}
.col {
  height: 95vh;
}
</style>
