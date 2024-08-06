<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const showMenu = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header
      :class="[{ 'scrolled': isScrolled }, 'app-bar']"
    >
    <v-container>
        <v-row class="justify-space-between">

<h1 class="logo">
  <router-link to="/">
    <img src="../assets/images/logooo.png" alt="" class="logo-img" v-if="isScrolled">
    <img src="../assets/images/logoo.png" alt="" class="logo-img" v-else>
  </router-link>
  <img src="../assets/images/menuu.png" alt=""  style="width: 45px;" class="menu" @click="showMenu = !showMenu" v-if="isScrolled">
  <img src="../assets/images/menu.png" alt="" class="menu" @click="showMenu = !showMenu" v-else>
</h1>
<ul class="nav d-flex " :class="showMenu ? '' : 'hide'" @click="showMenu = false">
  <li class="nav-item"><router-link to="/">Home</router-link></li>
  <li class="nav-item"><router-link to="/yachts">Yachts</router-link></li>
  <li class="nav-item"><router-link to="/tours">Tours</router-link></li>
  <li class="nav-item"><router-link to="/about">About</router-link></li>
  <li class="nav-item"><router-link to="/contactus">Contact us</router-link></li>                
  <!-- <ul class="buttons">
    <li class="nav-item"><router-link to="/login">Login</router-link></li>                
  </ul> -->
</ul>
</v-row>
    </v-container>
     
    </header>
  </template>
  <style lang="scss" scoped>
header {
  background: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 555;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  transition: background-color 0.3s;

  &.scrolled {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    & a,
    & .nav-item{
        color: #00425A !important;

    }
    
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding: 10px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }

  .logo-img {
    width: 200px; 
    
    @media only screen and (max-width: 800px) {
    width: 150px; 

    } }

  h1 a {
    color: #000000;

    @media only screen and (max-width: 800px) {
      font-size: 20px;
    }
  }

  .menu {
    display: none;
    width: 30px;

    @media only screen and (max-width: 800px) {
      display: inline-block;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    list-style: none;

    @media only screen and (max-width: 800px) {
      flex-direction: column;
      width: 100%;
      height: 100vh;
      border-top: 1px solid #ffffff77;
      padding-top: 10px;
      padding-bottom: 20px;
      animation-name: slidefromleft;
      animation-duration: 0.5s;
      background: #fff;
    }

    a {
      color: #fff;

      @media only screen and (max-width: 800px) {
        color: #000 !important;
      }
    }

    .buttons {
      display: flex;
      list-style: none;
      margin-left: 5px;

      @media only screen and (max-width: 800px) {
        margin-top: 30px;
      }

      li {
        background-color: #ffffff7e;
        color: #000000;
        font-size: 13px;

        @media only screen and (max-width: 800px) {
          background-color: #00425A;
          color: #fff;
          margin: 0 5px;
          padding: 5px 30px;
          font-size: 15px;
        }
      }

      a {
        color: #000;

        @media only screen and (max-width: 800px) {
          color: #fff !important;
        }
      }
    }

    &-item {
      color: #ffffff;
      font-size: 18px;
      margin-left: 10px;
      padding: 5px 10px;
      border: 1px solid transparent;
      border-radius: 5px;
      transition: all 0.25s;

      @media only screen and (max-width: 800px) {
        display: block;
        width: 100%;
        background-color: #fff;
        padding: 5px;
        margin-bottom: 10px;
        border-radius: 5px;
        text-align: center;
        margin-left: 0;
      }

      a {
        @media only screen and (max-width: 800px) {
          display: block;
          width: 100%;
          color: #000 !important;
        }
      }
    }

    &-item:hover a {
      color: #000;
    }
  }

  .hide {
    @media only screen and (max-width: 800px) {
      display: none !important;
    }
  }
}

@keyframes slidefromleft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
