<template>
    <div class="container px-4 px-lg-5">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <router-link :to="{ name: 'bookslist' }"  class="nav-link" exact>BooksList</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'admin' }" class="nav-link">Admin</router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
import { RouterLink } from 'vue-router';
  </script>
  