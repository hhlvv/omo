<template>
    <div id="app">
        <v-app id="show_inspire">
            
            <v-container
                v-for="type in types"
                :key="type"
                class="grey lighten-4"
                fluid
            >
                <v-row>
                <v-spacer></v-spacer>
                <v-col
                    v-for="card in cards"
                    :key="card"
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-card>
                    <v-img
                        :src="`https://picsum.photos/200/300?image=${getImage()}`"
                        height="300px"
                    >
                        <span
                        class="headline white--text pl-4 pt-4"
                        v-text="card.title"
                        ></span>
                    </v-img>
        
                    <v-card-actions class="white justify-center">
                        <v-btn
                        v-for="(social, i) in socials"
                        :key="i"
                        :color="social.color"
                        class="white--text"
                        fab
                        icon
                        small
                        >
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>


<script>
  export default {
    name: 'show-component',

    data: () => ({
    types: ['Places to Be', 'Places to See'],
    cards: ['Good', 'Best', 'Finest'],
    socials: [
      {
        icon: 'fab fa-facebook',
        color: 'indigo',
      },
      {
        icon: 'fab fa-linkedin',
        color: 'cyan darken-1',
      },
      {
        icon: 'fab fa-instagram',
        color: 'red lighten-3',
      },
    ],
  }),

    methods: {
        getImage () {
        const min = 550
        const max = 560

        return Math.floor(Math.random() * (max - min + 1)) + min
        },
    }
  }
</script>
