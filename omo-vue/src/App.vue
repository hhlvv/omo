<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
    />

    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
    >
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title><v-icon>{{ svgPath }}</v-icon> Welcome my project!</v-toolbar-title>
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
                <span>사진 첫 메인</span>
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
            <v-card>
              <v-card-text>
                <span>앨범</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="10">
            <span>문자보내기_컴포넌트 사용</span>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer :inset="footer.inset"
      app>
      <span class="px-4">@made Hyelim💕</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mdiAccount} from '@mdi/js'

  export default {
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