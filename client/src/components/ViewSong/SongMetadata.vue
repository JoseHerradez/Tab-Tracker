<template>
  <v-card>
    <v-container fluid grid-list-lg>
      <v-layout>
        <v-flex xs7>
          <div>
            <div class="headline">{{song.title}}</div>
            <div>{{song.album}} - {{song.artist}}</div>
            <div class="grey--text">{{song.genre}}</div>
          </div>
          <v-card-actions>
            <v-btn flat :to="{name: 'song-edit'}">Edit</v-btn>
          </v-card-actions>
        </v-flex>
        <v-flex xs5>
          <v-card-media :src="song.albumImgUrl" height="300px" contain></v-card-media>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card> 
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style>

</style>
