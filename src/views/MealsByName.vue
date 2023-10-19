<script setup>
import { computed, ref, watch } from 'vue';// 引入Vue 3相關的功能
import store from '../stores';// 引入存儲庫（store）
import Mealitem from '../components/Mealitem.vue';

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
    <Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></Mealitem>
  </div>
</template>


