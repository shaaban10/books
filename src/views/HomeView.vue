<script setup>
import { RouterLink } from 'vue-router';

const cardItems = Array.from({ length: 8 });
</script>

<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div v-for="(item, index) in cardItems" :key="index" class="col mb-5">
          <div class="card h-100">
            <img class="card-img-top" src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?cs=srgb&dl=book-stack-books-education-51342.jpg&fm=jpg" alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">The Another One</h5>
                $30.00
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <RouterLink to="/description" class="btn btn-outline-dark mt-auto">View description</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
