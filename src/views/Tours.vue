<script setup>
import Header from "../components/Header.vue";
import TourItem from "../components/TourItem.vue";
import { useTourStore } from "../stores/tours";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const tourStore = useTourStore();

const msearchKey = ref("");
const mtypeKey = ref("");

function searchByKey() {
  msearchKey.value = event.target.value;
  tourStore.setSearchKey(msearchKey.value);
}
function filterByType() {
  mtypeKey.value = event.target.value;
  tourStore.setTypeKey(event.target.value);
}
function resetFilters() {
  msearchKey.value = "";
  mtypeKey.value = "";
  tourStore.resetFilter();
}
function detail(id) {
  router.push(`/detail/${id}`);
}
onBeforeMount(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <main>
    <Header />
    <!-- Tours -->
    <section class="section">
      <h2 class="main-heading">Tours</h2>
      <v-container>
        <div class="row filters">
          <div class="flex-row"></div>
          <div class="flex-row">
            <!-- <select name="" id="" @input="filterByType()" v-model="mtypeKey">
            <option value="" selected>All Categories</option>
            <option value="c1">category 1</option>
            <option value="c2">category 2</option>
            <option value="c3">category 3</option>
          </select> -->
          </div>
        </div>
        <v-row class="py-5 justify-space-between align-center">
          <v-col
            cols="2"
            md="3"
            class="text-center"
          >
          <div class="filter">
            Filters
            <!-- <img src="../assets/images/filter.png" alt="" /> -->
          </div>
          </v-col>
          <v-col
            cols="6"
            md="6"
            class="text-center"
          >
          <div class="searchbar rounded border outline-0 d-flex align-center justify-space-between px-3">
            <input
              type="text"
              placeholder="Search by Title"
              v-model="msearchKey"
              @input="searchByKey()"
              class="pa-3 border-none w-75"
            />
       

            <img src="@/assets/images/search.png" alt="" />
          </div>
          </v-col>
          <v-col
            cols="4"
            md="3"
            class="text-center"
          >
          
          <button class="clear-btn" @click="resetFilters()">
            Clear Filter
          </button>
          </v-col>
         
         
        </v-row>
        <div class="row" style="text-align: center"></div>
        <h2 v-if="tourStore.filteredTours.length <= 0">No Result Found</h2>

        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(trip, index) in tourStore.filteredTours"
            :key="index"
          >
            <v-card>
              <v-img :src="trip.imgUrl" height="200px" cover>
                <v-row class="fill-height ma-0" align="end" justify="end">
                  <v-chip
                    class="ma-2 text-white rounded-lg position-absolute top-0"
                    >{{ trip.pricePerPerson }}</v-chip
                  >
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
              <v-card-subtitle class="py-1">{{ trip.description }}</v-card-subtitle>
              <v-card-actions class="actionbtn mt-2">
                <v-btn block @click="detail(trip.id)">Book Now</v-btn>
              </v-card-actions>
            </v-card>
          </v-col></v-row
        >
      </v-container>
    </section>
  </main>
</template>

<style lang="scss" scoped>
*:focus {
    outline: none;
}
.section {
  margin-bottom: 30px;
  .main-heading {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    background: #1f8a6f28;
    color: #00425a;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 10px;
    justify-items: center;
    padding: 20px 10px;
    margin-bottom: 30px;
    @media only screen and (max-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px;
    }
  }
}

.flex-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media only screen and (max-width: 580px) {
    width: 100%;
  }
}
// .filters {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   border-bottom: 1px solid #eee;
//   @media only screen and (max-width: 580px) {
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//   }

//   .filter {
//     display: flex;
//     align-items: center;
//     background-color: #00425a;
//     color: #fff;
//     padding: 5px 10px;
//     font-size: 16px;
//     font-weight: 500;
//     margin-right: 20px;
//     border-radius: 5px;
//     @media only screen and (max-width: 840px) {
//       font-size: 14px;
//     }

//     img {
//       width: 25px;
//       margin-left: 15px;
//       @media only screen and (max-width: 840px) {
//         width: 16px;
//       }
//     }
//   }
//   .searchbar {
//     display: flex;
//     align-items: center;
//     margin-right: 10px;
//     width: 340px;
//     @media only screen and (max-width: 840px) {
//       width: 100%;
//     }
//     @media only screen and (max-width: 580px) {
//       margin-right: 0px;
//     }
//     input {
//       width: 100%;
//       font-size: 16px;
//       padding: 5px 10px;
//       padding-right: 30px;
//       border-radius: 20px;
//       border: 1px solid #00425a;
//       box-shadow: 0 0 10px #00000050;
//       @media only screen and (max-width: 840px) {
//         font-size: 14px;
//       }
//     }
//     img {
//       margin-left: -25px;
//     }
//   }

//   select {
//     width: 200px;
//     font-size: 16px;
//     padding: 5px;
//     padding-right: 30px;
//     border-radius: 5px;
//     border: none;
//     box-shadow: 0 0 10px #00000050;
//     background-color: #00425a;
//     color: #fff;
//     @media only screen and (max-width: 840px) {
//       width: 100%;
//       font-size: 14px;
//     }
//   }

//   .clear-btn {
//     min-width: max-content;
//     background-color: #00425a;
//     color: #fff;
//     padding: 5px 10px;
//     font-size: 16px;
//     font-weight: 500;
//     margin-left: 20px;
//     border-radius: 5px;
//     border: none;
//     @media only screen and (max-width: 840px) {
//       padding: 5px 10px;
//       font-size: 14px;
//       margin-left: 10px;
//     }
//   }
// }
</style>
