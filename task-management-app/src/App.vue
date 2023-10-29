<template>
  <div id="app">
    <div class="grid">
      <SideBarComponent></SideBarComponent>
      <KanbanComponent></KanbanComponent>
      <AddTaskComponent></AddTaskComponent>
      <AddColaboratorComponent></AddColaboratorComponent>
    </div>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import SideBarComponent from './components/SideBarComponent.vue';
import KanbanComponent from './components/KanbanComponent.vue';
import AddTaskComponent from './components/AddTaskComponent.vue';
import AddColaboratorComponent from "@/components/AddColaboratorComponent.vue";

export default {
  name: 'App',
  components: {
    SideBarComponent,
    KanbanComponent,
    AddTaskComponent,
    AddColaboratorComponent
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
  margin-top: 60px;
}

.grid {
  display: grid;
  grid-template-columns: 300px 1fr; /* Define duas colunas, a primeira com 200px de largura */
  grid-gap: 20px; /* Espaço entre as colunas */
}
</style>
