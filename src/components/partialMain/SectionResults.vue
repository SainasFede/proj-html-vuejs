<script>
export default {
name: 'SectionResults'
}
</script>

<template>
  <section class="results">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h6 class="py-2">WHAT ARE WE DOING</h6>
          <h2><span>Results</span> in Numbers</h2>
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
      background-color: aquamarine;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>