<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <v-card class="elevation-2">
        <v-toolbar flat dense dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
              label="Email"
              v-model="email"
          ></v-text-field>
          <v-text-field
            type="password"
            name="password"
            label="Password"
            v-model="password"
          ></v-text-field>
          <br>
          <div v-html="error"></div>
          <br>
          <v-btn dark @click="login">Login</v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
