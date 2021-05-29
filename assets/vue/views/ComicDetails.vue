<template>
  <div>
    <div v-if="isLoading">
      <div class="container my-5">
        <div class="read-intro bg-light">
          <div class="row col-12 justify-content-center my-5">
            <div class="lds-spinner">
              <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
            </div>
          </div>
          <div class="row col-12 justify-content-center">
            <p>Trwa ładowanie...</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="hasError">
      <div class="container my-5">
        <div class="read-intro bg-light">
          <div
            class="alert alert-danger col-12 text-center my-5"
            role="alert"
          >
            Nie znaleziono
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="hasComic">
      <!-- start reading intro -->
      <div class="container my-5">
        <div class="read-intro bg-light">
          <div class="row">
            <div class="cover col-*">
              <img
                class="shadow"
                :src="url + '/' + comic.coverPath"
                :alt="comic.name"
              >
            </div>
            <div class="info col">
              <h2 class="head">
                {{ comic.name }}
              </h2>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">
                      Kategoria:
                    </th>
                    <td>Sport</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Autor:
                    </th>
                    <td>Jacob ZFCon</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Ostatnia zmiana:
                    </th>
                    <td>{{ new Date(comic.publishDate).toLocaleDateString('pl-PL') }}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Ocena:
                    </th>
                    <td>
                      <i class="fa fa-star fa-2x" /><i class="fa fa-star fa-2x" /><i
                        class="fa fa-star fa-2x"
                      /><i class="fa fa-star fa-2x" /><i
                        class="fa fa-star-half-alt fa-2x"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p v-if="!readMoreActive">
                  {{ comic.description.slice(0, 200) }}...
                  <a
                    href="#"
                    @click.prevent="toggleReadMore"
                  >Czytaj więcej</a>
                </p>
                <p v-else>
                  {{ comic.description }}
                  <a
                    href="#"
                    @click.prevent="toggleReadMore"
                  >Czytaj mniej</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end reading intro -->

      <!-- start intro lists -->
      <div class="container my-5 bg-white">
        <div class="intro-lists">
          <div class="head-list row bg-light">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a
                  :class="{ active: isActive('chapters') }"
                  href="#chapters"
                  @click.prevent="setActive('chapters')"
                >Rozdziały</a>
              </li>
              <li class="list-inline-item">
                <a
                  :class="{ active: isActive('comments') }"
                  href="#comments"
                  @click.prevent="setActive('comments')"
                >Opinie</a>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <!-- start ch -->
            <div
              id="chapters"
              class="tab-pane fade"
              :class="{ 'in active show' : isActive('chapters') }"
            >
              <div class="row">
                <div v-if="isLoadingChapters">
                  <div class="row col-12 justify-content-center my-5">
                    <div class="lds-spinner">
                      <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
                    </div>
                  </div>
                  <div class="row col-12 justify-content-center">
                    <p>Trwa ładowanie...</p>
                  </div>
                </div>
                <div v-else-if="hasErrorChapters">
                  <div
                    class="alert alert-danger col-12 text-center my-5"
                    role="alert"
                  >
                    Nie znaleziono rozdziałów
                  </div>
                </div>
                <table
                  v-else-if="hasChapters"
                  class="table table-striped"
                >
                  <tbody v-if="chapters.length === 0">
                    <tr>
                      <th class="text-center">
                        Nie znaleziono rozdziałów
                      </th>
                    </tr>
                  </tbody>
                  <tbody
                    v-for="chapter in chapters"
                    v-else
                    :key="chapter.id"
                  >
                    <tr>
                      <th><a href="#">{{ chapter.number }}</a></th>
                      <td class="text-muted text-uppercase float-right">
                        {{ new Date(chapter.addDate).toLocaleDateString('pl-PL') }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- end ch -->

            <!-- start vol -->
            <div
              id="comments"
              class="tab-pane fade"
              :class="{ 'in active show' : isActive('comments') }"
            >
              <div class="row">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th><a href="#">VOL. 2, Luffy in the island</a></th>
                      <td class="text-muted text-uppercase float-right">
                        8 hours ago
                      </td>
                    </tr>
                    <tr>
                      <th><a href="#">VOL. 2, Luffy in the garden</a></th>
                      <td class="text-muted text-uppercase float-right">
                        8 hours ago
                      </td>
                    </tr>
                    <tr>
                      <th><a href="#">VOL. 3, Luffy in the school</a></th>
                      <td class="text-muted text-uppercase float-right">
                        8 hours ago
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- end vol -->
          </div>
        </div>
      </div>
      <!-- end sh. list -->
    </div>
    <div v-else>
      nie ma takiego komiksu
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicDetails",
  data() {
    return {
      readMoreActive: false,
      activeItem: 'chapters',
      title: 'dupa'
    }
  },
  metaInfo () {
    let comic = this.comic;

    if (comic)
      return {
        title: comic.name
      }
  },
  computed: {
    isLoading() {
      return this.$store.getters["comic/isLoading"];
    },
    hasError() {
      return this.$store.getters["comic/hasError"];
    },
    error() {
      return this.$store.getters["comic/error"];
    },
    hasComic() {
      return this.$store.getters["comic/hasComis"];
    },
    comic() {
      return this.$store.getters["comic/comic"];
    },
    isLoadingChapters() {
      return this.$store.getters["chapters/isLoadingChapters"];
    },
    hasErrorChapters() {
      return this.$store.getters["chapters/hasErrorChapters"];
    },
    errorChapters() {
      return this.$store.getters["chapters/errorChapters"];
    },
    hasChapters() {
      return this.$store.getters["chapters/hasChapters"];
    },
    chapters() {
      return this.$store.getters["chapters/chapters"];
    },
    url() {
      return location.origin
    }
  },
  created() {
    this.$store.dispatch("comic/find", this.$route.params.id);
    this.$store.dispatch("chapters/findByChapter", this.$route.params.id);
  },
  methods: {
    toggleReadMore() {
      this.readMoreActive = !this.readMoreActive;
    },
    isActive (tabPanel) {
      return this.activeItem === tabPanel;
    },
    setActive (tabPanel)
    {
      this.activeItem = tabPanel;
    }
  }
}
</script>

<style scoped>

</style>
