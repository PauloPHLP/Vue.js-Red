<template>
  <div class="red-content-wrapper" :style="{ backgroundColor }">
    <div>
      <div>
        <h1>Welcome to the Red app!</h1>
        <p>Please, select a Red shade</p>
      </div>
    </div>
    <ColorSelector />
    <slot name="children" />
  </div>
</template>

<script>
import ColorSelector from './ColorSelector.vue'

export default {
  name: 'ContentWrapper',
  components: {
    ColorSelector
  },
  props: {
    backgroundColor: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.red-content-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 24px;
  text-align: center;
}
</style>
