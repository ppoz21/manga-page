<template>
  <div>
    <!-- start slider -->
    <div
      id="mangaslider"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="slider/slider1.jpg"
            alt="First slide"
          >
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="slider/slider2.jpg"
            alt="Second slide"
          >
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="slider/slider3.jpg"
            alt="Third slide"
          >
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#mangaslider"
        role="button"
        data-slide="prev"
      >
        <div><span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        /></div>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#mangaslider"
        role="button"
        data-slide="next"
      >
        <div><span
          class="carousel-control-next-icon"
          aria-hidden="true"
        /></div>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- end slider -->
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
          <div class="row col-12 justify-content-center my-5">
            <div class="lds-spinner">
              <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
            </div>
          </div>
          <div class="row col-12 justify-content-center">
            <p>Trwa ładowanie...</p>
          </div>
        </div>

        <div
          v-else-if="hasError"
          class="row col-12"
        >
          <div
            class="alert alert-danger col-12 text-center my-5"
            role="alert"
          >
            {{ error }}
          </div>
        </div>

        <div
          v-else-if="!hasComisc"
          class="row col"
        >
          Nie znaleziono ostatnio dodanych tytułów
        </div>
        <div
          v-for="comic in comics"
          v-else
          :key="comic.id"
          class="col-lg-2 col-md-6 col-sm-6 col-6"
        >
          <comics
            :id="comic.id"
            :name="comic.name"
            :cover="comic.coverPath"
            :publish="comic.publishDate"
            :slug="comic.slug"
          />
        </div>
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
      return this.$store.getters["comisc/hasComisc"];
    },
    comics() {
      return this.$store.getters["comisc/comics"];
    }
  },
  created() {
    this.$store.dispatch("comisc/findLatest");
  }
};
</script>
