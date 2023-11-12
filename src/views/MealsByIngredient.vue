<script setup>
import{computed, onMounted, ref} from 'vue';
import axiosClient from '../axiosClient';
import store from '../stores';

const ingredients = ref([]);

onMounted(()=>{
  axiosClient.get('list.php?i=list')
  .then(({data}) =>{
    ingredients.value = data.meals;
  });
});
</script>

<template>
  <div class="p-8">
    <div v-for="ingredient of ingredients" :key="ingredient.id" 
    class="bg-white break-word p-3 mb-3 grid grid-cols-1 md:grid-cols-3 gap-3 shadow">
      <h3 class="text-2xl font-bold">{{  ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </div>
  </div> 
</template>
