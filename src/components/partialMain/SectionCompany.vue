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
          <p>For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related services to select clients.</p>
        </div>

        <div class="focus">
          <div class="skill">
            <div class="icon">
              <i class="fa-solid fa-medal fa-lg"></i><h4>Tradition</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas</p>
          </div>
          <div class="skill">
            <div class="icon">
              <i class="fa-solid fa-lock fa-lg"></i><h4>Security</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas</p>
          </div>
          <div class="skill">
            <div class="icon">
              <i class="fa-solid fa-pen-to-square fa-lg"></i><h4>Certificate</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas</p>
          </div>
          <div class="skill">
            <div class="icon">
              <i class="fa-solid fa-graduation-cap fa-lg"></i><h4>Expertise</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas</p>
          </div>
        </div>

        <div class="input">
          <button class="btn primary">GET IN TOUCH</button> <button class="btn secondary">READ MORE</button>
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
    p{
      color: $word;
    }
    h2,h4{
      color: #fff;
      span{
        padding: 0 10px 5px;
        background-color: darken($primary, 17%);
      }
    }
    h6{
      color: $primary;
    }
    *{
      padding-bottom: 10px;
    }
    .info-company{
      width: 75%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 55px;
      .input{
        .secondary{
          color: #fff;
          border: 1px solid $primary;
          background-color: #111117;
          padding: 8px 30px;
        }
      }.primary{
        color: #fff;
        background-color: $primary;
        margin-right: 10px;
        padding: 8px 30px;
      }
      .focus{
        display: flex;
        flex-wrap: wrap;
        .skill{
          width: calc(100% / 2);
          margin-bottom: 10px;
          .icon{
            line-height: 30px;
            vertical-align: middle;
            display: flex;
            align-items: center;
            i{
              margin-bottom: 0.5rem;
              margin-right: 0.5rem;
              color: $primary;
            }
          }
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