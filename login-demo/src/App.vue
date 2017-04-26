<template>
  <div id="app">
    <router-view>
      <router-link to='/test'>test</router-link>
      <router-view></router-view> 
    </router-view>
  </div>
</template>

<script>
export default {
  computed:{
    count(){
      return this.$store.state
    },
  },
  methods:{
    increment(){
      console.log(this.count)
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
</style>
