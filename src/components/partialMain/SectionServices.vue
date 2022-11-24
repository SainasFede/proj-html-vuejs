<script>

import { store } from '../../data/store';
import AppCardServices from './AppCardServices.vue';

export default {
  name: 'SectionServices',
  components:{
    AppCardServices
  },
  data(){
    return {
      store
    }
  }
}
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <h6>OUR BUSINESS AREAS</h6>
        <h2>Excellence in <span>Services</span> </h2>
        <div class="d-flex justify-content-between">
          <p class="w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dolorem odit cumque fugit quia est illo, id, nulla praesentium quidem fugiat? Ipsa reprehenderit doloribus aspernatur repudiandae veritatis veniam tempora quasi!</p>
          <button class="btn fs-btn">See All</button>
        </div>
      </div>
      <div class="sf-row">
        <AppCardServices 
        v-for="(card, index) in store.services" 
        :key="index"
        :icon="card.icon"
        :service="card.service"
        :description="card.description" />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;
section{
  background-color: #eef1ed;
}
.container{
  height: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
    p{
      color: $word;
      margin-bottom: 0px;
    }
    h2{
      color: $title1;
    }
    h6{
      color: $primary;
    }
  .row{
    padding: 0 40px;
    margin-bottom: 40px;
    .fs-btn{
      color: lighten($primary, 70%);
      background-color: $primary;
      padding: 5px 10px;
    }
    span{
      color: $primary;
      background-color: lighten($primary, 70%);
      padding: 0 10px;
    }
  }
  .sf-row{
    flex-wrap: wrap;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
}


</style>