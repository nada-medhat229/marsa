<script setup>
import Header from "../components/Header.vue";
import { ref } from 'vue';
import {useRouter} from 'vue-router'
const router = useRouter()

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

const submitForm = () => {
  router.push('/')
};
</script>
<template>
    <main>
        <Header/>
        <div class="row wrapper">
    
          <form @submit.prevent="submitForm">
            <h1 class="title">Get In Touch</h1>
            <input type="text" id="username" v-model="name" required placeholder="Name">
            <input type="email" id="email" v-model="email" required placeholder="Email">
            <input type="text" id="subject" v-model="subject" required placeholder="Subject">
            <textarea name="" id="message" cols="30" rows="10" placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
    </main>
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
    background: #f3f3f3;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px #00000031;
    .title{
      color: #00425A;
      margin-bottom: 20px;
    }
    textarea,
    input{
      font-size: 15px ;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 10px;
      border: none;
      width: 100%;
      box-shadow: 0 0 10px #00000031;
    }
    button{
      border-radius: 30px;
      font-size: 15px;
      padding: 5px 15px;
      margin: 5px;
      width: 90px;      
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
  }
}
</style>
