<template>
  <div class="container-fluid px-0">
    <nav class="navbar navbar-expand-lg navbar-light shadow py-2">
      <router-link
        class="navbar-brand"
        to="/"
      >
        Nazwa aplikacji
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
        <div class="container-fluid">
          <div class="col-12">
            <div class="row py-3">
              <div class="col-lg-6 col-sm-12 mb-3 mb-sm-0">
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
                    to="/lista-rozdzialow"
                    active-class="active"
                  >
                    <a class="nav-link">Lista rozdziałów</a>
                  </router-link>
                  <router-link
                    class="nav-item"
                    tag="li"
                    to="/o-nas"
                    active-class="active"
                  >
                    <a class="nav-link">O nas</a>
                  </router-link>
                  <router-link
                    class="nav-item"
                    tag="li"
                    to="/gatunki"
                    active-class="active"
                  >
                    <a class="nav-link">Gatunki</a>
                  </router-link>
                </ul>
              </div>
              <div class="col-lg-6 col-sm-12 mb-3 mb-sm-0">
                <form class="form-inline search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Wyszukaj komiks"
                      aria-label="Wyszukaj komiks"
                    >
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                      >
                        <i class="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
