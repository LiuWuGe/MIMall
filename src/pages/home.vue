<template>
  <NavHeader><NavHeader/>
  <router-view></router-view>
  <NavFooter><NavFooter/>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style>

</style>