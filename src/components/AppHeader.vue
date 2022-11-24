<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header>
    <div class="container">
        <div class="orari">
          <p><span><i class="fa-solid fa-clock"></i></span> Open Hours: Mon - Sat - 9:00 - 18:00</p>
        </div>
        <div class="info">
          <ul>
            <li><span><i class="fa-solid fa-phone"></i></span> +1 (305) 1234-5678</li>
            <li><span><i class="fa-solid fa-envelope"></i></span> hello@example.com</li>
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-linkedin-in"></i></li>
          </ul>
        </div>

    </div>
  </header>
</template>


<style lang="scss" scoped>
@use '../src/assets/style/vars.scss' as *;
@use '../src/assets/style/general.scss';
  header{
    height: 50px;
    background-color: #122439;
    li,span,i,p{
      color: $word;
    }
    .container{
      display: flex;
      justify-content: space-between;
      height: 100%;
      align-items: center;
      .orari, .info ul{
        height: 100%;
        display: flex;
        align-items: center;
        list-style: none;
        p, li{
          margin-bottom: 0px;
        }
      }
      .info{
        height: 100%;
      }
      .info ul li{
        padding: 0 10px;
      }

    }
  }
  
</style>