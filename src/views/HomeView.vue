<script setup>
import { RouterLink } from 'vue-router';


import { ref, onBeforeMount } from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router'
const router= useRouter()
const API = "http://localhost:3000/books"; 
const characters = ref([]);
onBeforeMount(async () => {
    const response = await axios.get(API);
    if (response.status === 200) {
      characters.value = response.data;
    } else {
      console.error('Oops');
    }
  
});
  const goToDeatil = (authorID)=>{
    router.push({name:'Description',
  params:{id:authorID}
  })  }
  const showSuccessPopup = ref(false);

// Function to open the popup
const showSuccessNotification = () => {
  showSuccessPopup.value = true;
};

// Function to close the popup
const closePopup = () => {
  showSuccessPopup.value = false;
};
onBeforeMount(async () => {
  try {
    const response = await axios.get(API);
    if (response.status === 200) {
      characters.value = response.data;
      // Assuming the book is added successfully, show the popup
      showSuccessNotification();
    } else {
      console.error('Oops');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

</script>

<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div v-for="auth in characters" :key="auth._id"  class="col mb-5">
          <div class="card h-100">
            <img class="card-img-top" :src="auth.coverUri" alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">{{ auth.title }}</h5>
                $30.00
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <button class="btn" @click = goToDeatil(auth._id)>View description</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div v-if="showSuccessPopup" class="popup">
    <div class="popup-content">
      <p>Book added successfully!</p>
      <button class="close-button" @click="closePopup">Close</button>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&family=Lato&family=Nunito&family=Playfair+Display:ital@1&family=Prata&family=Raleway:ital,wght@1,100&family=Roboto&family=Roboto+Condensed&family=Teko&display=swap');

.card {
  border: none; /* Remove card border */
  border-radius: 15px; /* Rounded corners for cards */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
}

.card-img-top {
  border-top-left-radius: 15px; /* Rounded corners for the top-left of the card image */
  border-top-right-radius: 15px; /* Rounded corners for the top-right of the card image */
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem; /* Larger font size for card title */
  font-weight: bold;
  margin-bottom: 10px;
}

.card-price {
  font-size: 1.25rem; /* Font size for the price */
  color: #0066CC;
  margin-bottom: 15px;
}

.btn {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background-color: #0066CC;
  padding: 10px 30px;
  border: none;
  border-radius: 50px;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.btn:hover {
  padding: 10px 50px;
  background-color: #fff;
  color: #0066cc;
  border: 2px solid #0066cc;
}
@keyframes bookOpen {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

/* Animated background element */
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('path-to-your-book-image.png'); /* Replace with your book image */
  background-size: cover;
  background-position: center;
  animation: bookOpen 10s infinite; /* Adjust animation duration and iteration as needed */
  z-index: -1; /* Place the background behind other content */
  opacity: 0.5; /* Adjust opacity to your preference */
  pointer-events: none; /* Make the background non-clickable */
}
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 20px;
    border-radius: 5px;
    z-index: 999;
    display: none;
  }

  .popup-content {
    text-align: center;
  }

  .close-button {
    background-color: #0066CC;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>

