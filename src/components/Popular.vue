<template>
  <v-container>
    <v-row justify="center" class="my-5">
      <v-col cols="12">
        <h2 class="text-center maincolor pb-5">Explore Popular Destination</h2>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        sm="6"
        v-for="(destination, index) in destinations"
        :key="index"
      >
        <v-card>
          <v-img :src="destination.image" height="200px" cover>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <div class="text-white headline ">{{ destination.name }}</div>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import image1 from "../assets/images/cit.jpg";
import image2 from "../assets/images/city2.jpeg";
import image3 from "../assets/images/city3.jpeg";
import image4 from "../assets/images/city4.jpeg";
import image5 from "../assets/images/city5.jpeg";
import image6 from "../assets/images/city6.jpeg";

export default {
  data() {
    return {
      destinations: [
        { name: "el gouna", image: image1 },
        { name: "sharm el sheikh", image:image2 },
        { name: "el sokhna", image: image3 },
        { name: "northcoast", image: image4 },
        { name: "alexandria", image: image5 },
        { name: "somabay", image: image6 },
      ],
    };
  },
};
</script>

<style>
.headline {
  font-size: 24px;
  font-weight: bold;
}
</style>
