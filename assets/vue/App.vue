<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link
        class="navbar-brand"
        to="/"
      >
        App
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNav"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav">
          <router-link
            class="nav-item"
            tag="li"
            to="/"
            active-class="active"
            exact
          >
            <a class="nav-link">Strona główna</a>
          </router-link>
          <router-link
            class="nav-item"
            tag="li"
            to="/o-nas"
            active-class="active"
          >
            <a class="nav-link">O nas</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: 'Tytuł Domyślny',
    titleTemplate: '%s | Nazwa aplikacji'
  }
};
</script>