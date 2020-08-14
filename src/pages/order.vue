<template>
  <div>
    <OrderHeader />
     order
    <router-view></router-view>
    <NavFooter />
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
  name: 'order',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>

<style>

</style>