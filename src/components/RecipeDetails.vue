<template>
    <div class="recipe-details" v-if="recipe">
      <h1>{{ recipe.title }}</h1>
      <p><strong>Type :</strong> {{ recipe.type }}</p> <!-- Affichage du type de recette -->
      <p><strong>Ingrédients :</strong></p>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
      </ul>
      <button @click="closeDetails" class="close-button">Close</button>
    </div>
    <div v-else>
      <p>Recipe not found.</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useRecipesStore } from '../stores/recipesStore';
  
  const route = useRoute();
  const router = useRouter();
  const store = useRecipesStore();
  
  const recipeId = computed(() => route.params.id);
  const recipe = computed(() => store.recipes.find(r => r.id === recipeId.value) || null);
  
  function closeDetails() {
    router.push('/'); // Navigate to the list of recipes
  }
  </script>
  
  
  <style scoped>
  .recipe-details {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  p {
    font-size: 1.2rem;
    color: #555;
  }
  
  .back-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 20px;
  }
  
  .back-button:hover {
    background-color: #0056b3;
  }
  </style>
  