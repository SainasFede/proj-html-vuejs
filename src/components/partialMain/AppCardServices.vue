<script>
export default {
  name: 'AppCardServices',
  props:{
    icon: String,
    service: String,
    description: String
  }
}
</script>

<template>
  <div class="sf-card">
    <div class="icon">
      <i :class="icon"></i>
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
      width: 20%;
      height: 40px;
      i{
        color: $primary;
      }
    }
  }
</style>