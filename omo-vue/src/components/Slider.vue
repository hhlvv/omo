<template>
    <div id="slider" height="100%">
      <div id ="slide_select">
        <v-app id="inspire">
          <v-sheet
            class="mx-auto"
            max-width="100%"
          >
            <v-slide-group
              v-model="model"
              class="pa-4"
              show-arrows
            >
              <v-slide-item
                v-for="n in 10"
                :key="n"
                v-slot:default="{ active, toggle }"
              >
                <v-card
                  :color="active ? '#FFCDD2' : 'white lighten-1'"
                  class="ma-4"
                  height="150"
                  width="150"
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
                        v-text="'mdi-emoticon-happy'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
        
            <v-expand-transition>
              <v-sheet
                v-if="model != null"
                color="red lighten-3"
                height="250"
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
