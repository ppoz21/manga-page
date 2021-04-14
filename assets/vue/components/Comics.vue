<template>
  <div class="card mb-3">
    <a href="#"><img
      src="cover1.jpg"
      class="card-img-top"
      alt=""
    ></a>
    <div class="card-body">
      <h5 class="card-title">
        <a href="#">{{ name }}</a>
      </h5>
      <p class="card-text">
        [PODTYTUŁ]
      </p>
      <p class="card-text">
        <small class="text-muted text-uppercase">Dodane [x czasu temu]</small>
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
    }
  }
};
</script>

