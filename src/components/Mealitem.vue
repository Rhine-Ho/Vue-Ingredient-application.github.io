<script setup>
import YouTubeButton from './YoutuButton.vue';

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <div 
    :key="meal.idMeal" 
    class="bg-white shadow rounded-xl"
    >
    <img 
    :src="meal.strMealThumb" 
    :alt="meal.strMeal" 
    class="rounded-t-xl w-full h-48 object-cover">

      <div class="p-3">
        <h3 class="font-bold">
        {{ meal.strMeal }}</h3><!-- 顯示餐點名稱-->
      <!--<pre>{{ meals }}</pre>-->
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est dignissimos numquam tempore consequuntur a aperiam, quibusdam eaque temporibus quod soluta nesciunt odit nobis, expedita tenetur unde porro aut nihil.</p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube">Youtube</YouTubeButton>
        <RouterLink :to="{ name: 'mealDetail', params: {id:meal.idMeal}}" class="px-3 py-2 rounded-lg border-2 bg-slate-200 hover:bg-slate-50 shadow-sm hover:shadow-slate-600 transition-colors">
          View
        </RouterLink>
      </div>

    </div>
  </div>
</template>


