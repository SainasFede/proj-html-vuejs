<script>
export default {
  name: 'SectionCompany'
}
</script>

<template>
  <section>
    <div class="company">
      <div class="info-company">
        <div class="the-company">
          <h6>ABOUT THE NETWORK</h6>
          <h2><span>The</span> Company</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magnam dicta vero est porro quos earum facilis, ducimus mollitia necessitatibus, nam commodi impedit architecto inventore sit quibusdam nemo minus voluptates?</p>
        </div>

        <div class="focus">
          <div class="skill">
            <h4>Tradition</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas</p>
          </div>
          <div class="skill">
            <h4>Security</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas</p>
          </div>
          <div class="skill">
            <h4>Certificate</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas</p>
          </div>
          <div class="skill">
            <h4>Expertise</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas</p>
          </div>
        </div>

        <div class="input">
          <button>GET IN TOUCH</button> <button>READ MORE</button>
        </div>

      </div>
    </div>
    <div class="img">
      <img src="../../assets/img/about-4.jpg" alt="">
    </div>
  </section>
</template>



<style lang="scss" scoped>
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;
  section{
    width: 100%;
    height: 800px;
    display: flex;
  }
  .company{
    height: 100%;
    width: 50%;
    background-color: $back;
    display: flex;
    justify-content: end;
    align-items: center;
    .info-company{
      width: 70%;
      height: 80%;
      background-color: aqua;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 55px;
      .focus{
        display: flex;
        flex-wrap: wrap;
        .skill{
          width: calc(100% / 2);
          margin-bottom: 10px;
        }
      }
    }
  }
  .img{
    height: 100%;
    width: 50%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>