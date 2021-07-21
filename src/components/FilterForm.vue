<template lang="pug">
form(@submit="submitForm")
  input(v-model="search" type="text" placeholder="Search by starship name or model")
  button
    svg(width="19" height="18")
      use(xlink:href="@/assets/images/svg/search.svg#searchRoot")
</template>

<script>
export default {
  name: 'FilterForm',
  props: ['query'],
  data() {
    return {
      search: '',
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.$emit('update:query', this.search);

      this.search = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
@import '../assets/scss/_helpers.scss';

form {
  background-color: $form-background;
  opacity: 0.7;
  height: 40px;
  width: 90%;
  max-width: 330px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
  margin-top: 2rem;

  button {
    background-color: transparent;
    @extend %border-outline-none;
    padding-right: 10px;
  }
  input {
    flex: 2 1 0%;
    font-size: 1.1rem;
    background-color: transparent;
    @extend %border-outline-none;
    color: $text-white;
  }

  &:focus-within {
    opacity: 1;
    background-color: $form-background-active;
  }
}
</style>
