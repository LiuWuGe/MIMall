<template>
  <div>
    <router-view></router-view>
    <ServiceBar></ServiceBar>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'
export default {
  name: 'order',
  components: {
    ServiceBar,
    NavFooter
  },
  data(){
    return {
      title: '',
      tip: ''
    }
  },
  mounted(){
    
  },
}
</script>

<style>

</style>