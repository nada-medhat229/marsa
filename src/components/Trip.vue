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
              <v-chip class="ma-2 text-white rounded-lg position-absolute top-0">{{ trip.price }}</v-chip>
            </v-row>
          </v-img>
          <v-card-title>{{ trip.name }}</v-card-title>
            <v-chip class="mx-1 px-3" variant="outlined" color="#BDBDBD" v-for="(item, i) in trip.icons" :key="i" style="margin: 0 2px;">
            <v-icon left class="pe-2">{{ item.name }}</v-icon>
            <p style="color: #000;">
              {{ item.text }}
            </p>
          </v-chip>         
          <v-card-subtitle class="pt-2">{{ trip.date }}</v-card-subtitle>
          <v-card-actions class="actionbtn">
            <v-btn block>Book Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import image1 from "../assets/images/trip1.jpg";
import image2 from "../assets/images/trip2.jpg";
import image3 from "../assets/images/trip3.jpg";

export default {
  data() {
    return {
      trips: [
        {
          name: "Green islands, Indonesia",
          image: image1,
          price: "700$",
          date: "June 1",
          icons: [
            {
              name: "mdi-account-tie-hat",
              text: "Skipper optional"
            },
            {
              name: "mdi-seal",
              text: "super owner"
            }
          ]
        },
        {
          name: "Caribbean island of Grenada",
          image: image2,
          price: "850$",
          date: "June 1",
          icons: [
            {
              name: "mdi-account-tie-hat",
              text: "Skipper optional"
            }
          ]
        },
        {
          name: "Costa Brava, Spain",
          image: image3,
          price: "800$",
          date: "August 10",
          icons: [
            {
              name: "mdi-account-tie-hat",
              text: "Skipper optional"
            }
          ]
        }
      ]
    };
  }
};
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
