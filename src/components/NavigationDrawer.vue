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
          title: 'Hem', 
          icon: 'home'
        },
        {
          path: '/journal',
          title: 'Journal',
          icon: 'assignment'
        },
        {
          path: '/challenges',
          title: 'Weekly Challenges',
          icon: 'check_circle'
        },
        {
          path: '/stats',
          title: 'Statistics',
          icon: 'bar_chart'
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
