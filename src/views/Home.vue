<template>
  <ContentWrapper backgroundColor="darkgray">
    <template v-slot:children>
      <div class="color-container">
        <h3>Initial page</h3>
      </div>
    </template>
  </ContentWrapper>
</template>

<script lang="ts">
import ContentWrapper from '../components/ContentWrapper.vue'

export default {
  name: 'Home',
  components: {
    ContentWrapper
  }
}
</script>
