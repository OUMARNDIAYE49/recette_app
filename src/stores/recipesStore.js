import { defineStore } from 'pinia';

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: []
  }),
  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe);
    },
    updateRecipe(id, updatedRecipe) {
      const index = this.recipes.findIndex(r => r.id === id);
      if (index !== -1) {
        this.recipes[index] = updatedRecipe;
      }
    },
    deleteRecipe(id) {
      this.recipes = this.recipes.filter(r => r.id !== id);
    },
    getRecipeDetails(id) {
      return this.recipes.find(r => r.id === id);
    }
  }
});
