<template lang="pug">
  no-result(message="This is not the page you're looking for." :showBtn="true")
</template>

<script>
import NoResult from '@/components/NoResult.vue';

export default {
  name: 'NoMatch',
  components: {
    NoResult,
  },
};
</script>
