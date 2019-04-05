<script>
  export default {
    data() {
      return {
        values: [
          {
            main_label: 'CO2 Emission by Transport',
            sub_label: '(kg / week)',
            my_value: this.$store.state.emission_by_transport,
            average_value: this.$store.state.average_emission_by_transport,
            my_value_percentage: this.calculateMyPercentage(
                        this.$store.state.emission_by_transport, 
                        this.$store.state.average_emission_by_transport),
            average_value_percentage: this.calculateAveragePercentage(
                        this.$store.state.emission_by_transport, 
                        this.$store.state.average_emission_by_transport)
          },
          {
            main_label: 'CO2 Emission by Energy Consumption',
            sub_label: '(kg / week)',
            my_value: this.$store.state.emission_by_energy,
            average_value: this.$store.state.average_emission_by_energy,
            my_value_percentage: this.calculateMyPercentage(
                        this.$store.state.emission_by_energy, 
                        this.$store.state.average_emission_by_energy),
            average_value_percentage: this.calculateAveragePercentage(
                        this.$store.state.emission_by_energy, 
                        this.$store.state.average_emission_by_energy)
          },
          {
            main_label: 'Recycling',
            sub_label: '(% of possible recyclable material/week recycled)',
            my_value: this.$store.state.recycledPercentage,
            average_value: this.$store.state.average_recycledPercentage,
            my_value_percentage: this.$store.state.recycledPercentage,
            average_value_percentage: this.$store.state.average_recycledPercentage
          }
        ]
      }
    },

    methods: {
      calculateMyPercentage(my_value, average_value) {
        if (my_value < average_value) {
          return Math.round((my_value / average_value) * 100);
        }
        else {
          return 100;
        }
      },

      calculateAveragePercentage(my_value, average_value) {
        if (average_value < my_value) {
          return Math.round((average_value / my_value) * 100);
        }
        else {
          return 100;
        }
      }
    }
  }
</script>

<template>
  <v-layout align-center justify-start column fill-height>
    <h1>Statistics</h1>

    <v-flex class="myflex" v-for="value in values" xs12>
      <h2 class="sectionHeader">{{ value.main_label }}</h2>
      <h3 class="subHeader">{{ value.sub_label }}</h3>
      <v-flex class="myflex" xs12>
        <v-layout row>
          <v-flex xs2>
            <p class="progressLabel">You</p>
          </v-flex>
          <v-flex xs9>
            <v-progress-linear v-model="value.my_value_percentage"></v-progress-linear>
          </v-flex>
          <v-flex xs1>
            <p class="progressLabel">{{ value.my_value }}</p>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs2>
            <p class="progressLabel">Average Swedish person</p>
          </v-flex>
          <v-flex xs9>
            <v-progress-linear v-model="value.average_value_percentage" color="warning"></v-progress-linear>
          </v-flex>
          <v-flex xs1>
            <p class="progressLabel">{{ value.average_value }}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
.sectionHeader {
  margin-top: 2em;
  text-align: center;
}

.subHeader {
  text-align: center;
}

.myflex {
  width: 100%;
}

.progressLabel {
  margin-left: 2em;
  margin-top: .3em;
  padding-right: 1em;
}
</style>