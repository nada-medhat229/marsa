<script setup>
import { ref } from 'vue';
const showMenu=ref(false)


</script>
<template>
    <header class="">
        <div class="row header">
            <h1 class="logo">
                <router-link to="/" >
                    <img src="../assets/images/logo.png" alt="" class="logo-img">
                </router-link>
                <img src="../assets/images/menu.png" alt="" class="menu" @click="showMenu=!showMenu">
            </h1>
            <ul class="nav" :class="showMenu===true?'':'hide'" @click="showMenu=false">
                <li class="nav-item"><router-link to="/">Home</router-link></li>
                <li class="nav-item"><router-link to="/yachts">Yachts</router-link></li>
                <li class="nav-item"><router-link to="/tours">Tours</router-link></li>
                <li class="nav-item"><router-link to="/about">About</router-link></li>
                <li class="nav-item"><router-link to="/contactus">Contact us</router-link></li>                
                <ul class="buttons">
                    <li class="nav-item"><router-link to="/login">Login</router-link></li>                
                </ul>
            </ul>
        </div>
    </header>
</template>
<style lang="scss" scoped>

.header{
    background: transparent;
    position: relative;
    z-index: 555;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
    
    @media only screen and (max-width:800px){
        flex-direction: column;
        padding: 10px;
    }
    .logo{
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media only screen and (max-width:800px){
            width: 100%;
        }   
    }
    .logo-img{
        width: 50px;
    }
    h1 a{
        color: #000000;
        @media only screen and (max-width:800px){
            font-size: 20px;            
        }
    }
    .menu{
        display: none;
        width: 30px;
        @media only screen and (max-width:800px){
            display: inline-block;
        }
    }
    .nav{
        display: flex;
        align-items: center;
        list-style: none;
        @media only screen and (max-width:800px){
            flex-direction: column;
            width: 100%;
            height: 100vh;
            border-top: 1px solid #ffffff77;
            padding-top: 10px;
            padding-bottom: 20px;
            animation-name: slidefromleft;
            animation-duration: .5s;
        } 
        a{
            color: #fff;
        }
        .buttons{
            display: flex;
            list-style: none;
            margin-left: 5px;
            @media only screen and (max-width:800px){
                margin-top: 30px;
            }
            li{
                background-color: #ffffff7e;
                color: #000000;
                font-size: 13px;
                @media only screen and (max-width:800px){
                    background-color: #00425A;
                    color: #fff;
                    margin: 0 5px;
                    padding: 5px 30px;
                    font-size: 15px;
                }
            }

            a{
                color: #000;
                @media only screen and (max-width:800px){
                    color: #fff;
                }
            }
        }
        &-item{
            color: #ffffff;
            font-size: 18px;
            margin-left: 10px;
            padding: 5px 10px;
            border: 1px solid transparent;
            border-radius: 5px;
            transition: all .25s;
            @media only screen and (max-width:800px){
                display: block;
                width: 100%;
                background-color: #ffffff23;
                padding: 5px;
                margin-bottom: 10px;
                border-radius: 5px;
                text-align: center;
                margin-left: 0;

            }
            a{
                @media only screen and (max-width:800px){
                    display: block;
                    width: 100%;
                }
            }
        }
        &-item:hover a{
            color: #000;
        }

    }
    .hide{
        @media only screen and (max-width:800px){
            display: none;        
        }
    }
}

@keyframes slidefromleft {
  0%   {transform: translateX(100%);}
  100%   {transform: translateX(0);}
}

</style>
