<template lang="pug">
article.card(@click="goDetail(url)")
  .card__image
    img(src="@/assets/images/starship.jpg", :alt="name")
  .card__content
    h2 {{ name }}
    p Model:
    h4 {{ model }}
    p Hyperdrive rating:
    h4 {{ hyperdrive_rating }}
</template>

<script>
export default {
  name: 'StarshipCard',
  props: ['name', 'model', 'hyperdrive_rating', 'url'],
  methods: {
    goDetail(url) {
      const id = url.replace(/\D/g, '');
      this.$router.push(`/starship/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
@import '../assets/scss/_mixins.scss';

.card {
  background-color: $card-background;
  color: $text-white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  &__image {
    flex: 2 1 0%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-bottom: 2px solid $primary-blue;
    }
  }

  &__content {
    flex: 3 1 0%;
    padding: 0.5rem 1rem;
    line-height: 1.6;

    h2:hover {
      color: $text-blue;
    }

    p {
      color: $text-gray;
      padding-top: 2rem;
    }
  }

  @include make-responsive(medium) {
    flex-direction: row;
    width: 500px;
    height: 300px;

    &__image {
      flex: 1 1 0%;
      img {
        border-bottom: 0;
        border-right: 1px solid $primary-blue;
      }
    }

    &__content {
      flex: 1 1 0%;
    }
  }
}

</style>
