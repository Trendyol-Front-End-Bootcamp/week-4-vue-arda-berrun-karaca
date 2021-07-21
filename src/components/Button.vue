<template lang = "pug">
button(v-bind="$attrs" v-on="$listeners")
  slot
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
@import '../assets/scss/_helpers.scss';

  button {
    min-width: 80px;
    padding: 10px 14px;
    color: $text-white;
    background-color: $primary-blue;
    @extend %border-outline-none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
  }
</style>
