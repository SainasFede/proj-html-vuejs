<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer>
    <div class="container h-100 d-flex justify-content-center align-items-center">
      <div class="row justify-content-between">
        <div class="col-2">
          <div class="row">
            <img id="logo" src="/logo.PNG" alt="">
            <div class="col-12">
              <p>A Functional HTML Template for Corporate & Business</p>
            </div>
            <div class="col-12 info">
              <ul>
                <li><i class="fa-solid fa-phone fa-lg"></i><span>+1 (305) 1234-5678</span></li>
                <li><i class="fa-solid fa-envelope fa-lg"></i><span>hello@example.com</span></li>
                <li><i class="fa-solid fa-location-dot fa-lg"></i><span>Main Avenue, 987</span></li>
              </ul>
            </div>
            <button class="btn secondary w-100">GET IN TOUCH</button>
          </div>

        </div>
        <div class="col-2 p-4">
          <h4>About</h4>
          <ul class="input">
            <li><i class="fa-solid fa-chevron-right"></i><span>The Company</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Istitutional</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Social & Events</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Innovation</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Enviroment</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Technology</span></li>
          </ul>
        </div>
        <div class="col-2 p-4">
          <h4>Services</h4>
          <ul class="input ">
            <li><i class="fa-solid fa-chevron-right"></i><span>Audit & Assurance</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Financial Advisory</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Analytics M&A</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Middle Marketing</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Legal Consulting</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Regulatory Risk</span></li>
          </ul>
        </div>
        <div class="col-2 p-4">
          <h4>Support</h4>
          <ul class="input">
            <li><i class="fa-solid fa-chevron-right"></i><span>Responsability</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Terms of Use</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>About Cookies</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Privacy Policy</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Accessibility</span></li>
            <li><i class="fa-solid fa-chevron-right"></i><span>Information</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright-f d-flex justify-content-center align-items-center justify-content-around">
      <p>Enjoy the low price. We are tracking any intention of piracy.</p>
      <p>2020 NEXGEN is Proudly Powered by <span>Codings</span>.</p>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;

  footer{
    width: 100%;
    height: 600px;
    background-color: $title1;
    color: #eef1ed;
    .secondary{
      color: #fff;
      border: 1px solid $primary;
      background-color: #111117;
    }
    ul.input{
      padding-top: 5px;
      li{
        padding-bottom: 10px;
        cursor: pointer;
        span{
          margin-left: 10px;
        }
      }
    }
    ul{
      list-style: none;
      padding: 0;
      margin-bottom: 0;
    }
    .info ul{
      li{
        padding-bottom: 20px ;
        cursor: pointer;
        span{
          margin-left: 20px;
        }
      }
    }
    .container{
      .row{
        .col-2{
          #logo{
            width: 200px;
          }
          background-color: $back;
          border-radius: 10px;
        }
      }
    }
    }
    .copyright-f{
      width: 100%;
      height: 80px;
      background-color: $back;
      p{
        margin: 0px;
      }
    }
</style>