<template>
  <div id="app">
    <div class="grid">
      <SideBarComponent></SideBarComponent>

      <KanbanComponent v-if="currentComponent === 'notCalendar'"></KanbanComponent>
      <AddTaskComponent v-if="currentComponent === 'notCalendar'"></AddTaskComponent>
      <AddColaboratorComponent v-if="currentComponent === 'notCalendar'"></AddColaboratorComponent>
      <CalendarComponent v-if="currentComponent === 'Calendar'"></CalendarComponent>
      <EditTaskComponent></EditTaskComponent>
      <DeleteTaskComponent></DeleteTaskComponent>
    </div>
    
  </div>
</template>

<script>
import { EventBus } from './EventBus';
import SideBarComponent from './components/SideBarComponent.vue';
import KanbanComponent from './components/KanbanComponent.vue';
import AddTaskComponent from './components/AddTaskComponent.vue';
import AddColaboratorComponent from "@/components/AddColaboratorComponent.vue";
import CalendarComponent from "@/components/CalendarComponent.vue";
import DeleteTaskComponent from './components/DeleteTaskComponent.vue';
import EditTaskComponent from "@/components/EditTaskComponent.vue";

export default {
  name: 'App',
  components: {
    SideBarComponent,
    KanbanComponent,
    AddTaskComponent,
    AddColaboratorComponent,
    CalendarComponent,
    DeleteTaskComponent,
    EditTaskComponent
  },
  data() {
    return {
      currentComponent: 'notCalendar'
    };
  },
  created() {
    EventBus.$on('change-component', componentName => {
      this.currentComponent = componentName;
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.grid {
  display: grid;
  grid-template-columns: 300px 1fr; /* Define duas colunas, a primeira com 200px de largura */
  grid-gap: 20px; /* Espaço entre as colunas */
}
</style>