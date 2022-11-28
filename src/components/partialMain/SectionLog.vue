<script>
export default {
  name: 'SectionLog'
}
</script>

<template>
  <section class="log">
    <div class="container h-100 d-flex justify-content-center align-items-center">
      <ul class="d-flex">
        <li><img src="../../assets/img/logo-1.png" alt=""></li>
        <li><img src="../../assets/img/logo-2.png" alt=""></li>
        <li><img src="../../assets/img/logo-3.png" alt=""></li>
        <li><img src="../../assets/img/logo-4.png" alt=""></li>
        <li><img src="../../assets/img/logo-5.png" alt=""></li>
        <li><img src="../../assets/img/logo-1.png" alt=""></li>
      </ul>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;

  .log{
    width: 100%;
    height: 200px;
    background-color: $title1;
    ul{
      list-style: none;
      li{
        padding: 0 30px;
        img{
          filter: brightness(0.3) sepia(1) hue-rotate(180deg) saturate(5) grayscale(50%);
        }
      }
    }
  }
</style>