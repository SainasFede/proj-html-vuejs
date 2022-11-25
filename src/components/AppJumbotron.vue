<script>

import { store } from '../data/store'

export default {
  name: 'AppJumbotron',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="jumbotron">
    <img class="duo" src="../assets/img/bg-parallax.png" alt="">
    <div class="container h-100">

      <div class="row d-flex nav-logo">
        <div class="col-4">
          <img src="/logo.PNG" alt="">
        </div>
        <div class="col-auto">
          <ul>
            <li v-for="(link, index) in store.navheader" :key="index">{{link}}</li>
            <button class="btn primary">GET IN TOUCH</button>
          </ul>
        </div>
      </div>

      <div class="row h-75 align-items-center text-center">
        <div class="col-12 text-center">
          <h1 class="py-3">Ready <span>Team</span></h1>
          <p class="pb-4">No metter what your company needs, we will be ready to assit you in the best possible way.</p>
          <button class="btn primary">GET IN TOUCH</button> <button class="btn secondary">READ MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;
  .jumbotron{
    height: 650px;
    width: 100%;
    padding: 20px;
    position: relative;
    img.duo{
      position: absolute;
      width: 120%;
      top: -37px;
      left: -150px;
    }
    p{
      color: $word;
    }
    h1{
      span{
        color: $primary;
        background-color: lighten($back2, 25%);
        padding: 0 10px 5px;
      }
    }
    }
  .nav-logo{
    img{
      width: 150px;
      cursor: pointer;
    }
    justify-content: space-between;
    height: 5%;
  }
  .secondary{
          color: $primary;
          border: 1px solid $primary;
          background-color: #fff;
          padding: 8px 30px;
        }
  .primary{
        color: #fff;
        background-color: $primary;
        margin-right: 10px;
        padding: 8px 30px;
      }
    .col-auto{
      height: 100%;
      ul{
        list-style: none;
        display: flex;
        height: 100%;
        align-items: center;
        li{
          height: 20px;
          padding: 0 20px;
          vertical-align: middle;
          line-height: 20px;
          cursor: pointer;
          color: $word;
          &:hover{
            color: $primary;
          }
        }
      }
    }
</style>