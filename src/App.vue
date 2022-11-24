<script>

import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components:{
    AppHeader,
  }
}

</script>

<template>
  <AppHeader />
</template>


<style lang="scss">
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;
</style>
