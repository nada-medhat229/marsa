<template>
  <main>
    <Header/>
    <v-container>
      <v-row class="py-5 my-5">
        <v-col cols="12" md="3" sm="5">
          <h3 color="#616161">Boat type</h3>
          <v-list class="checkitems ">
            <v-list-item
              v-for="boatType in yachtStore.boatTypes"
              :key="boatType"
              @click="() => setSelectedBoatType(boatType)"
              class="px-0"
            >
              <v-list-item-action>
                <v-checkbox
                  v-model="selectedBoatType"
                  :value="boatType"
                  hide-details="auto"
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item>
                <v-list-item-title>{{ boatType }}</v-list-item-title>
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="9" sm="7">
          <v-row>
            <v-col
              v-for="boat in filteredBoats"
              :key="boat.name"
              cols="12"
              lg="4"
            >
              <v-card>
                <v-img :src="boat.image" aspect-ratio="16/9" height="200" cover></v-img>
                <v-card-title>{{ boat.name }}</v-card-title>
                <v-card-subtitle>{{ boat.description }}</v-card-subtitle>
                <v-card-text>
                  <p>{{ boat.skipper }}</p>
                  <p>{{ boat.people }} people · {{ boat.cabins }} cabins · {{ boat.berths }} berths · {{ boat.length }}</p>
                  <p>{{ boat.price }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import Header from '../components/Header.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useYachtStore } from '../stores/yachts';

const router = useRouter();
const yachtStore = useYachtStore();
const selectedBoatType = ref(null);

const setSelectedBoatType = (boatType) => {
  selectedBoatType.value = selectedBoatType.value === boatType ? null : boatType;
};

const filteredBoats = computed(() => {
  if (!selectedBoatType.value) {
    return yachtStore.boats;
  }
  return yachtStore.boats.filter(boat => boat.type === selectedBoatType.value);
});
</script>

<style scoped>
.v-list-item {
  cursor: pointer;
}

.v-list-item:hover {
  background-color: #f0f0f0;
}

.v-card {
  transition: transform 0.3s;
}

.v-card:hover {
  transform: translateY(-10px);
}
@media (max-width: 599px) { 
  .checkitems{
    display:flex
    
}
}
</style>

<style>
.checkitems .v-list-item__content {
  display: flex !important;
  align-items: center;
}
.checkitems .v-list-item:hover {
  background-color: transparent;
  background-color: #fff;
}
.checkitems .v-checkbox .v-selection-control {
  min-height: auto;
}
.checkitems .v-list-item--density-default.v-list-item--one-line {
    min-height: auto;
}
.v-list-item:hover > .v-list-item__overlay {
  opacity: 0 !important;
}
.v-list-item--variant-text .v-list-item__overlay {
  background: none;
}
</style>
