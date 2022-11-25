<script>
export default {
  name: 'AppCardServices',
  props:{
    icon: String,
    arrow: String,
    service: String,
    description: String
  }
}
</script>

<template>
  <div class="sf-card">
    <div class="icon">
      <i :class="icon"></i>
      <i class="arrow" :class="arrow"></i>
    </div>
    <h3>{{service}}</h3>
    <p>{{description}}</p>
  </div>
</template>


<style lang="scss" scoped>
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;
  .sf-card{
    width: calc(100% / 3 - 40px);
    background-color: #fff;
    border-radius: 20px;
    margin: 10px;
    padding: 40px;
    h3{
      color: $title1;
    }
    p{
      color: $word;
    }
    .icon{
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      .arrow{
        color: $back2;
        &:hover{
          color: $primary;
          background-color: lighten($back2, 25%);
          border-radius: 50%;
          padding: 15px 8px;
        }
      }
      i{
        color: $primary;
      }
    }
  }
</style>