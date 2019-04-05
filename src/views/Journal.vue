<script>
  export default {
    data() {
      return {
        emission_by_transport: this.$store.state.emission_by_transport,
        emission_by_energy: this.$store.state.emission_by_energy,
        recycledPercentage: this.$store.state.recycledPercentage,
        snackbar: {
          show: false,
          type: 'success',
          message: 'Saved!'
        }
      }
    },


    methods: {
      sendData() {
        this.$store.commit('updateAll', {
          emission_by_transport: this.emission_by_transport,
          emission_by_energy: this.emission_by_energy,
          recycledPercentage: this.recycledPercentage
        })
        this.snackbar.show = true;
      }
    }
  }
</script>

<template>
  <v-layout align-center justify-start column fill-height>
    <h1>Journal</h1>
    <p>Your journal below</p>
    <v-form
      ref="form"
    >
      <v-text-field
        v-model.number="emission_by_transport"
        label="CO2 Emission by Transport (kg / week)"
        required
      ></v-text-field>

      <v-text-field
        v-model.number="emission_by_energy"
        label="CO2 Emission by Energy Consumption (kg / week)"
        required
      ></v-text-field>

      <v-text-field
        v-model.number="recycledPercentage"
        label="Recycling (Percentage of possible recyclable material/week recycled)"
        required
      ></v-text-field>  

      <v-btn
        color="success"
        @click="sendData"
      >
        Update
      </v-btn>
      <v-snackbar
        v-model="snackbar.show"
        :top="true"
        :color="snackbar.type"
        :timeout="2500"
      >
        {{ snackbar.message }}
        <v-btn @click="snackbar.show = false" flat>
          Stäng
        </v-btn>
      </v-snackbar>
    </v-form>
  </v-layout>
</template>

<style lang="scss" scoped>
.v-form {
  width: 80%;
}
</style>