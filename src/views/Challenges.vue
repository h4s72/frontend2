<script>
  export default {
    data() {
      return {
        checked: true
      }
    }
  }
</script>

<template>
  <v-layout align-center justify-start column>
    <h1>Challenges</h1>
    <p>Here you can find your weekly challenges, make sure to mark as done when finished.</p>
    <v-form>
      <v-checkbox
          label="1 day without driving car"
          append-icon="time_to_leave"
          :messages="['100 XP']"
        ></v-checkbox>
        <v-checkbox
          label="1 day only eating leftovers"
          append-icon="delete"
          v-model="checked"
          :messages="['75 XP']"
        ></v-checkbox>
        <v-checkbox
          label="Buying no new clothes"
          append-icon="sync"
          :messages="['5 XP']"
        ></v-checkbox>
    </v-form>
    
  </v-layout>
</template>

<style lang="scss" scoped>
.v-form {
  width: 60%;
}
</style>