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
export default {
  data() {
    return {
      destinations: [
        { name: "Croatia", image: "src/assets/images/city1.jpeg" },
        { name: "Greece", image: "src/assets/images/city2.jpeg" },
        { name: "Spain", image: "src/assets/images/city3.jpeg" },
        { name: "Italy", image: "src/assets/images/city4.jpeg" },
        { name: "France", image: "src/assets/images/city5.jpeg" },
        { name: "Thailand", image: "src/assets/images/city6.jpeg" },
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
