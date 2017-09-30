<template>
  <panel :title="title">
    <v-text-field multi-line readonly :value="info" textarea full-width />
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'title',
    'info'
  ],
  components: {
    Panel
  }
}
</script>

<style>

</style>
