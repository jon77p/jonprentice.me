<template>
  <footer class="footer">
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-half">
          <h3 class="subtitle">Social Media</h3>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="buttons has-addons is-centered">
            <b-button
              class="is-large"
              v-for="account in social"
              :key="account.account"
              :icon-left="account.icon"
              :tag="account.link ? 'a' : 'button'"
              :href="account.link"
              target="_blank"
            />
          </div>
        </div>
      </div>
      <hr />
      <p>Developed and maintained by Jon Prentice &copy; 2020</p>
      <p>
        Please report any site issues on this site's
        <a class="button is-small" href="https://github.com/jon77p/jonprentice.me" target="__blank">
          <span class="icon"><i class="mdi mdi-github-circle mdi-24px"></i></span>
          <span>Github</span>
        </a>
        repository.
      </p>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    connected: state => state.connected,
    social: state => state.socialAccounts
  }),
  watch: {
    connected() {
      if (this.connected) {
        this.$store.dispatch("loadSocial");
      }
    }
  }
};
</script>
