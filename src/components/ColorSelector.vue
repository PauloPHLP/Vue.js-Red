<template>
  <div class="red-buttons-container">
    <button class="color-selector initial" @click="handleOnClick('/red')">Initial</button>
    <button class="color-selector crimson" @click="handleOnClick('/red/crimson')">Crimson</button>
    <button class="color-selector dark-red" @click="handleOnClick('/red/dark-red')">Dark red</button>
  </div>
</template>

<script>
export default {
  name: 'ColorSelector',
  methods: {
    handleOnClick (route) {
      this.$router.push({ path: route })
    }
  }
}
</script>

<style lang="scss" scoped>
.red-buttons-container {
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  .color-selector {
    width: 200px;
    height: 56px;
    border-radius: 4px;
    border: 1px solid white;
    font-weight: 600;
    text-transform: uppercase;
    color: white;

    &:hover {
      cursor: pointer;
    }

    &.initial {
      background-color: darkgray;
    }

    &.crimson {
      background-color: crimson;
    }

    &.dark-red {
      background-color: darkred;
    }
  }
}
</style>
