<template>
  <b-navbar class="nav is-dark" :fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        jonprentice.me
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" to="/">
        <span class="icon"><i class="fas fa-home" /></span> <span>Home</span>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/privacy">
        <span class="icon"><i class="fas fa-file-alt" /></span> <span>Privacy</span>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/music">
        <span class="icon"><i class="fas fa-headphones-alt" /></span> <span>Music</span>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/blog">
        <span class="icon"><i class="fas fa-bookmark" /></span> <span>Blog</span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
