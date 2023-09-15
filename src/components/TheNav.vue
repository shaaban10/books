<script setup>
import { RouterLink } from 'vue-router';
  </script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

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
      </nav>

  </template>
  
  <style scoped>
  /* Custom styles for the navbar */
  .navbar {
    background-color: #fff; /* Light background color */
    border-bottom: 2px solid #2980b9; /* Border at the bottom */
    border-radius: 0; /* Remove border-radius to make it squared */
    padding: 15px 0; /* Adjust padding for top and bottom */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  }
  
  .navbar-brand {
    color: #2980b9; /* Text color */
    font-size: 28px; /* Font size */
    font-weight: bold; /* Font weight */
    text-transform: uppercase; /* Uppercase text */
    letter-spacing: 2px; /* Letter spacing */
  }
  
  .navbar-toggler-icon {
    background-color: #2980b9; /* Hamburger icon color */
    border-radius: 4px; /* Rounded corners for the icon */
    height: 2px; /* Adjust icon height */
    width: 20px; /* Adjust icon width */
  }
  
  .nav-link {
    color: #2980b9; /* Text color */
    font-size: 18px; /* Font size */
    font-weight: bold; /* Font weight */
    margin-right: 20px; /* Spacing between links */
    transition: background-color 0.3s; /* Smooth background color transition on hover */
    border-radius: 8px; /* Rounded corners for links */
    padding: 10px 20px; /* Increase padding for links */
    text-transform: uppercase; /* Uppercase text */
    letter-spacing: 1px; /* Letter spacing */
    text-decoration: none; /* Remove underline */
  }
  
  .nav-link:hover {
    background-color: #2980b9; /* Hover background color */
    color: #fff; /* Hover text color */
  }
  
  /* Book icon */
  .book-icon {
    margin-right: 10px; /* Spacing between the icon and text */
    font-size: 24px; /* Font size for the icon */
    vertical-align: middle; /* Align the icon vertically with the text */
  }
  </style>
  