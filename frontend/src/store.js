import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const API_URL = process.env.NODE_ENV === "production" ? process.env.VUE_APP_API_URL : "/api";

export const state = {
  connected: null,
  updated: null,
  music: [],
  privacyPolicy: "",
  socialAccounts: [],
};

export const mutations = {
  connected(state, payload) {
    state.connected = payload.status;
    state.updated = payload.updated;
  },
  loadedMusic(state, music) {
    state.music = music;
  },
  loadedPrivacyPolicy(state, policy) {
    state.privacyPolicy = policy;
  },
  loadedSocial(state, social) {
    state.socialAccounts = social;
  },
};

export const actions = {
  loadMusic({ commit }) {
    return axios.get(`${API_URL}/music`).then((response) => {
      commit("loadedMusic", response.data);
    });
  },
  loadPrivacyPolicy({ commit }) {
    return axios.get(`${API_URL}/privacy`).then((response) => {
      commit("loadedPrivacyPolicy", response.data);
    });
  },
  loadSocial({ commit }) {
    return axios.get(`${API_URL}/social`).then((response) => {
      commit("loadedSocial", response.data);
    });
  },
  loadSrc({ commit }) {
    return axios.get(`${API_URL}/src`).then((response) => {
      return response.data.link;
    });
  },
  ping({ commit }) {
    return axios.get(`${API_URL}`).then(
      (response) => {
        commit("connected", { status: true, updated: response.data.updated });
      },
      () => {
        commit("connected", { status: false });
      }
    );
  },
};

export default new Vuex.Store({
  state: state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production",
});
