<template>
    <b-modal id="modal-1" hide-footer title="Add Task">
        <template>
            <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                        <b-form-input id="input-1" v-model="form.taskName" placeholder="Enter the task title"
                            required></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.description"
                            placeholder="Enter the task description"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Category:" label-for="input-3">
                        <b-form-select id="input-3" v-model="form.category" :options="categories" required></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-group-4" label="Workload (in hours):" label-for="input-4">
                        <b-form-input id="input-4" v-model="form.workload" placeholder="Enter the workload, in hours"
                            required></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Save Task</b-button>
                </b-form>
            </div>
        </template>
    </b-modal>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        form: {
          category: null,
          priority: -1,
          status: 'TO_DO'
        },
        categories: [{ text: 'Select One', value: null }, 'Frontend', 'Backend', 'Database', 'UX'],
        show: true
      }
    },
    methods: {
      onSubmit() {
        //event.preventDefault()
        axios.post("http://localhost:3000/task/create", this.form)
            .then(response => {
              console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.taskName = ''
        this.form.description = ''
        this.form.category = ''
        this.form.workload = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>

.form-group {
  margin-bottom: 20px;
}


</style>
