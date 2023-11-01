<template>
  <b-modal id="modal-edit" hide-footer title="Edit Task">
    <div>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Title:" label-for="input-1">
          <b-form-input id="input-1" v-model="task.taskName" placeholder="Enter the task title" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Description:" label-for="input-2">
          <b-form-input id="input-2" v-model="task.description" placeholder="Enter the task description"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Category:" label-for="input-3">
          <b-form-select id="input-3" v-model="task.category" :options="categories" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label="Workload (in hours):" label-for="input-4">
          <b-form-input id="input-4" v-model="task.workload" placeholder="Enter the workload, in hours" required></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Save Task</b-button>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
// import axios from 'axios'
import {EventBus} from "@/EventBus";
import axios from "axios";

export default {
  data() {
    return {
      categories: [{ text: 'Select One', value: null }, 'Frontend', 'Backend', 'Database', 'UX'],
      show: true,
      task: {},
    };
  },
  methods: {
    onSubmit() {
      console.log("Submit do formulário de edição");
      console.log("task");
      console.log(this.task);
      axios.post("http://localhost:3000/task/edit", this.task)
          .then(response => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          })
    },
  },
  created() {
    EventBus.$on('edit-task', task => {
      this.task = task;
    });
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}
</style>