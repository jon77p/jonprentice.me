<template>
  <div class="home">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" id="welcome">Welcome to {{ host }}!</h1>
        </div>
      </div>
    </section>
    <div class="columns is-centered">
      <div class="column is-two-thirds">
        <transition
          name="custom-classes-transition"
          enter-active-class="animated rubberBand"
          leave-active-class="animated zoomOut"
        >
          <div class="card" v-if="connected">
            <div class="card-content">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-128x128">
                    <img class="is-rounded" :src="`${publicPath}profile.jpg`" alt="Image" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <nav class="level">
                      <div class="level-left">
                        <div class="level-item">
                          <p><strong>Jon Prentice</strong></p>
                        </div>
                        <div class="level-item">
                          <a :href="`${publicPath}social`"><small>@jon77p</small></a>
                        </div>
                        <div class="level-item">
                          <p>
                            <small>{{ updated }}</small>
                          </p>
                        </div>
                      </div>
                    </nav>
                    <p>
                      If you see this page, you have successfully connected to my personal website.
                      <br />
                      Further configuration is <em>still</em> required.
                    </p>
                    <p>
                      For online documentation and support please refer to
                      <a :href="`${publicPath}src`" target="__blank">{{ host }}/src</a>.
                    </p>
                    <p>
                      <em>
                        Thank you for using
                        <a :href="`${publicPath}`">{{ host }}</a
                        >.
                      </em>
                    </p>
                    <p><em>&mdash; Jon Prentice</em></p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import getDifference from "@/funcs/time.js";

export default {
  name: "home",
  props: ["host", "publicPath", "ready"],
  computed: {
    connected: function () {
      return this.$store.state.connected && this.ready;
    },
    updated: function () {
      if (this.connected) {
        let today = new Date();
        let up = new Date(this.$store.state.updated);
        return getDifference(today, up);
      } else {
        return "";
      }
    },
  },
};
</script>
