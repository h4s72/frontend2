<script>
  export default {
    data() {
      return {
        labels: [
        '1950',
        '1960',
        '1970',
        '1980',
        '1990',
        '2000',
        '2010',
        '2019'
        ],
        value: [
          200,
          675,
          410,
          390,
          310,
          460,
          250,
          240
        ]
      }
    }
  }
</script>

<template>
  <v-layout align-center justify-start column fill-height>
    <h1>Statistics</h1>
    <p>Below are your freakin stats</p>
    <v-sparkline
      :labels="labels"
      :value="value"
      color="gray"
      line-width="2"
      padding="16"
    ></v-sparkline>
  </v-layout>
</template>