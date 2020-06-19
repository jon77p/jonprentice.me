<template>
  <div class="blog">
    <section class="hero is-bold is-success">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">My Blog</h1>
          <p class="subtitle">Awesome posts, coming soon.</p>
        </div>
      </div>
    </section>
    <div class="columns is-mobile is-centered is-vcentered">
      <div class="column is-one-third" />
      <div class="column">
        <p>Powered by</p>
      </div>
      <div class="column">
        <figure class="image is-5by1">
          <a href="https://buttercms.com" target="_blank" id="butterlogo">
            <img class="is-rounded" src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" />
          </a>
        </figure>
      </div>
      <div class="column is-one-third" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "blog",
  props: ["ready"],
  data() {
    return {
      hover: false
    };
  },
  computed: {
    connected() {
      return this.ready && this.$store.state.connected;
    }
  },
  methods: {},
  mounted: function() {}
};
</script>

<style>
#butterlogo img {
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
#butterlogo:hover img,
#butterlogo:focus img {
  transform: scale(1.2);
}
</style>
