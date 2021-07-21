<template lang="pug">
.no-result
  img(src="@/assets/images/noresult.png")
  h1 {{ message }}
  custom-button(v-show="showBtn" @click="goBack") Go Back
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'NoResult',
  props: ['message', 'showBtn'],
  components: {
    'custom-button': Button,
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.no-result {
  width: 90%;
  max-width: 600px;
  margin-top: 2rem;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem auto 0 auto;

  img {
    max-width: 400px;
    height: auto;
  }

  h1 {
    color: $text-white;
    text-align: center;
  }
}
</style>
