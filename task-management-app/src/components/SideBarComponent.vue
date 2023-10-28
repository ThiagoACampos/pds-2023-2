<template>
  <div>
    <b-sidebar id="sidebar-1" title="Sidebar" no-header visible shadow>
      <div class="pt-4 px-3 py-2">
        <h2>Gest Tarefas</h2>
        <div class="pt-3">
          <b-button block variant="outline-secondary" class="w-100">Kanban</b-button>
        </div>
        <div class="pt-3">
          <b-button block variant="outline-secondary" @click="modalSecond.show = !modalSecond.show" class="w-100">Add Task</b-button>
        </div>
        <div class="pt-3">
          <b-button block variant="outline-secondary" class="w-100">Manage Categories</b-button>
        </div>
        <div class="pt-3">
          <b-button block variant="outline-secondary" class="w-100">Add Colaborator</b-button>
        </div>
      </div>
    </b-sidebar>

    <modal
        title="Modal with form"
        v-show="modalSecond.show"
        @close="modalSecond.show = false"
        class="full-screen-modal">
      <div slot="body" class="modal-content">
        <form @submit.prevent="submitSecondForm">
          <label>Name:</label>
          <input type="text" required v-model="modalSecond.name">
          <label>Email:</label>
          <input type="email" required v-model="modalSecond.email">
          <button class="btn btnPrimary">Submit</button>
        </form>
      </div>
    </modal>

  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
    }
  },
  methods: {
    submitSecondForm () {
      console.log( {
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
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

.demo {
  text-align: center;
}

ul.func-list {
  margin-bottom: 30px;

  li {
    margin-bottom: 20px;
  }
}

.wrapper-content {
  padding-top: 80px;
}

.modal__btn-list {
  display: flex;
  justify-content: center;

  .btn {
    margin: 0 20px;
  }
}

.full-screen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Additional styles for the modal content if needed */
.full-screen-modal .modal-dialog {
  max-width: none;
  width: 100%;
  height: 100%;
  margin: 0;
}

.modal-content {
  background: #fff; /* Background color */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
  padding: 20px; /* Add padding for content */
  max-width: 80%; /* Set a maximum width */
}

/* Additional styles for the modal content if needed */
.modal-content form {
  display: flex;
  flex-direction: column;
}

.modal-content label {
  font-weight: bold;
  margin-bottom: 5px;
}

/* Styles for input fields */
.modal-content input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 16px;
}

/* Styles for buttons */
.modal-content button {
  background: #007BFF; /* Button background color */
  color: #fff; /* Text color */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.modal-content button:hover {
  background: #0056b3; /* Button background color on hover */
}

</style>
