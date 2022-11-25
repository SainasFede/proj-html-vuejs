<script>

import { store } from '../../data/store'

export default {
  name: 'SectionProject',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <section class="Project">
    <div class="container">
      <div class="cards">
        <div class="card"
        v-for="(project, index) in store.projects"
        :key="index">
        <img :src="project.img" alt="">
        </div>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;

  .Project{
    width: 100%;
    height: 800px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .container{
      height: 80%;
      background-color: red;
    }
  }
</style>