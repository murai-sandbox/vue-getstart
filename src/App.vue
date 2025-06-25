<template>
  <nav v-if="!isLoginPage">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <span v-if="isAuthenticated">
      | <router-link to="/dashboard">Dashboard</router-link>
    </span>
    <span v-else>
      | <router-link to="/login">Login</router-link>
    </span>
  </nav>
  <router-view/>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup() {
    const route = useRoute()
    const store = useStore()
    
    const isAuthenticated = computed(() => store.getters.isAuthenticated)
    const isLoginPage = computed(() => route.name === 'login')

    return {
      isAuthenticated,
      isLoginPage
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
