<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const API = "http://localhost:3000/books";
const characters = ref([]);
const router = useRouter();

onBeforeMount(async () => {
    const response = await axios.get(API);
    if (response.status === 200) {
      characters.value = response.data;
    } else {
      console.error('Oops');
    }
  
});
const deleteBook = async (bookID) => {
 
    const response = await axios.delete(`${API}/${bookID}`);
    if (response.status === 200) {
      characters.value = characters.value.filter(character => character._id !== bookID);
    } else {
      console.error('Delete failed');
    }
  
}


const gotoCreate = () => {
  router.push({
    name: 'AdminCreateBook'
    
  });
}
const goToUpdate = (authorID) => {
  router.push({
    name: 'adminupdatebook',
    params: { id: authorID }
  });
}
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">author</th>
          <th scope="col">title</th>
          <th scope="col">originalTitle</th>
          <th scope="col">publicationYear</th>
          <th scope="col">genre</th>
          <th scope="col">Actions</th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in characters" :key="character.id">
          <td>{{ character.author.firstName }} {{character.author.lastName }}</td>
          <td>{{ character.title }}</td>
          <td>{{ character.originalTitle }}</td>
          <td>{{ character.publicationYear }}</td>
          <td>{{ character.genre }}</td>
          <td>
            <button class="btn" @click="deleteBook(character._id)">Delete</button>
          </td>
          <td>
  <button class="btn" @click="goToUpdate(character._id)">Update</button>
</td>

          <td>
            <button class="btn" @click="gotoCreate()">Create</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

  /* Style the entire page */
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
  }

  /* Style the table */
  .table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .table th,
  .table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  /* Style the button */
  .btn {
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    background-color: #0066CC;
    padding: 10px 30px;
    border: 2px solid #0066cc;
    border-radius: 50px;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    text-align: center;
  }

  .btn:hover {
    background-color: #fff;
    color: #0066cc;
    border-color: #0066cc;
  }
</style>
