<template>
  
  <v-carousel
    height="650"
    :show-arrows="false"
    cycle
    hide-delimiters
    class="carouselmargin"
  >
  <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.image"
            class="fititem"
            cover
          >
          <div id="overlay" >
</div>
              <div class="d-flex fill-height justify-center align-center">
                <div class="text-white text-center textheader_pos text-capitalize">
                  {{ slide.text }}
                </div>

              </div>
        
          </v-carousel-item>
  </v-carousel>
</template>
<script>
import sifari from "../assets/images/yah.jpg";
import image from "../assets/images/yaht.jpg";
import fishing from "../assets/images/fishing.jpg";

  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          {image:image,text: 'diving'},
          {image:sifari,text: 'safari'},
          {image:fishing,text: 'fishing'},
         
     
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
.carouselmargin{
  margin-top: -90px;
}
.textheader_pos {
  position: absolute;
  bottom: 50%;
  right: 20%;
  left: 20%;
  font-size: 30px;
  z-index: 555;
}
#overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.221);
  z-index: 2;
  cursor: pointer;
}
@media (max-width: 680px) { 
  .carouselmargin{
    height: 280px !important;
  }
}
</style>