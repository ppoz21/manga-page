<template>
  <div class="card mb-3">
    <a href="#"><img
      class="card-img-top"
      :alt="name"
      :src="cover"
    ></a>
    <div class="card-body">
      <h5 class="card-title">
        <a href="#">{{ name }}</a>
      </h5>
      <p class="card-text">
        <small class="text-muted text-uppercase">Dodano {{ new Date(publish).toLocaleDateString('pl-PL') }}</small>
      </p>
    </div>
  </div>
</template>

<script>


export default {
  name: "Comics",
  props: {
    name: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    },
    publish: {
      type: String,
      required: true
    }
  },
  computed: {
    now: () => Date.now()
  },
};
</script>

