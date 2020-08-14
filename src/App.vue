<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage';
export default {
  name: 'App',
  components: {
    
  },
  mounted(){
    // storage.setItem('a', 1);
    // storage.setItem('abc', '{wuge}', 'user')
    storage.clear('abc', 'user')
  }
}
</script>

<style>

</style>
