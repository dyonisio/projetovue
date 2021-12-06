
<template>
  <v-app>
    <SystemBar></SystemBar>

    <v-app-bar class="red darken-3 white--text">
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Viagens.com</v-toolbar-title>
    </v-app-bar>

    <ToolBar></ToolBar>

    <v-navigation-drawer
      v-model="drawer"
      class="red darken-3 white--text"
      abolute
    >
      <v-card
      class="mx-auto"
      max-width="300"
      tile
    >
      <v-list flat class="red darken-3 white--text">
        <v-list-item-group
          v-model="selectedItem"
          color="white"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    </v-navigation-drawer>
    
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    
    <Footer></Footer>
    <BottomNavigation></BottomNavigation>
  </v-app>
</template>

<script>
  import SystemBar from '@/components/SystemBar'
  import Footer from '@/components/Footer'
  import BottomNavigation from '@/components/BottomNavigation'
  import ToolBar from '@/components/ToolBar'

  export default {
    data: () => ({ 
      drawer: null,
      selectedItem: 1,
      items: [
        { text: 'Exterior', icon: 'mdi-airplane', link: '/exterior' },
        { text: 'Nacional', icon: 'mdi-city', link: '/nacional' },
        { text: 'Pacotes', icon: 'mdi-package-variant', link: '/pacotes' },
        { text: 'Hotéis', icon: 'mdi-sleep', link: '/hoteis' },
      ],
    }),
    computed: {
      localAttrs () {
        const attrs = {}
        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
      places(){
        return this.$store.state.places
      }
    },
    components: {
      SystemBar,
      Footer,
      BottomNavigation,
      ToolBar
    }
  }
</script>