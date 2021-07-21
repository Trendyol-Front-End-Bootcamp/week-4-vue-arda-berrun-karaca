<template lang="pug">
.starships
    starship-card(
      v-for="starship in starships",
      :key="starship.name",
      :name="starship.name",
      :model="starship.model",
      :hyperdrive_rating="starship.hyperdrive_rating"
      :url="starship.url"
    )
</template>

<script>
import StarshipCard from './StarshipCard.vue';

export default {
  name: 'StarshipList',
  props: ['starships'],
  components: {
    StarshipCard,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_mixins.scss';

.starships {
  width: 90%;
  max-width: 1080px;
  margin: 3rem auto;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  row-gap: 20px;

  @include make-responsive(large) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

</style>
