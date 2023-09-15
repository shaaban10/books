<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const authorId = route.params.id;
const API = `http://localhost:3000/books/${authorId}`;
const characters = ref([]); 

onBeforeMount(async () => {
    const response = await axios.get(API);
    if (response.status === 200) {
      characters.value = response.data;
    } else {
      console.error('Oops');
    }
  
});

</script>

<template>
  <div class="character-details">
    <figure>
      <img class="character-image" :src="characters.coverUri" alt="Character Image" />
    </figure>
    <div class="character-info">
      <h1 class="character-name">{{ characters.author.firstName }} {{ characters.author.lastName }}</h1>
      <ul class="character-properties">
        <li><p><strong>Author:</strong> {{ characters.author.firstName }} {{ characters.author.lastName }}</p></li>
        <li><p><strong>Genre:</strong> {{ characters.genre }}</p></li>
        <li><p><strong>Title:</strong> {{ characters.title }}</p></li>
        <li><p><strong>Created At:</strong> {{ characters.createdAt }}</p></li>
        <li><p><strong>Publication Year:</strong> {{ characters.publicationYear }}</p></li>
      </ul>
    </div>
    <div class="choose-another">
      <h3>Choose Another Character</h3>
      <router-link to="/bookslist" class="btn btn-outline-dark">Press Here</router-link>
    </div>
  </div>
</template>

<style scoped>
.character-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.character-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.character-name {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.character-properties {
  list-style-type: none;
  padding: 0;
}

.character-properties li {
  margin-bottom: 10px;
}

.btn {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #fff;
  background-color: #0066CC;
  padding: 10px 30px;
  border: none;
  border-radius: 50px;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #0055aa;
  transform: scale(1.05);
}
</style>
