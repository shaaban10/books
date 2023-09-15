<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const oneBook = ref();
const title = ref();
const publicationYear = ref();
const lastName = ref();
const firstName = ref();
const url = ref();
const genre = ref();
const bookId = useRoute().params.id;
const API = "http://localhost:3000/books";
const router = useRouter();

onBeforeMount(async () => {
  const { data, status } = await axios.get(`${API}/${bookId}`);
  if (status === 200) {
    oneBook.value = data;
    title.value = oneBook.value.title;
    publicationYear.value = oneBook.value.publicationYear;
    lastName.value = oneBook.value.author.lastName;
    firstName.value = oneBook.value.author.firstName;
    genre.value = oneBook.value.genre;
    url.value = oneBook.value.coverUri;
  }
});

const updateBook = async () => {
  const { data, status } = await axios.get(`${API}/${bookId}`);
  const updatedData = {
    author: {
      firstName: firstName.value,
      lastName: lastName.value,
    },
    title: title.value,
    publicationYear: publicationYear.value,
    coverUri: url.value,
    genre: genre.value,
  };
  if (status === 200) {
    console.log('updated');
  }
};


</script>

<template>

  <form class="form-example">
    <div class="form-group">
      <label for="firstName">First Name:</label>
      <input type="text" v-model="firstName" required class="form-control" />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input type="text" v-model="lastName" required class="form-control" />
    </div>
    <div class="form-group">
      <label for="bookTitle">Title:</label>
      <input type="text" v-model="title" required class="form-control" />
    </div>
    <div class="form-group">
      <label for="bookYear">Year:</label>
      <input type="text" v-model="publicationYear" required class="form-control" />
    </div>
    <div class="form-group">
      <label for="bookGenre">Genre:</label>
      <input type="text" v-model="genre" required class="form-control" />
    </div>
    <img :src="url" alt="Book Cover" class="book-cover" />
    <button class="btn btn-primary" @click="updateBook(oneBook._id)">Update</button>
  </form>
</template>

<style scoped>
/* Custom styles for the form */
.form-example {
  max-width: 400px; /* Adjust form width as needed */
  margin: 0 auto; /* Center align the form */
  padding: 20px;
  background-color: #f9f9f9; /* Form background color */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  display: flex; /* Use Flexbox to center the button */
  flex-direction: column; /* Align form items vertically */
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  text-align: center; /* Center-align text within the form */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333; /* Label text color */
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

img.book-cover {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}

.btn-primary {
  background-color: #0066CC; /* Button background color */
  color: #fff; /* Button text color */
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px; /* Add more space between the button and the cart */
}

.btn-primary:hover {
  background-color: #0055aa; /* Button background color on hover */
}
</style>

