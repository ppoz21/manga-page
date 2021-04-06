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
        v-for="n in 12"
        :key="n"
        class="col-lg-2 col-md-6 col-sm-6 col-6"
      >
        <div class="card mb-3">
          <a href="#"><img
            src="cover1.jpg"
            class="card-img-top"
            alt=""
          ></a>
          <div class="card-body">
            <h5 class="card-title">
              <a href="#">Tytuł</a>
            </h5>
            <p class="card-text">
              [PODTYTUŁ] {{ n }}
            </p>
            <p class="card-text">
              <small class="text-muted text-uppercase">Dodane [x czasu temu]</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: 'Strona główna',
  }
};
</script>