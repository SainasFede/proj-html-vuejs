<script>

import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';

export default {
  name: 'App',
  components:{
    AppHeader,
    AppJumbotron
  }
}

</script>

<template>
  <AppHeader />
  <AppJumbotron />
</template>


<style lang="scss">
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;
</style>
