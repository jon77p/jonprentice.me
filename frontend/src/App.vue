<template>
  <div id="app">
    <b-navbar class="nav is-dark" :fixed-top="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" to="/">
          jonprentice.me
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" to="/">
          <span class="icon"><i class="fas fa-home"/></span> <span>Home</span>
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/privacy">
          <span class="icon"><i class="fas fa-file-alt"/></span> <span>Privacy</span>
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/music">
          <span class="icon"><i class="fas fa-headphones-alt"/></span> <span>Music</span>
        </b-navbar-item>
      </template>
    </b-navbar>

    <router-view :host="host" :publicPath="publicPath" :ready="!loading" ref="loadable" />

    <MyFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import MyFooter from "@/components/MyFooter.vue";
import { mapState } from "vuex";

export default {
  data: function() {
    return {
      host: "jonprentice.me",
      publicPath: process.env.BASE_URL,
      connected: false,
      loading: false
    };
  },
  components: {
    MyFooter
  },
  computed: mapState({
    status: state => state.connected,
    social: state => state.socialAccounts
  }),
  methods: {
    apiFailure() {
      this.$buefy.toast.open({
        duration: 99999,
        message: "Failed to connect to the API!",
        position: "is-top",
        type: "is-danger"
      });
    },
    ping() {
      this.loading = true;
      const loadingComponent = this.$refs.loadable
        ? this.$buefy.loading.open({ container: this.$refs.loadable.$el })
        : null;

      return this.$store.dispatch("ping").then(
        () => {
          this.loading = false;
          if (loadingComponent) {
            loadingComponent.close();
          }
        },
        () => {
          this.loading = false;
          loadingComponent.close();
        }
      );
    }
  },
  watch: {
    status() {
      this.ping().then(() => {
        if (!this.status) {
          this.apiFailure();
        }
      });
    }
  },
  mounted: function() {
    this.ping();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active,
    &.router-link-active {
      color: #42b983;
    }
  }
}
</style>
