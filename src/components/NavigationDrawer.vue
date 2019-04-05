<script>
export default {
  props: {
    show: {
      type: Boolean
    }
  },

  data() {
    return {
      drawer: null,
      items: [
        { 
          path: '/',
          title: 'Home', 
          icon: 'home'
        },
        {
          path: '/journal',
          title: 'Journal',
          icon: 'assignment'
        },
        {
          path: '/stats',
          title: 'Statistics',
          icon: 'bar_chart'
        },
        {
          path: '/challenges',
          title: 'Weekly Challenges',
          icon: 'check_circle'
        }
      ]
    }
  },

  watch: {
    show() {
      this.drawer = !this.drawer;
    }
  }
}
</script>

<template>
  <v-navigation-drawer app clipped v-model="drawer" :mobile-break-point="1000">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="/ProEnvirer.svg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Greta</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list dense>
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
        :to="item.path"
        exact
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-action>
          {{ item.title }}
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
