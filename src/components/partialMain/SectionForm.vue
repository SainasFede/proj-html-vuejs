<script>



export default {
  name: 'SectionForm'
}
</script>

<template>
  <section class="form">
    <div class="container h-100 d-flex justify-content-center align-items-center flex-column">
      <div class="row">

        <div class="col-8">
          <div class="row">
            <div class="col-12 pb-4">
              <h6>SEND A MESSAGE</h6>
              <h2 class="py-3">Get in <span>Touch</span></h2>
              <p>We will respond to your message as soon as possible</p>
            </div>
            <div class="col-6 my-2">
              <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="col-6 my-2">
              <input type="text" class="form-control" placeholder="Email">
            </div>
            <div class="col-6 my-2">
              <input type="text" class="form-control" placeholder="Phone">
            </div>
            <div class="col-6 my-2">
              <select class="form-select" aria-label="">
                <option selected>More Info</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col my-2">
              <textarea id="getinTouch" cols="30" rows="5" class="form-control" placeholder="Message"></textarea>
            </div>

          </div>
          </div>
        <div class="col-4">
          <div class="row">

            <div class="col-12 pb-4">
              <h4>Example Inc.</h4>
              <p class="py-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="col-12">
              <ul>
                <li><i class="fa-solid fa-phone fa-lg"></i><span>+1 (305) 1234-5678</span></li>
                <li><i class="fa-solid fa-envelope fa-lg"></i><span>hello@example.com</span></li>
                <li><i class="fa-solid fa-location-dot fa-lg"></i><span>Main Avenue, 987</span></li>
              </ul>
              <button class="btn secondary">VIEW MAP</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <button class="btn primary">SEND</button>
      </div>
    </div>
  </section>
  
</template>


<style lang="scss" scoped>
  @use '../src/assets/style/general.scss';
  @use '../src/assets/style/vars.scss' as *;
  section{
    .primary{
        color: #fff;
        background-color: $primary;
        padding: 8px 30px;
    }
  }
  .form{
    widows: 100%;
    height: 600px;
    background-color: #eef1ed;
    p{
      color: $word;
    }
    .col-8{
      select{
        color: grey;
      }
      h6{
        color: $primary;
      }
      h2 span{
            color: $primary;
            background-color: lighten($back2, 25%);
            padding: 0 10px 5px;
      }
    }
    .secondary{
      color: $primary;
      border: 1px solid $primary;
      background-color: #fff;
      padding: 8px 30px;
    }
    ul{
      list-style: none;
      padding: 0;
      margin-bottom: 0;
      li{
        padding-bottom: 25px;
        cursor: pointer;
        i{
          padding: 18px 10px;
          border-radius: 50%;
          color: $primary;
          background-color: lighten($back2, 25%);
        }
        span{
          margin-left: 20px;
          color: $primary;
        }
      }
    }
  }
</style>