<template >
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
      <v-flex xs12 md10>
        <v-container>
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
                <v-container class="grey lighten-5">
                  <v-row no-gutters>
                    <template>
                      <v-col>
                        <call-component></call-component>
                      </v-col>

                      <v-col>
                        <call-component></call-component>
                      </v-col>        
                    </template>
                  </v-row>

                  <v-row no-gutters>
                    <template>
                      <v-col>
                        <call-component></call-component>
                      </v-col>
                      <v-col>
                        <call-component></call-component>
                      </v-col>
                      <v-col>
                        <call-component></call-component>
                      </v-col>
                      <v-col>
                        <call-component></call-component>
                      </v-col> 
                    </template>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>

            <v-col cols="10">
              <v-card>
                <v-card-text>
                  <span>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583.0596040955406!2d126.99702382155682!3d37.48151319297208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1075ae3068b%3A0xa44633ced695d187!2z67Cp67Cw7Jet!5e0!3m2!1sko!2skr!4v1585642643930!5m2!1sko!2skr" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </span>
                </v-card-text>
              </v-card>
            </v-col>


            <v-col cols="10">
              <div class="my-2" id="share_btn" >
                <v-btn v-on:click.native="say('hi!')" text x-large>URL 공유하기 🤗</v-btn>
                <v-btn color="success" fab medium dark>
                  <i class="material-icons" style="font-size:30px;">share</i>
                </v-btn>
              </div>


            <social-sharing url="https://vuejs.org/" inline-template>
              <div>
                <font-awesome-icon icon="user-secret" />
                <font-awesome-icon :icon="['fab', 'font-awesome']" />
                <network network="facebook">
                  <i class="fab fa-facebook"></i>
                  <i class="fa fa-fw fa-facebook"></i> Facebook
                </network>
                <network network="googleplus">
                  <i class="fa fa-fw fa-google-plus"></i> Google +
                </network>
                <network network="linkedin">
                  <i class="fa fa-fw fa-linkedin"></i> LinkedIn
                </network>
                <network network="twitter">
                  <i class="fa fa-fw fa-twitter"></i> Twitter
                </network>
                <network network="whatsapp">
                  <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
                </network>
              </div>
            </social-sharing>

            </v-col>

          </v-row>
        </v-container>
      </v-flex>
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


    methods:{
      say:function(){
        alert('cd');
      }
    }

    
  }
</script>

<style>
  .v-application--wrap {
    min-height: 0vh !important;
  }

  .v-slide-group__next, .v-slide-group__prev{
    min-width: 0px !important;
  }

  .main_img{
    width : 100%;
    text-align : center;
  }
  
</style>