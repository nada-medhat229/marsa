<template>
    <v-app>
      <Header />
      <v-container>
        <v-row class="detail py-5 my-3">
          <v-col cols="8">
            <v-img :src="mainImage" class="main-image" cover></v-img>
            <div class="d-flex flex-nowrap overflow-x-scroll">
              <v-col cols="3" v-for="(image, index) in images" :key="index">
                <v-img
                  :src="image"
                  class="thumbnail"
                  @click="mainImage = image"
                  cover
                ></v-img>
              </v-col>
            </div>
  
            <div>
              <h2 class="title">Description</h2>
              <h3 class="subtitle">42' Azimut Yacht</h3>
              <p class="description">
                Whether you are a couple that wants an exclusive, romantic day at
                sea or a group of friends that want to enjoy a day exploring the
                Riviera Maya coast, swimming, snorkeling, or celebrating a special
                occasion, this yacht is a perfect choice. Our 42' Azimut features
                plenty of shaded seating areas and comfortably fits up to 15
                guests onboard with a big spacious sundeck and a swimming platform
                for easy access in and out of the water makes it the perfect yacht
                for you and your friends or family to enjoy a half or full-day
                cruise through the warm Caribbean Sea. Our friendly 3-person crew
                will cater to all your needs during our private charter so you can
                just relax, swim, snorkel, sip cocktails, and enjoy. This yacht
                comes equipped with a very spacious and open indoor
                air-conditioned lounge area with sofas and a flat-screen TV, a
                fully equipped kitchen, two bedrooms, and two bathrooms with an
                enclosed shower. During your private charter, our crew can prepare
                freshly made guacamole, seafood ceviche, and also a delicious
                barbecue on the onboard grill. You can choose to eat your lunch
                inside in a cool environment or outside enjoying the view of the
                stunning blue ocean. It’s all up to you this is your tour! Let us
                show you a yacht tour of a lifetime and give you unforgettable
                memories of your cruise through the spectacular turquoise waters
                of Mexico’s Riviera Maya coastline. You will have an amazing time
              </p>
            </div>
          </v-col>
          <v-col cols="4">
            <v-card class="mx-auto">
              <v-card-title class="actionbtn text-white mt-0 mb-5 text-center">
                Check Availability
              </v-card-title>
              <v-card-text>
                <v-form>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="When?"
                        v-model="form.date"
                        type="date"
                        variant="outlined"
                        :rules="[checkDuplicateDate]"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        hide-details="auto"
                        :items="tours"
                        label="Which Tour?"
                        v-model="form.tour"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        hide-details="auto"
                        label="Adults"
                        type="number"
                        v-model="form.adults"
                        min="0"
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        hide-details="auto"
                        label="Children"
                        type="number"
                        v-model="form.children"
                        min="0"
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        hide-details="auto"
                        label="Name"
                        variant="outlined"
                        v-model="form.name"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        hide-details="auto"
                        label="Email"
                        v-model="form.email"
                        type="email"
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        hide-details="auto"
                        label="Phone number"
                        v-model="form.phone"
                        type="tel"
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                     
                      <v-card-actions class="actionbtn justify-center rounded mt-2 text-center text-white">
                        <v-btn class="text-white text-center" @click="checkAvailability">
                          CHECK AVAILABILITY
                        </v-btn>
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const menu = ref(false);
  import Header from "../components/Header.vue";
  import mainImg from "../assets/images/trip1.jpg";
  import img1 from "../assets/images/trip1.jpg";
  import img2 from "../assets/images/trip2.jpg";
  import img3 from "../assets/images/trip3.jpg";
  import img4 from "../assets/images/city4.jpeg";
  import img5 from "../assets/images/city3.jpeg";
  const mainImage = ref(mainImg);
  const images = ref([img1, img2, img3, img4, img5]);
  const form = ref({
    date: "",
    tour: "",
    adults: 0,
    children: 0,
    name: "",
    email: "",
    phone: "",
  });
  const valid = ref(false);
  const existingDates = ref(["2024-07-11", "2024-07-12"]);
  const tours = ref(["Tour 1", "Tour 2", "Tour 3"]);
  
  const checkDuplicateDate = (value) => {
    if (existingDates.value.includes(value)) {
      return "This date is already taken.";
    }
    return true;
  };
  
  const checkAvailability = () => {
    // Handle form submission
    console.log(form.value);
  };
  </script>
  
  <style scoped>
  .main-image {
    width: 100%;
    height: 350px;
  }
  
  .thumbnail {
    cursor: pointer;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 0;
  }
  
  .subtitle {
    font-size: 20px;
    margin-top: 0;
  }
  
  .description {
    font-size: 16px;
  }
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  </style>
  