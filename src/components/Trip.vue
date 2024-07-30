<template>
  <v-container>
    <v-row justify="center" class="my-5">
      <v-col cols="12">
        <h2 class="text-center pb-5 maincolor">Recommended Trips</h2>
      </v-col>
      <v-col cols="12" md="4" v-for="(trip, index) in trips" :key="index">
        <v-card>
          <v-img :src="trip.imgUrl" height="200px" cover>
            <v-row class="fill-height ma-0" align="end" justify="end">
              <v-chip class="ma-2 text-white rounded-lg position-absolute top-0">{{ trip.price }}</v-chip>
            </v-row>
          </v-img>
          <v-card-title>{{ trip.title }}</v-card-title>
            <v-chip class="mx-1 px-3" variant="outlined" color="#BDBDBD" v-for="(item, i) in trip.icons" :key="i" style="margin: 0 2px;">
            <v-icon left class="pe-2">{{ item.name }}</v-icon>
            <p style="color: #000;">
              {{ item.text }}
            </p>
          </v-chip>         
          <v-card-subtitle class="pt-2">{{ trip.duration }}</v-card-subtitle>
          <v-card-actions class="actionbtn">
            <v-btn block @click="detail(trip.id)">Book Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { useTourStore } from "../stores/tours";
const tourStore = useTourStore();
const trips = tourStore.tours.slice(0, 3); // Adjust the property according to your store's structure
function detail(id) {
  router.push(`/detail/${id}`);
}
</script>

<style>
.headline {
  font-size: 24px;
  font-weight: bold;
}
.actionbtn {
  background-color: #00425adb;
  color: white;
  margin-top: 20px;
}
</style>
