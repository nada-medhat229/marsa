<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router'
const router = useRouter()
const email = ref('');
const password = ref('');

const submitForm = () => {
  router.push('/admin')
};
</script>
<template>
    <div class="row wrapper">

      <form @submit.prevent="submitForm">
        <h1 class="title">Sign In</h1>
        <input type="email" id="email" v-model="email" required placeholder="Email">
        <input type="password" id="password" v-model="password" required placeholder="Password">
        <div class="buttons">

          <button type="submit">Sign In</button>
          <router-link to="/signup" class="button">Register</router-link>
        </div>
        <p>Or</p>
        <button class="g-btn">Login with Google</button>
        <button class="f-btn">Login with Facebook</button>
      </form>
    </div>
  </template>

<style lang="scss" scoped>
.wrapper{
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  form{
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f3f3f3;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px #00000031;
    .title{
      color: #00425A;
      margin-bottom: 20px;
    }
    input{
      font-size: 15px ;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 10px;
      border: none;
      width: 100%;
      max-width: 300px;
      box-shadow: 0 0 10px #00000031;
    }
    .button,
    button{
      border-radius: 30px;
      font-size: 15px;
      padding: 5px 15px;
      margin: 5px;
      width: 100%;
      min-width: 90px;
      max-width: 250px;
      text-align: center;
      color: #fff;
      background-color: #00425A;
      border: none;
      transition: all .3s;
    }
    button:hover{
      box-shadow: 0 0 10px #00000031;
      cursor: pointer;
      transform: scale(1.1);

    }
    .g-btn{
      background-color: #D50f25;
    }
    .f-btn{
      background-color:  #4267B2;
    }
    .buttons{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
