<template>
  <div class="align-content:center">
<Header />
<router-view></router-view>
  </div>
  
</template>


<script>
import Header from './components/Header.vue';

  export default {
    data() {
    },
    components: { Header }
}
</script>

<style scoped>

</style>
