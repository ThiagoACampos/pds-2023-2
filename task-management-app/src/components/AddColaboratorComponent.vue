<template>
  <b-modal id="modal-2" hide-footer title="Add Colaborator">
    <template>
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Name:" label-for="input-1">
              <b-form-input id="input-1" v-model="form.colaboratorName"
                            placeholder="Colaborator name"
                            required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Position:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.colaboratorPosition"
                            placeholder="Colaborator position"
                            required></b-form-input>
            </b-form-group>


            <b-form-group id="input-group-3" label="Observations:" label-for="input-3">
              <b-form-input id="input-3" v-model="form.observations"
                            placeholder="Enter some observations for the new colaborator"
                            required
                            style="height: 100px; text-align: left; vertical-align: top;"></b-form-input>

            </b-form-group>
            <b-button type="submit" variant="primary">Save Colaborator</b-button>
          </b-form>
        </div>
    </template>
  </b-modal>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        colaboratorName: '',
        colaboratorPosition: '',
        observations: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      axios.post("http://localhost:3000/user/createUser", this.form)
          .then(response => console.log(response))
          .catch((error) => {
            console.log(error)
          })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.colaboratorName = ''
      this.form.colaboratorPosition = ''
      this.form.observations = ''
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