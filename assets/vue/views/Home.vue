<template>
  <div class="lastest container mt-4 mt-sm-5">
    <div class="row">
      <div class="col-lg-6">
        <h2 class="font-weight-bolder float-left">
          Ostatnio dodane
        </h2>
      </div>
    </div>
    <div class="posts row">
      <div
        v-if="isLoading"
        class="row col"
      >
        <p>Loading...</p>
      </div>

      <div
        v-else-if="hasError"
        class="row col"
      >
        <div
          class="alert alert-danger"
          role="alert"
        >
          {{ error }}
        </div>
      </div>

      <div
        v-else-if="!hasComisc"
        class="row col"
      >
        No comics!
      </div>
      <div
        v-for="comic in comics"
        v-else
        :key="comic.id"
        class="col-lg-2 col-md-6 col-sm-6 col-6"
      >
        <comics :name="comic.name" />
      </div>
    </div>
  </div>
</template>

<script>
import Comics from "../components/Comics";

export default {
  name: "Home",
  metaInfo: {
    title: 'Strona główna',
  },
  components: {
    Comics
  },
  data() {
    return {
      name: ""
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters["comisc/isLoading"];
    },
    hasError() {
      return this.$store.getters["comisc/hasError"];
    },
    error() {
      return this.$store.getters["comisc/error"];
    },
    hasComisc() {
      console.log(this.$store.getters["comisc/hasComisc"])
      return this.$store.getters["comisc/hasComisc"];
    },
    comics() {
      return this.$store.getters["comisc/comics"];
    }
  },
  created() {
    this.$store.dispatch("comisc/findAll");
  }
};
</script>
