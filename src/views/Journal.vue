<script>
  export default {
    data() {
      return {
        water_usage: 0,
        co2emission: 0
      }
    },

    methods: {
      sendData() {
        console.log('Running SENDDATA');
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
        v-model.number="water_usage"
        label="Water Usage"
        required
      ></v-text-field>

      <v-text-field
        v-model="co2emission"
        label="Daily CO2 emission"
        required
      ></v-text-field>

      <v-btn
        color="success"
        @click="sendData"
      >
        Update
      </v-btn>
    </v-form>
  </v-layout>
</template>

<style lang="scss" scoped>
.v-form {
  width: 80%;
}
</style>