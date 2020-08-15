<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      res: {}
    }
  },
  mounted(){
    //本地加载静态json文件方式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })

    //本地集成mockjs实现mock
    this.axios.get('/user/login').then((res) => {
      this.res = res
    })
  }
}
</script>

<style>

</style>
