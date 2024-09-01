<template>
    <div class="recipe-list">
      <h1 class="title">Liste des Recettes</h1>
      <ul class="recipe-items">
        <li v-for="recipe in recipes" :key="recipe.id" class="recipe-item">
          <router-link :to="'/details/' + recipe.id" class="recipe-title">
            {{ recipe.title }}
          </router-link>
          <router-link :to="'/edit/' + recipe.id" class="edit-link">Modifier</router-link>
          <button @click="deleteRecipe(recipe.id)" class="delete-button">Suprimé</button>
        </li>
      </ul>
      <router-link to="/add" class="add-link">Ajouter une recette</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRecipesStore } from '../stores/recipesStore';
  
  const store = useRecipesStore();
  const recipes = computed(() => store.recipes);
  
  function deleteRecipe(recipeId) {
    store.deleteRecipe(recipeId);
  }
  </script>
  
  
  
  <style scoped>
  .recipe-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  .recipe-items {
    list-style: none;
    padding: 0;
  }
  
  .recipe-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .recipe-title {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
  
  .recipe-title:hover {
    text-decoration: underline;
  }
  
  .edit-link {
    text-decoration: none;
    color: #28a745;
    margin-right: 10px;
  }
  
  .edit-link:hover {
    text-decoration: underline;
  }
  
  .delete-button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .delete-button:hover {
    background-color: #c82333;
  }
  
  .add-link {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
  
  .add-link:hover {
    text-decoration: underline;
  }
  </style>
  