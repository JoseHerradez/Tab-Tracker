<template>
  <v-toolbar dark fixed>
    <v-toolbar-title class="mr-4">
      <router-link to="/" tag="span" style="cursor: pointer">TabTracker</router-link>
    </v-toolbar-title>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat dark>Link One</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat dark to="login" v-if="!$store.state.isUserLoggedIn">Login</v-btn>
      <v-btn flat dark to="register" v-if="!$store.state.isUserLoggedIn">Sign up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
