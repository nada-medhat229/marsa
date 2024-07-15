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
          <v-img :src="destination.image" height="200px" cover class="imgscale opacity-90 ">
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
import image1 from "../assets/images/elgouna.jpg";
import image2 from "../assets/images/sharm.jpg";
import image3 from "../assets/images/sokhna.png";
import image4 from "../assets/images/northcoast.png";
import image5 from "../assets/images/Alex.jpg";
import image6 from "../assets/images/hurghada.jpg";

export default {
  data() {
    return {
      destinations: [
        { name: "Gouna", image: image1 },
        { name: "Sharm el sheikh", image:image2 },
        { name: "Ain el sokhna", image: image3 },
        { name: "North coast", image: image4 },
        { name: "Alexandria", image: image5 },
        { name: "Hurghada", image: image6 },
      ],
    };
  },
};
</script>

<style>
.headline {
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
}
.imgscale:hover{
  opacity: 1 !important;
  transform: scale(1.2);
  transition: all .5s;
  cursor: pointer;
}
</style>
