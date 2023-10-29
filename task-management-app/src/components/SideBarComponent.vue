<template>
  <div>
    <b-sidebar id="sidebar-1" title="Sidebar" no-header visible shadow>
      <div class="pt-4 px-3 py-2">
        <img src="../assets/GestTarefas.png" width="250px">
        <div class="pt-3">
          <b-button block variant="outline-secondary" class="w-100">Kanban</b-button>
        </div>
        <div class="pt-3">
          <b-button  v-b-modal.modal-1 block variant="outline-secondary" class="w-100">Add Task</b-button>

          <b-modal id="modal-1" title="Add Task">
            <template>
              <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="form.taskName"
                      placeholder="Enter the task title"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.description"
                      placeholder="Enter the task description"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-3" label="Category:" label-for="input-3">
                    <b-form-select
                      id="input-3"
                      v-model="form.category"
                      :options="categories"
                      required
                    ></b-form-select>
                  </b-form-group>



                  <b-form-group id="input-group-4" label="Workload (in hours):" label-for="input-4">
                    <b-form-input
                      id="input-4"
                      v-model="form.workload"
                      placeholder="Enter the workload, in hours"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Submit</b-button> 
                </b-form>
              </div>
            </template>
          </b-modal>
        </div>
        <div class="pt-3">
          <b-button block variant="outline-secondary" class="w-100">Manage Categories</b-button>
        </div>
        <div class="pt-3">
          <b-button block variant="outline-secondary" class="w-100">Add Colaborator</b-button>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          category: null,
          checked: []
        },
        categories: [{ text: 'Select One', value: null }, 'Frontend', 'Backend', 'Database', 'UX'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
