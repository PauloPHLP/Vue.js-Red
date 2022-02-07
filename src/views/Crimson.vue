<template>
  <ContentWrapper backgroundColor="crimson">
    <template v-slot:children>
      <div class="color-container">
        <h3>Crimson page</h3>
      </div>
    </template>
  </ContentWrapper>
</template>

<script lang="ts">
import ContentWrapper from '../components/ContentWrapper.vue'

export default {
  name: 'Crimson',
  components: {
    ContentWrapper
  }
}
</script>
