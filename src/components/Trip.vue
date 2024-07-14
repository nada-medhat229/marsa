<template>
  <v-container>
    <v-row justify="center" class="my-5">
      <v-col cols="12">
        <h2 class="text-center pb-5 maincolor">Recommended Trips</h2>
      </v-col>
      <v-col cols="12" md="4" v-for="(trip, index) in trips" :key="index">
        <v-card>
          <v-img :src="trip.image" height="200px" cover>
            <v-row class="fill-height ma-0" align="end" justify="end">
              <v-chip class="ma-2 text-white rounded-lg	position-absolute top-0" >{{
                trip.price
              }}</v-chip>
            </v-row>
          </v-img>
          <v-card-title>{{ trip.name }}</v-card-title>
          <v-card-subtitle>{{ trip.date }}</v-card-subtitle>
          <v-card-actions class="actionbtn">
            <v-btn block>Book Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      trips: [
        {
          name: "Green islands, Indonesia",
          image: "@/assets/images/trip1.jpg",
          price: "700$",
          date: "June 1",
        },
        {
          name: "Caribbean island of Grenada",
          image: "@/assets/images/trip2.jpg",
          price: "850$",
          date: "June 1",
        },
        {
          name: "Costa Brava, Spain",
          image: "@/assets/images/trip3.jpg",
          price: "800$",
          date: "August 10",
        },
      ],
    };
  },
};
</script>

<style >
.headline {
  font-size: 24px;
  font-weight: bold;
}
.actionbtn{
    background-color: #00425adb;
    color: white;
    margin-top: 20px;
}
</style>
