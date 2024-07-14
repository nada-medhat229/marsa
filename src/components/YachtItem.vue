<script setup>
const props = defineProps({
    yacht:Object
})
</script>

<template>
    <div class="wrapper">
        <img src="../assets/images/yacht1.jpg" alt="" class="thumbnail">
        <div class="details">
            <h3>{{ yacht.title }}</h3>
            <p><b>Capacity : </b> {{ yacht.capacity }} guests</p>
            <p>
                <b>Features: </b> <span v-for="(f,i) in yacht.features" :key="i">{{ f }},</span>
            </p>
            <p><b>Price : </b> ${{ yacht.pricePerHour }}/hour     </p>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.wrapper{
    width: 240px;
    background-color: #f5f5f5;
    box-shadow: 0 0 5px #00000041;
    padding: 40px 0;
    border-radius: 10px;
    .thumbnail{
        width: 100%;
        height: 150px;
    }
    .details{
        padding: 10px;

        h3{
            margin-bottom: 10px;
            text-align: center;
        }
        span{
            font-size: 13px;
        }
    }
}
</style>
