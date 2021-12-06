<template>
    <v-bottom-navigation class="red darken-4" v-model="value">
      <v-btn value="favourites">
        <span class="white--text">Favoritos</span>

        <v-icon color="white">mdi-heart</v-icon>
      </v-btn>

      <v-btn value="home">
        <span class="white--text">Home</span>

        <v-icon color="white">mdi-home</v-icon>
      </v-btn>

      <v-btn value="travels">
        <span class="white--text">Viagens</span>

        <v-icon color="white">mdi-map-marker</v-icon>
      </v-btn>

      <v-btn value="messages">
        <span class="white--text">Mensagens</span>

        <v-icon color="white">mdi-message</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>