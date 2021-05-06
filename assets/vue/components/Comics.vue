<template>
  <div class="card mb-3">
    <router-link
      :to="{ name: 'komiks', params: { slug: slug, id: id } }"
    >
      <a><img
        class="card-img-top"
        :alt="name"
        :src="cover"
      ></a>
    </router-link>
    <div class="card-body">
      <h5 class="card-title">
        <router-link
          :to="{ name: 'komiks', params: { slug: slug, id: id } }"
        >
          <a>{{ name }}</a>
        </router-link>
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
    },
    slug: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    now: () => Date.now()
  },
};
</script>

