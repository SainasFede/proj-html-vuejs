<script>

import SectionServices from './partialMain/SectionServices.vue';
import SectionCompany from './partialMain/SectionCompany.vue';
import { store } from '../data/store';

export default {
  name: 'AppMain',
  components:{
    SectionServices,
    SectionCompany,
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
  <SectionCompany />
</template>


<style lang="scss" scoped>
  
</style>