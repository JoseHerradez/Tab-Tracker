<template>
  <v-toolbar dark fixed>
    <v-toolbar-title class="mr-4">
      <router-link :to="{name: 'home'}" tag="span" style="cursor: pointer">TabTracker</router-link>
    </v-toolbar-title>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat dark :to="{name: 'songs'}">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat dark :to="{name: 'login'}" v-if="!$store.state.isUserLoggedIn">Login</v-btn>
      <v-btn flat dark :to="{name: 'register'}" v-if="!$store.state.isUserLoggedIn">Sign up</v-btn>
      <v-btn flat dark @click="logout" v-if="$store.state.isUserLoggedIn">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to homepage
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>

</style>
