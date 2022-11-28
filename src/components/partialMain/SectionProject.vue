<script>

import { store } from '../../data/store'

export default {
  name: 'SectionProject',
  data(){
    return{
      store
    }
  },
}
</script>

<template>
  <section class="Project">
    <div class="container text-center">

      <div class="row d-flex justify-content-center">
        <p>WE DO MORE FOR EVERYONE</p>
        <h2>Actions & <span>Projects</span></h2>
        <ul>
          <li v-for="(project, index) in store.navprojects" :key="index">{{project}}</li>
        </ul>
      </div>

      <div class="row sf-row">

        <div class="col-4 card-1">
          <i class="fa-solid fa-arrow-right"></i>
          <h5>Academic professional program in social media</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, tenetur.</p>
        </div>

        <div class="col-4 card-2">
          <i class="fa-solid fa-arrow-right"></i>
          <h5>President s speech at the annual meeting</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, tenetur.</p>
        </div>

        <div class="col-4 card-3">
          <i class="fa-solid fa-arrow-right"></i>
          <h5>International business trip in Shanghai</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, tenetur.</p>
        </div>

        <div class="col-4 card-4">
          <i class="fa-solid fa-arrow-right"></i>
          <h5>Technology workshop with education theme</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, tenetur.</p>
        </div>

        <div class="col-4 card-5">
          <i class="fa-solid fa-arrow-right"></i>
          <h5>Donation of clothes and food to the partner NGO</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, tenetur.</p>
        </div>

        <div class="col-4 card-6">
          <i class="fa-solid fa-arrow-right"></i>
          <h5>Confraternization of the procurement team</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, tenetur.</p>
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
      .row{
        height: 30%;
        p{
          color: $primary;
        }
        h2{
          color: $title1;
          span{
            color: $primary;
            background-color: lighten($back2, 25%);
            padding: 0 10px 5px;
          }
        }
        ul{
          list-style: none;
          display: flex;
          justify-content: center;
          margin-top: 30px;
          li{
            padding: 0 30px;
            cursor: pointer;
            color: $word;
            &:hover{
              color: $primary;
            }
          }
        }
      }
      .row.sf-row{
        height: 70%;
      }
      .col-4{
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100% / 2);
        width: calc(100% / 3 - 20px);
        margin: 10px;
        padding: 10px;
        transition: 0.5s all;
        position: relative;
        h5,i{
          color: #fff;
        }
        p{
          color: #fff;
        }
        .fa-arrow-right, p{
          display: none;
        }
        &:hover{
          .fa-arrow-right, p{
            display: block;
          }
          flex-direction: column;
        }
        .fa-arrow-right{
          position: absolute;
          top: 20px;
          right: 20px;

        }
      }
      .card-1{
        background-image: url('../../assets/img/project-1.jpg');
        background-size: cover;
      }
      .card-2{
        background-image: url('../../assets/img/project-2.jpg');
        background-size: cover;
      }
      .card-3{
        background-image: url('../../assets/img/project-3.jpg');
        background-size: cover;
      }
      .card-4{
        background-image: url('../../assets/img/project-4.jpg');
        background-size: cover;
      }
      .card-5{
        background-image: url('../../assets/img/project-5.jpg');
        background-size: cover;
      }
      .card-6{
        background-image: url('../../assets/img/project-6.jpg');
        background-size: cover;
      }
      
    }
  }
</style>