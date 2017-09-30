<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn fab light small absolute right middle slot="action" :to="{name: 'song-create'}">
          <v-icon>add</v-icon>
        </v-btn>

        <div v-for="song in songs" :key="song.title">
          <v-layout>
            <v-flex xs6>
              {{song.title}}
              {{song.artist}}
              {{song.album}}

              <v-btn dark :to="{name: 'song', params: {songId: song.id}}">View</v-btn>
            </v-flex>

            <v-flex xs6>
              <img :src="song.albumImageUrl"></img>
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

</style>
