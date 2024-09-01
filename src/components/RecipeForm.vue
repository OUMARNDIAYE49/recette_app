<template>
    <div class="form-container">
      <h1 class="form-title">{{ isEdit ? 'Modifier' : 'Ajouter' }} une Recette</h1>
      <form @submit.prevent="saveRecipe" class="recipe-form">
        <div class="form-group">
          <label for="title" class="form-label">Titre</label>
          <input id="title" v-model="recipe.title" class="form-input" placeholder="Titre" />
        </div>
        <div class="form-group">
          <label for="ingredients" class="form-label">Ingrédients</label>
          <textarea id="ingredients" v-model="recipe.ingredients" class="form-textarea" placeholder="Ingrédients"></textarea>
        </div>
        <div class="form-group">
          <label for="type" class="form-label">Type</label>
          <select id="type" v-model="recipe.type" class="form-select">
            <option>Entrée</option>
            <option>Plat</option>
            <option>Dessert</option>
          </select>
        </div>
        <button type="submit" class="form-button">{{ isEdit ? 'Sauvegarder' : 'Ajouter' }}</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useRecipesStore } from '../stores/recipesStore';
  
  const store = useRecipesStore();
  const route = useRoute();
  const router = useRouter();
  
  const isEdit = computed(() => !!route.params.id);
  const recipe = ref({
    id: '',
    title: '',
    ingredients: '',
    instructions: '',
    type: 'Plat'
  });
  
  if (isEdit.value) {
    onMounted(() => {
      const id = route.params.id;
      const existingRecipe = store.recipes.find(r => r.id === id);
      if (existingRecipe) {
        Object.assign(recipe.value, existingRecipe);
      }
    });
  }
  
  function saveRecipe() {
    if (isEdit.value) {
      const id = route.params.id;
      const index = store.recipes.findIndex(r => r.id === id);
      store.updateRecipe(index, recipe.value);
    } else {
      recipe.value.id = Date.now().toString(); // Generate a unique ID
      store.addRecipe(recipe.value);
    }
    router.push('/');
  }
  </script>

  
  
<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.form-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.recipe-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.form-input, .form-textarea, .form-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
}

.form-button:hover {
  background-color: #0056b3;
}
</style>
