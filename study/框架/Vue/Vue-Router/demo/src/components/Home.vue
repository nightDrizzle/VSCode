<template>
  <div>
    <ul class='clearfix'>
      <li>
        <router-link to='/foo'>foo</router-link>
      </li>
      <li>
        <router-link to='/bar'>bar</router-link>
      </li>
      <li>
        <router-link to='/user/chen'>/user/chen</router-link>
      </li>
      <li>
        <router-link to='/user/wang'>/user/wang</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    getUsername() {
      console.log(this.username)
    },
  },
}
</script>

<style scoped>
</style>
