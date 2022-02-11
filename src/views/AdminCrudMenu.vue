<template>
  <div >
  <top-bar title="Watermelon  ."/>
</div>
</template>

<script>
import TopBar from '@/components/topbar.vue';

export default {
  name: 'AdminCrudMenu',
    components: {
  //  social_login,
    //Profile,
    //AdminCrudMenu
    TopBar
  },
  props: {
    msg: String
  },
    data: () => ({
    drawer: false,
    group: null,
    title : ''
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
