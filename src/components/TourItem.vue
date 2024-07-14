<script setup>
const props = defineProps({
    tour:Object
})
</script>

<template>
    <div class="wrapper">
        <img src="../assets/images/tour1.jpg" alt="" class="thumbnail">
        <div class="details">
            <h3>{{ tour.title }}</h3>
            <p><b>Duration : </b> {{ tour.duration }} hours</p>
            <p>
                <b>Destinations: </b> <span v-for="(d,i) in tour.destinations" :key="i">{{ d }},</span>
            </p>
            <p><b>Price : </b> ${{ tour.pricePerPerson }}/person    </p>
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
