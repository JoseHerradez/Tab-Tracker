<template>
  <panel title="Youtube Video">
    <youtube :video-id="youtubeID" :player-width="500" :player-height="262"></youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'youtubeID'
  ],
  components: {
    Panel
  }
}
</script>

<style>

</style>
