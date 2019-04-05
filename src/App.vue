<template>
  <v-app>
    <NavigationDrawer :show="showSideBar"/>
    <!-- <Toolbar/> -->
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon
        @click="toggleSideBar"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title>Envirorer</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import NavigationDrawer from './components/NavigationDrawer';

export default {
  name: 'App',

  data() {
    return {
      showSideBar: true
    }
  },

  computed: {
    appLoaded() {
      return this.$store.username.length > 0;
    }
  },

  components: {
    NavigationDrawer
  },

  methods: {
    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    }
  }
}
</script>