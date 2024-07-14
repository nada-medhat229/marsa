<script setup>
import Header from '../components/Header.vue';
import YachtItem from '../components/YachtItem.vue';
import {useYachtStore} from '../stores/yachts';
import {ref, onBeforeMount } from 'vue';

const yachtStore = useYachtStore()

const msearchKey = ref('')
const mtypeKey = ref('')

function searchByKey(){
  msearchKey.value = event.target.value
  yachtStore.setSearchKey(msearchKey.value)
}
function filterByType(){
  mtypeKey.value = event.target.value
  yachtStore.setTypeKey(event.target.value)
}
function resetFilters(){
  msearchKey.value = ''
  mtypeKey.value = ''
  yachtStore.resetFilter()
}

onBeforeMount(()=>{
  window.scrollTo(0,0)
})

</script>

<template>
  <main>
    <Header/>
    <!-- All Yachts -->
      <section class="section" >
        <h2 class="main-heading">Yachts</h2>
        <div class="row filters">
          <div class="flex-row">
            <div class="filter">
              Filters <img src="../assets/images/filter.png" alt="">
            </div>
            <div class="searchbar">
              <input type="text" placeholder="Search by Title" v-model="msearchKey" @input="searchByKey()">
              <img src="@/assets/images/search.png" alt="">
            </div>
          </div>
          <div class="flex-row">
            <select name="" id=""  @input="filterByType()" v-model="mtypeKey">
              <option value="" selected>All Type</option>
              <option value="type1">type1</option>
              <option value="type2">type2</option>
              <option value="type3">type3</option>
            </select>
            <button class="clear-btn" @click="resetFilters()">Clear Filter</button>
          </div>
        </div>
        <div class="row">
          <div class="cards">
            <h2 v-if="yachtStore.filteredYachts.length<=0">No Result Found</h2>
            <YachtItem v-for="(yacht, index) in yachtStore.filteredYachts" :key="index" :yacht="yacht"/>
          </div>
        </div>
      </section>
  </main>
</template>

<style lang="scss" scoped>


.section{
  margin-bottom: 30px;
  .main-heading{
    width: 100%;
    padding: 20px 0;
    text-align: center;
    background-color: #00425A;
    color: #fff;
  }
  .cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 10px;
    justify-items: center;
    padding: 20px 10px;
    margin-bottom: 30px;
    @media only screen and (max-width:800px){
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px;
    }
  }
}

.flex-row{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media only screen and (max-width:580px){
    width: 100%;
  }
}
.filters{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  @media only screen and (max-width:580px){
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .filter{
    display: flex;
    align-items: center;
    background-color: #00425A;
    color: #fff;
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 500;
    margin-right: 20px;
    border-radius: 5px;
    @media only screen and (max-width:840px){
      font-size: 14px;
    }

    img{
      width: 25px;
      margin-left: 15px;
      @media only screen and (max-width:840px){
        width: 16px;
      }
    }
  }
  .searchbar{
    display: flex;
    align-items: center;
    margin-right: 10px;
    width: 340px;
    @media only screen and (max-width:840px){
      width: 100%;
    }
    @media only screen and (max-width:580px){
      margin-right: 0px;
    }
    input{
      width: 100%;
      font-size: 16px;
      padding: 5px 10px;
      padding-right: 30px;
      border-radius: 20px;
      border: 1px solid #00425A;
      box-shadow: 0 0 10px #00000050;
      @media only screen and (max-width:840px){
        font-size: 14px;
      }
    }
    img{
      margin-left: -25px;
    }
  }

  select{
      width: 200px;
      font-size: 16px;
      padding: 5px;
      padding-right: 30px;
      border-radius: 5px;
      border: none;
      box-shadow: 0 0 10px #00000050;
      background-color: #00425A;
      color: #fff;
      @media only screen and (max-width:840px){
        width: 100%;
        font-size: 14px;
      }
  }


  .clear-btn{
    min-width: max-content;
    background-color: #00425A;
    color: #fff;
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 500;
    margin-left: 20px;
    border-radius: 5px;
    border: none;
    @media only screen and (max-width:840px){
      padding: 5px 10px;
      font-size: 14px;
      margin-left: 10px;
    }
  }
}

</style>
