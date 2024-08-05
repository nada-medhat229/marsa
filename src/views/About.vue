<script setup>
import Header from "../components/Header.vue";
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <section>
    <Header />
    <h2 class="main-heading">About Us</h2>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            src="/src/assets/images/yacht1.jpg"
            alt="Online Tutoring"
            style="max-height: 400px; max-width: 100%;    border: 15px solid #dcede8;"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card flat>
           
            <div class="ps-3">
              <h1 class="word-spacing">
                We Have The Best yacht Available in your City
              </h1>
            </div>
            <v-card-text>
              <p class="text-subtitle-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <v-row class="py-5 text-h6">
                <v-col cols="12" sm="6">
                  <v-icon left>mdi-laptop</v-icon>
                  Online Tutoring
                </v-col>
                <v-col cols="12" sm="6">
                  <v-icon left>mdi-book-multiple</v-icon>
                  50+ tours
                </v-col>
                <v-col cols="12" sm="6">
                  <v-icon left>mdi-infinity</v-icon>
                  Lifetime Access
                </v-col>
                <v-col cols="12" sm="6">
                  <v-icon left>mdi-lightbulb-on</v-icon>
                  Activate
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.word-spacing {
  word-spacing: 0.4em;
  width: 80%;
  @media only screen and (max-width: 400px) {
    width: 100%;
    word-spacing: normal;
  }
}
</style>
