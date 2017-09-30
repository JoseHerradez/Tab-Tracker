<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field label="Title" v-model="song.title" required :rules="[required]"></v-text-field>
        <v-text-field label="Artist" v-model="song.artist" required :rules="[required]"></v-text-field>
        <v-text-field label="Genre" v-model="song.genre"></v-text-field>
        <v-text-field label="Album" v-model="song.album" required :rules="[required]"></v-text-field>
        <v-text-field label="Album Image Url" v-model="song.albumImgUrl" required :rules="[required]"></v-text-field>
        <v-text-field label="Youtube ID" v-model="song.youtubeID"></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-text-field label="Lyrics" multi-line v-model="song.lyrics"></v-text-field>
        <v-text-field label="Tab" multi-line v-model="song.tab"></v-text-field>
      </panel>

      <v-alert class="ml-4" :value="error" transition="scale-transition" error>{{error}}</v-alert>
      <v-btn flat @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImgUrl: null,
        youtubeID: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'This field is required'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill all the required fields.'
        return
      }

      try {
        await SongsService.post(this.song)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
