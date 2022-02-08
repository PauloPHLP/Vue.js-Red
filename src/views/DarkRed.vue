<template>
  <ContentWrapper backgroundColor="darkred">
    <template v-slot:children>
      <div class="color-container">
        <h3>Dark Red page</h3>
      </div>
    </template>
  </ContentWrapper>
</template>

<script lang="ts">
import ContentWrapper from '../components/ContentWrapper.vue'

export default {
  name: 'DarkRed',
  components: {
    ContentWrapper
  }
}
</script>
