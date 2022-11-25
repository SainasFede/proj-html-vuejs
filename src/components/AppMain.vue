<script>

import SectionServices from './partialMain/SectionServices.vue';
import SectionCompany from './partialMain/SectionCompany.vue';
import SectionProject from './partialMain/SectionProject.vue';
import SectionResults from './partialMain/SectionResults.vue';
import { store } from '../data/store';

export default {
  name: 'AppMain',
  components:{
    SectionServices,
    SectionCompany,
    SectionProject,
    SectionResults
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
  <SectionResults />
</template>


<style lang="scss" scoped>
  
</style>