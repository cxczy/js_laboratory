<template>
  <div class="hello">
    <ul>
      <router-link to="/p1" tag="li">Event Emitter</router-link>
      <router-link to="/p2" tag="li">Canvas</router-link>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  ul, li {
    list-style: none;
    color: #687bff;
    cursor: pointer;
  }
</style>
