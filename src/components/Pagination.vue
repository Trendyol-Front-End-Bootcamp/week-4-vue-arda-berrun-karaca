<template lang="pug">
div
  custom-button(:disabled="!prev" @click="paginate(-1)") Previous
  custom-button(:disabled="!next" @click="paginate(1)") Next
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Pagination',
  props: ['next', 'prev', 'page'],
  components: {
    'custom-button': Button,
  },
  methods: {
    paginate(p) {
      this.$emit('update:page', p + this.page);
    },
  },
};
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>
