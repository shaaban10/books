<script setup>
import axios from 'axios';
import { ref } from 'vue';

const bookadded = ref(false);
const firstName = ref('');
const lastName = ref('');
const title = ref('');
const publicationYear = ref('');
const url = ref('');
const genre = ref('');

const addBook = async () => {
    const { status } = await axios.post('http://localhost:3000/books', {
      author: {
        firstName: firstName.value,
        lastName: lastName.value,
      },
      title: title.value,
      publicationYear: Number(publicationYear.value), 
      coverUri: url.value,
      genre: genre.value,
    });

    if (status === 201) {
      console.log('Book added');
      bookadded.value = true;
    } else {
      console.error('Add failed')
    }
 
}
</script>

<!-- <template>
  <form class="form-example">
    <div class="form-example">
      <label for="firstName">First Name:</label>
      <input type="text" v-model="firstName" required />
    </div>
    <div class="form-example">
      <label for="lastName">Last Name:</label>
      <input type="text" v-model="lastName" required />
    </div>
    <div class="form-example">
      <label for="bookTitle">Title:</label>
      <input type="text" v-model="title" required />
    </div>
    <div class="form-example">
      <label for="bookYear">Year:</label>
      <input type="text" v-model="publicationYear" required />
    </div>
    <div class="form-example">
      <label for="bookGenre">Genre:</label>
      <input type="text" v-model="genre" required />
    </div>
  
  </form>
  <label for="photo" >Choose a photo!</label>
<input 
  type="file" id="photo"  name="photo" accept="image/*" >
  <button class="btn" @click="addBook">Create</button>

</template> -->

<template>
  <div class="form-container">
    <form class="form-example">
      <!-- Your form fields here -->

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
    </form>

    <div class="form-group">
      <label for="photo">Choose a photo:</label>
      <input type="file" id="photo" name="photo" accept="image/*" class="form-control-file" />
    </div>

    <button class="btn btn-primary" @click="addBook">Create</button>
  </div>
</template>

<style scoped>
/* Custom styles */
.form-container {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-example {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%; /* Ensure the form doesn't exceed the container's width */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.form-control-file {
  font-size: 16px;
}

.btn-primary {
  background-color: #0066CC;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.btn-primary:hover {
  background-color: #0055aa;
}
</style>
