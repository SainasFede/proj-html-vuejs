<script>

import { store } from '../../data/store'

export default {
name: 'SectionResults',
data(){
  return{
    store
  }
}
}
</script>

<template>
  <section class="results">
    <div class="container d-flex flex-column">

      <div class="row">
        <div class="col text-center">
          <h6 class="py-2">WHAT ARE WE DOING</h6>
          <h2><span>Results</span> in Numbers</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ul class="d-flex">
            <li v-for="(result, index) in store.results" :key="index" class="text-center">
              <h4>{{result.number}}</h4>
              <h3>{{result.argument}}</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;

  .results{
    width: 100%;
    height: 600px;
    background-image: url('../../assets/img/bg-7.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .container{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      h4, h6{
          color: $primary;
        }
      h2{
        color: #fff;
        span{
          padding: 0 10px 5px;
          background-color: darken($primary, 17%);
        }
      }
    }
    ul{
      list-style: none;
      padding-top: 30px;
      li{
        padding: 0px 70px;
        font-size: 30px;
        h3{
          color: #fff;
        }
      }
    }
  }
</style>