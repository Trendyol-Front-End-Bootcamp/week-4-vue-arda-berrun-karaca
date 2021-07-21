<template lang="pug">
.starship__detail
  spinner(v-if="this.loading")
  no-result(v-else-if="this.error" message="No Result." :showBtn="true")
  .starship__detail-content(v-else)
    custom-button(@click="goBack") Go Back
    .card
      .card__image
        img(src="@/assets/images/starship.jpg", :alt="starship.name")
      .card__content
        h1 {{ starship.name }}
        p
          span Model:
          |
          | {{ starship.model }}
        p
          span Hyperdrive rating:
          |
          | {{ starship.hyperdrive_rating }}
        p
          span Passengers:
          |
          | {{ starship.passengers }}
        p
          span Max atmosphering speed:
          |
          | {{ starship.max_atmosphering_speed }}
        p
          span Manufacturer:
          |
          | {{ starship.manufacturer }}
        p
          span Crew:
          |
          | {{ starship.crew }}
        p
          span Cargo capacity:
          |
          | {{ starship.cargo_capacity }}
</template>

<script>
import axios from 'axios';
import Button from '@/components/Button.vue';
import Spinner from '@/components/Spinner.vue';
import NoResult from '@/components/NoResult.vue';

export default {
  name: 'StarshipDetail',
  components: {
    'custom-button': Button,
    NoResult,
    Spinner,
  },
  data() {
    return {
      starship: {},
      loading: true,
      error: false,
    };
  },
  methods: {
    fetchDataById(id) {
      axios
        .get(`https://swapi.dev/api/starships/${id}`)
        .then(({ data }) => {
          this.starship = data;
        })
        .catch(() => {
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    goBack() {
      this.$router.push('/');
    },
  },
  created() {
    this.fetchDataById(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
@import '../assets/scss/_mixins.scss';

.starship__detail {
  width: 90%;
  max-width: 1080px;
  margin: 2rem auto;

  &-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      order: 1;
      width: 100%;

      @include make-responsive(medium) {
        order: -1;
        max-width: 100px;
      }
    }
  }
}

.card {
  background-color: $card-background;
  color: $text-white;
  display: flex;
  flex-direction: column;
  overflow: hidden;

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

    h1 {
      margin-bottom: 1rem;
    }

    p {
      margin-top: 10px;
      span {
        color: $text-gray;
      }
    }
  }
  @include make-responsive(medium) {
    flex-direction: row;

    &__image {
      flex: 1;
      img {
        border-bottom: 0;
        border-right: 1px solid $primary-blue;
      }
    }

    &__content {
      flex: 1;
    }
  }
}

</style>
