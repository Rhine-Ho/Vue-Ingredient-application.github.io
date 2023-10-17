<script setup>
import { computed, ref, watch } from 'vue';// 引入Vue 3相關的功能
import store from '../stores';// 引入存儲庫（store）
import YoutuButton from '../components/YoutuButton.vue';

const keyword = ref('');// 創建一個可響應的參考（ref）用於存儲搜尋關鍵字
const meals = computed(() => store.state.searchedMeals); // 使用computed來從存儲庫中獲取餐點資料

async function searchMeals() {
  await store.dispatch('searchMeals', keyword.value);// 執行store中的searchMeals操作以進行餐點搜尋
}

watch(() => store.state.searchedMeals, () => {
  console.log(store.state.searchedMeals);// 監聽searchedMeals的變化，並在變化時輸出到控制台
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
    />  <!--當輸入框的值變化時觸發searchMeals函數-->
  </div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-6">
  <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
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
        <YoutuButton :href="meal.strYoutube"/>
        <RouterLink :to="{ name: 'mealDetail', params: {id:meal.idMeal}}" class="px-3 py-2 rounded-lg border-2  bg-slate-200 hover:bg-slate-50  shadow-sm hover:shadow-slate-600    transition-colors">
          View
        </RouterLink>
      </div>

    </div>
  </div>
</div>
</template>


