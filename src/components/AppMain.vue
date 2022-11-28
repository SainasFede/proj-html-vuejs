<script>

import SectionServices from './partialMain/SectionServices.vue';
import SectionCompany from './partialMain/SectionCompany.vue';
import SectionProject from './partialMain/SectionProject.vue';
import SectionResults from './partialMain/SectionResults.vue';
import SectionLog from './partialMain/SectionLog.vue';
import SectionForm from './partialMain/SectionForm.vue';
import { store } from '../data/store';

export default {
  name: 'AppMain',
  components:{
    SectionServices,
    SectionCompany,
    SectionProject,
    SectionResults,
    SectionLog,
    SectionForm
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
  <SectionLog />
  <SectionForm />
</template>


<style lang="scss" scoped>
  
</style>