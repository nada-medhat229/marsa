<script setup>
import YachtItem from '../components/YachtItem.vue';
import TourItem from '../components/TourItem.vue';
import Header from '../components/Header.vue'
import Popular from '../components/Popular.vue'
import Trip from '../components/Trip.vue'

import {useYachtStore} from '../stores/yachts';
import {useTourStore} from '../stores/tours';
import { onBeforeMount } from 'vue';
const yatchtStore = useYachtStore()
const tourStore = useTourStore()


const {topYachts} = yatchtStore
const {topTours} = tourStore

onBeforeMount(()=>{
  window.scrollTo(0,0)
})

</script>

<template>
  <main>
    <Header/>
<Popular/>
<Trip/>
    <!-- Top Yachts -->
      <!-- <section class="section" >
        <h2 class="main-heading">Top Yachts</h2>
        <div class="row">
          <div class="cards">
            <YachtItem v-for="(yacht, index) in topYachts" :key="index" :yacht="yacht"/>
          </div>
          <p style="text-align: center;">
            <router-link to="/yachts" class="rounded-btn btn">View all yachts</router-link>
          </p>
        </div>
      </section> -->

    <!-- Top Tours -->
      <!-- <section class="section" >
        <h2 class="main-heading">Top Tours</h2>
        <div class="row">
          <div class="cards">
            <TourItem v-for="(tour, index) in topTours" :key="index" :tour="tour"/>
          </div>
          <p style="text-align: center;">
            <router-link to="/tours" class="rounded-btn btn">View all tours</router-link>
          </p>
        </div>
      </section> -->
  </main>
</template>

<style lang="scss" scoped>


.section{
  margin-bottom: 30px;
  .main-heading{
    width: 100%;
    padding: 20px 0;
    text-align: center;
    background: #1f8a6f28;
    color: #00425A;
  }
  .cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 20px 10px;
    margin-bottom: 30px;
    @media only screen and (max-width:800px){
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px;
    }
  }
}

</style>
