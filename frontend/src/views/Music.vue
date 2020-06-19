<template>
  <div class="music">
    <section class="hero is-bold is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">My Music</h1>
          <p class="subtitle">Some songs arranged/produced by me!</p>
        </div>
      </div>
    </section>
    <div class="columns is-centered">
      <div class="column is-half" v-for="song in music" :key="song.name">
        <Song :song="song" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Song from "@/components/Song.vue";

export default {
  name: "music",
  components: {
    Song,
  },
  props: ["ready"],
  computed: {
    connected() {
      return this.ready && this.$store.state.connected;
    },
    music() {
      return this.$store.state.music;
    },
  },
  methods: {
    loadMusic() {
      this.$store.dispatch("loadMusic");
    },
  },
  mounted() {
    this.loadMusic();
  },
};
</script>
