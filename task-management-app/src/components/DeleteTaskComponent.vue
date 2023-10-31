<template>
    <b-modal id="modal-delete" title="Delete Task" @ok="deleteTask">
        <p class="my-4">Are you sure you want to delete this task ?</p>
    </b-modal>
</template>

<script>
  import { EventBus } from '../EventBus';
  import axios from 'axios'

  export default {
    data() {
      return {
        task: {}
      }
    },
    methods: {
        deleteTask() {
            // Prevent modal from closing
            //bvModalEvent.preventDefault()
            axios.post("http://localhost:3000/task/delete ", this.task)
            .then(response => {
              console.log(response);
              EventBus.$emit('rerender-kanban');
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    created() {
        EventBus.$on('delete-task', task => {
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
