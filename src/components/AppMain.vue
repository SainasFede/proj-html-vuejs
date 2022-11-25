<script>

import SectionServices from './partialMain/SectionServices.vue';
import SectionCompany from './partialMain/SectionCompany.vue';
import SectionProject from './partialMain/SectionProject.vue';
import { store } from '../data/store';

export default {
  name: 'AppMain',
  components:{
    SectionServices,
    SectionCompany,
    SectionProject,
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
  <SectionProject />
</template>


<style lang="scss" scoped>
  
</style>