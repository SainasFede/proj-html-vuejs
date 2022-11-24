<script>

import SectionServices from './partialMain/SectionServices.vue';
import { store } from '../data/store';

export default {
  name: 'AppMain',
  components:{
    SectionServices,
  },
  data(){
    return {
      store
    }
  }
}
</script>

<template>
  <SectionServices />
</template>


<style lang="scss" scoped>
  
</style>