<template lang="pug">
.home
  filter-form(:query="query" v-on:update:query="query = $event")
  spinner(v-if="this.loading")
  no-result(v-else-if="this.error || !starships.results.length"
    message="No Result."
    :showBtn="false")
  div(v-else)
    starship-list(:starships="starships.results")
    pagination(
        v-on:update:page="page = $event"
        :page="page"
        :next="starships.next"
        :prev="starships.previous")
</template>

<script>
// @ is an alias to /src
import FilterForm from '@/components/FilterForm.vue';
import StarshipList from '@/components/StarshipList.vue';
import Pagination from '@/components/Pagination.vue';
import Spinner from '@/components/Spinner.vue';
import NoResult from '@/components/NoResult.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    FilterForm,
    StarshipList,
    Pagination,
    Spinner,
    NoResult,
  },
  data() {
    return {
      starships: {},
      query: '',
      page: 1,
      loading: true,
      error: false,
    };
  },
  methods: {
    fetchData(page = 1, query) {
      console.log('home');
      this.loading = true;
      let apiUrl = `https://swapi.dev/api/starships/?page=${page}`;
      if (query) {
        apiUrl += `&search=${query}`;
      }
      axios
        .get(apiUrl)
        .then(({ data }) => {
          this.starships = data;
        })
        .catch(() => {
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    query(newVal) {
      this.page = 1;
      this.fetchData(this.page, newVal);
    },
    page(newVal) {
      this.fetchData(newVal, this.query);
    },
  },
};
</script>

<style lang="scss" scoped>
  .home {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
