<script setup>
import Header from "../components/Header.vue";
import { onBeforeMount } from 'vue';

onBeforeMount(()=>{
  window.scrollTo(0,0)
})
</script>

<template>
    <main>
        <Header/>
        <div class="row wrapper">
            <h2 class="heading">About us</h2>
            <div class="details">
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit at ducimus modi distinctio aliquam quos porro accusamus itaque autem perferendis laborum eos aperiam magni nemo tempore praesentium, quisquam consectetur accusantium officia atque unde eligendi minus in cupiditate. Nobis illum error, eveniet beatae reiciendis, qui vero impedit consequuntur nesciunt ab corporis temporibus explicabo distinctio iusto quos iste quasi excepturi necessitatibus voluptatem fugiat repellat praesentium quisquam facilis totam. Nulla veniam provident aperiam aut dolorem vitae ad rerum, accusantium laudantium, iure aspernatur architecto obcaecati, quia commodi non fugit cum aliquam voluptas? Pariatur id dignissimos ipsum iusto illum vero recusandae et nulla hic illo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae placeat aut laboriosam veritatis ipsum aliquid delectus inventore, totam alias nam magni eos iste quaerat voluptatum officia asperiores tempora dicta? Perferendis?</p>
                <img src="../assets/images/yacht1.jpg" alt="" class="thumbnail">
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.wrapper{
    padding: 20px 10px;
    .heading{
        margin-bottom: 10px;
    }
    .details{   
        display: flex;
        @media only screen and (max-width:800px){
            flex-direction: column-reverse;
            align-items: center;
        }
        .description{
            font-size: 16px;
            margin-right: 20px;
            @media only screen and (max-width:800px){
                margin-right: 0;
                margin-top: 20px;
            }
        }    
        .thumbnail{
            width: 340px;
        }
    
    
    }
}
</style>
