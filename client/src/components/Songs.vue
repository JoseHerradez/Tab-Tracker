<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>
      <panel title="Songs">
        <v-btn fab light small absolute right middle slot="action" :to="{name: 'song-create'}">
          <v-icon>add</v-icon>
        </v-btn>

        <v-layout row wrap>
            <v-flex xs12 sm4 v-for="song in songs" :key="song.title" class="mt-2">
              <v-card>
                <v-card-media :src="song.albumImgUrl" height="300px" />
                <v-card-title primary-title>
                  <div class="text-xs-left">
                    <h3 class="headline mb-0">{{song.title}}</h3>
                    <div>{{song.artist}} - {{song.album}}</div>
                    <div class="grey--text">{{song.genre}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat :to="{name: 'song', params: {songId: song.id}}">View</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
        </v-layout>
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
