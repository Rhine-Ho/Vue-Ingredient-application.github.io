<script setup>
import { computed, ref, watch } from 'vue';
import store from '../stores';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

async function searchMeals() {
  await store.dispatch('searchMeals', keyword.value);
}

watch(() => store.state.searchedMeals, () => {
  console.log(store.state.searchedMeals);
});

</script>


<template>
  <div class="p-6">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />  
  </div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-6">
  <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
    <img 
    :src="meal.strMealThumb" 
    :alt="strMeal" 
    class="rounded-t-xl w-full h-48 object-cover">

      <div class="p-3">
        <h3 class="font-bold">
        {{ meal.strMeal }}</h3>
      <!--<pre>{{ meals }}</pre>-->
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est dignissimos numquam tempore consequuntur a aperiam, quibusdam eaque temporibus quod soluta nesciunt odit nobis, expedita tenetur unde porro aut nihil.</p>
      <div class="flex items-center justify-between">
        <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 text-white rounded-lg border-2 shadow-md bg-red-500 hover:bg-red-600 transition-colors">YouTube</a>
        <RouterLink :to="{ name: 'mealDetail', params: { id } }" class="px-3 py-2 rounded-lg border-2  bg-slate-200 hover:bg-slate-50  shadow-sm hover:shadow-slate-600    transition-colors">
          View
        </RouterLink>
      </div>

    </div>
  </div>
</div>
</template>


