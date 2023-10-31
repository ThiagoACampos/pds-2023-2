<template>
  <div>
    <b-sidebar id="sidebar-1" title="Sidebar" no-header visible shadow>
      <div class="pt-4 px-3 py-2">
        <img src="../assets/GestTarefas.png" width="250px">
        <div class="pt-3">
          <b-button @click="changeComponentNotCalendar" block variant="outline-secondary" class="w-100">Kanban</b-button>
        </div>
        <div class="pt-3">
          <b-button @click="changeComponentNotCalendar" v-b-modal.modal-1 block variant="outline-secondary" class="w-100">Add Task</b-button>
        </div>
        <div class="pt-3">
          <b-button @click="changeComponentNotCalendar" v-b-modal.modal-2 block variant="outline-secondary" class="w-100">Add Colaborator</b-button>
        </div>
        <div class="pt-3">
          <b-button @click="changeComponentCalendar" block variant="outline-secondary" class="w-100">Calendar View</b-button>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { EventBus } from '../EventBus';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    changeComponentCalendar() {
      EventBus.$emit('change-component', 'Calendar');
    },
    changeComponentNotCalendar() {
      EventBus.$emit('change-component', 'notCalendar');
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
