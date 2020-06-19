<template>
  <div class="song">
    <p>{{ updated }}</p>
    <article class="media">
      <figure class="media-left">
        <p class="image is-128x128">
          <img :src="song.img" />
        </p>
      </figure>
      <div class="media-content">
        <div class="columns v-centered">
          <div class="column is-8">
            <b-button class="is-link is-inverted" tag="a" :href="song.link" target="__blank">
              {{ song.name }}
            </b-button>
            <a slot="trigger" slot-scope="data" aria-controls="collapsibleSong">
              <b-icon :icon="!data.open ? 'menu-down' : 'menu-up'"></b-icon>
              {{ !data.open ? "All options" : "Fewer options" }}
            </a>
          </div>
        </div>
      </div>
    </article>
    <hr />
  </div>
</template>

<script>
import getDifference from "@/funcs/time.js";

export default {
  name: "Song",
  props: ["song"],
  data: function () {
    return {
      open: false,
    };
  },
  computed: {
    updated: function () {
      if (this.song.released) {
        let today = new Date();
        let up = new Date(this.song.released);
        return getDifference(today, up);
      } else {
        return "";
      }
    },
  },
};
</script>
