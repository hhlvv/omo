<template>
  <v-app id="sandbox">
    <v-app-bar>
      <v-toolbar-title>
        <v-btn icon color="pink">
          <v-icon>mdi-heart</v-icon>
        </v-btn> 
        Welcome my project!
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="10">
            <v-card>
              <v-card-text>
                <img class="main_img" src="@/assets/img.jpg" >
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="10">
            <v-card>
              <slider-component></slider-component>
            </v-card>
          </v-col>

          <v-col cols="10">
            <v-card>
              <show-component></show-component>
            </v-card>
          </v-col>


          <v-col cols="10">
            <v-card>
              <gallery-component></gallery-component>
            </v-card>
          </v-col>
          
          <v-col cols="10">
            <v-card>
              <v-card-text>
                <span>앨범</span>
              </v-card-text>
            </v-card>
          </v-col>


          <v-col cols="10">
            <v-card>
              <v-card-text>
                <span>위치</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="10">
            <div class="my-2">
              <v-btn text x-large>URL 공유하기 🤗</v-btn>
              <v-btn color="success" fab medium dark>
                <i class="material-icons" style="font-size:30px;">share</i>
              </v-btn>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </v-content>

    <v-footer :inset="footer.inset"
      app>
      <span class="px-4">@made Hyelim💕
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import {mdiAccount} from '@mdi/js'

  export default {
    components : {

    },

    data: () => ({
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      },
      footer: {
        inset: true,
      },
      svgPath :mdiAccount
    }),
  }
</script>

<style scoped>
  .v-application--wrap{
    min-height: 1px;
  }

  .main_img{
    width : 100%;
    text-align : center;
  }
</style>