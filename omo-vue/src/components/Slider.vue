<template>
    <div id="slider">
        <carousel-3d>
          <slide :index="0">
            Slide 1 Content
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
        </carousel-3d>
    </div>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';

  export default {
    name: 'slider-component',
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
