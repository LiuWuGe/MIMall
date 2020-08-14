<template>
  <div>
    <OrderHeader />
     cart
    <router-view></router-view>
    <NavFooter />
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
  name: 'cart',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>

<style>

</style>