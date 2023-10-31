<template>
  <div class="container mt-2 mb-3">
    <div class="row">
      <div class="col mx-2 px-2 py-3 alert alert-primary border rounded">
          <h3>To do</h3>
          <draggable class="draggable-list" :list="tasks.todo" group="tasks" @change="changedTodo">
            <div v-for="(todo, i) in tasks.todo" :key="i">
              <div class="bg-white mt-3 p-2 shadow border rounded">
                <div class="position-relative">
                  <p>{{ todo.taskName }}</p>
                  <div class="container">
                    <div class="row justify-content-end">
                      <div class="col-sm"><b-icon @click="editTaskTodo(i)" v-b-modal.modal-edit style="cursor: pointer;" icon="pencil-fill" font-scale="0.7"></b-icon></div>
                      <div class="col-sm"><b-icon @click="deleteTaskToDo(i)" v-b-modal.modal-delete style="cursor: pointer;" icon="trash" font-scale="0.7"></b-icon></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
      </div>
      <div class="col mx-2 px-2 py-3 alert alert-warning border rounded">
        <h3>In Progress</h3>
        <draggable class="draggable-list" :list="tasks.inProgress" group="tasks" @change="changedInProgress">
            <div v-for="(inProgress, i) in tasks.inProgress" :key="i">
              <div class="bg-white mt-3 p-2 shadow border rounded">
                <p>{{ inProgress.taskName }}</p>
                <div class="container">
                    <div class="row justify-content-end">
                      <div class="col-sm"><b-icon style="cursor: pointer;" icon="pencil-fill" font-scale="0.7" ></b-icon></div>
                      <div class="col-sm"><b-icon @click="deleteTaskInProgress(i)" v-b-modal.modal-delete style="cursor: pointer;" icon="trash" font-scale="0.7"></b-icon></div>
                    </div>
                  </div>
              </div>
            </div>
          </draggable>
      </div>
      <div class="col mx-2 px-2 py-3 alert alert-success border rounded">
        <h3>Done</h3>
        <draggable class="draggable-list" :list="tasks.done" group="tasks" @change="changedDone">
            <div v-for="(done, i) in tasks.done" :key="i">
              <div class="bg-white mt-3 p-2 shadow border rounded">
                <p>{{ done.taskName }}</p>
                <div class="container">
                    <div class="row justify-content-end">
                      <div class="col-sm"><b-icon style="cursor: pointer;" icon="pencil-fill" font-scale="0.7"></b-icon></div>
                      <div class="col-sm"><b-icon @click="deleteTaskDone(i)" v-b-modal.modal-delete style="cursor: pointer;" icon="trash" font-scale="0.7"></b-icon></div>
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
import { EventBus } from '../EventBus';

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
    this.getAllTasks();
    EventBus.$on('rerender-kanban', () => {
      this.getAllTasks();
    });
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
    updateTask(task){
      axios.post("http://localhost:3000/task/edit", task)
            .then(response => {
              console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
    },
    editTaskTodo(index) {
      console.log("EditTaskTodo ativado")
      EventBus.$emit('edit-task', this.tasks.todo[index]);
    },
    setTasksByStatus(tasks){
      var toDoTasks = tasks.filter( task => task.status == "TO_DO");
      var inProgressTasks = tasks.filter( task => task.status == "IN_PROGRESS");
      var doneTasks = tasks.filter( task => task.status == "DONE");
      this.tasks.todo = toDoTasks;
      this.tasks.inProgress = inProgressTasks;
      this.tasks.done = doneTasks;
    },
    changedTodo(event){
      if(event.added){
        var task = event.added.element;
        task.status = 'TO_DO';
        this.updateTask(task);
      }
    },
    changedInProgress(event){
      if(event.added){
        var task = event.added.element;
        task.status = 'IN_PROGRESS';
        this.updateTask(task);
      }
    },
    changedDone(event){
      if(event.added){
        var task = event.added.element;
        task.status = 'DONE';
        this.updateTask(task);
      }
    },
    deleteTaskToDo(index){
      EventBus.$emit('delete-task', this.tasks.todo[index]);
    },
    deleteTaskInProgress(index){
      EventBus.$emit('delete-task', this.tasks.inProgress[index]);
    },
    deleteTaskDone(index){
      EventBus.$emit('delete-task', this.tasks.done[index]);
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
