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
      <div class="form-group">
        <label for="firstName" class="form-label">First Name:</label>
        <input type="text" v-model="firstName" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="lastName" class="form-label">Last Name:</label>
        <input type="text" v-model="lastName" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="bookTitle" class="form-label">Title:</label>
        <input type="text" v-model="title" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="bookYear" class="form-label">Year:</label>
        <input type="text" v-model="publicationYear" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="bookGenre" class="form-label">Genre:</label>
        <input type="text" v-model="genre" required class="form-control" />
      </div>
    </form>

    <div class="form-group">
      <label for="photo" class="form-label">Choose a photo:</label>
      <input type="file" id="photo" name="photo" accept="image/*" class="form-control-file" />
    </div>

    <button class="btn btn-primary" @click="addBook">Create</button>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  transition: border-color 0.2s ease-in-out;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.form-control-file {
  display: none;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.center-button {
  display: flex;
  justify-content: center;
}
</style>
