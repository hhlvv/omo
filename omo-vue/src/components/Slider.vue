<template>
    <div id="slider">
        <carousel-3d :controls-visible="true" 
                      :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'"
                      :controls-width="30" :contols-height="60" :clickable="false"
        >
          <slide :index="0">
            slide 1
          </slide>
          <slide :index="1">
            Slide 2 Content
          </slide>
          <slide :index="2">
            Slide 3 Content
          </slide>
          <slide :index="3">
            Slide 4 Content
          </slide>
          <slide :index="4">
            Slide 5 Content
          </slide>
        </carousel-3d>

      <div id ="slide_select">
        <v-app id="inspire">
          <v-sheet
            class="mx-auto"
            elevation="8"
            max-width="800"
          >
            <v-slide-group
              v-model="model"
              class="pa-4"
              show-arrows
            >
              <v-slide-item
                v-for="n in 15"
                :key="n"
                v-slot:default="{ active, toggle }"
              >
                <v-card
                  :color="active ? 'primary' : 'grey lighten-1'"
                  class="ma-4"
                  height="200"
                  width="100"
                  @click="toggle"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        v-text="'mdi-close-circle-outline'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
        
            <v-expand-transition>
              <v-sheet
                v-if="model != null"
                color="grey lighten-4"
                height="200"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <h3 class="title">Selected {{ model }}</h3>
                </v-row>
              </v-sheet>
            </v-expand-transition>
          </v-sheet>
        </v-app>
      </div>


    </div>

</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';

  export default {
    name: 'slider-component',
    el: '#slide_select',
    data: () => ({
      model: null,
    }),
    methods: {
      showTitle () {
        this.title = 'slider Component'
      },
      component : {
        Carousel3d,
        Slide
      }
    }
  }
</script>
