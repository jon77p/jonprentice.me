<template>
  <div class="privacy">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Privacy Policy</h1>
          <p class="subtitle">Last Modified: {{ updated }}</p>
        </div>
      </div>
    </section>
    <div class="columns is-centered">
      <div class="column is-centered is-half content">
        <template v-for="p in policy.policy">
          <template v-for="(item, key) in p">
            <p class="is-small" v-if="key == 'p'" :key="key" v-html="item" />
            <h2 class="title is-2" v-else-if="key == 'h2'" :key="key">{{ item }}</h2>
            <h3 class="subtitle is-3" v-else-if="key == 'h3'" :key="key">{{ item }}</h3>
            <h4 class="subtitle is-4" v-else-if="key == 'h4'" :key="key">{{ item }}</h4>
            <ul class="has-text-left" v-else-if="key == 'ul'" :key="key">
              <template v-for="elem in item">
                <template v-for="(item, key) in elem">
                  <li v-if="key == 'li'" v-html="item" :key="key" />
                </template>
              </template>
            </ul>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import getDifference from "@/funcs/time.js";

export default {
  name: "privacy",
  props: ["ready"],
  computed: {
    policy: function() {
      return this.$store.state.privacyPolicy;
    },
    updated: function() {
      if (this.policy.date) {
        let today = new Date();
        let up = new Date(this.policy.date);
        return getDifference(today, up);
      } else {
        return "";
      }
    }
  },
  methods: {
    loadPrivacyPolicy: function() {
      this.$store.dispatch("loadPrivacyPolicy");
    }
  },
  mounted: function() {
    this.loadPrivacyPolicy();
  }
};
</script>

<style>
body {
  color: #444444;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
}
a {
  color: inherit;
}
</style>
