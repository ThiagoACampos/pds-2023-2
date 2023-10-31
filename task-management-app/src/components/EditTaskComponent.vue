<template>
  <b-modal id="modal-edit" hide-footer title="Edit Task">
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Title:" label-for="input-1">
          <b-form-input id="input-1" v-model="this.task.taskName" placeholder="Enter the task title" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Description:" label-for="input-2">
          <b-form-input id="input-2" v-model="this.task.description" placeholder="Enter the task description"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Category:" label-for="input-3">
          <b-form-select id="input-3" v-model="this.task.category" :options="categories" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label="Workload (in hours):" label-for="input-4">
          <b-form-input id="input-4" v-model="this.task.workload" placeholder="Enter the workload, in hours" required></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Save Task</b-button>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
// import axios from 'axios'
import {EventBus} from "@/EventBus";

export default {
  data() {
    return {
      form: {
        taskName: '',
        description: '',
        category: '',
        workload: '',
      },
      categories: [{ text: 'Select One', value: null }, 'Frontend', 'Backend', 'Database', 'UX'],
      show: true,
      task: {}
    }
  },
  watch: {
    taskData: {
      immediate: true,
      handler(newTaskData) {
        // Update form data when taskData prop changes
        this.form.taskName = newTaskData.taskName || '';
        this.form.description = newTaskData.description || '';
        this.form.category = newTaskData.category || '';
        this.form.workload = newTaskData.workload || '';
      }
    }
  },
  methods: {
    onSubmit() {
      console.log("Submit do formulário de edição");
      // axios.
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.taskName = '';
      this.form.description = '';
      this.form.category = '';
      this.form.workload = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  created() {
    EventBus.$on('edit-task', task => {
      this.task = task;
      console.log("Task chegou aqui");
      console.log(task);
    });
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}
</style>