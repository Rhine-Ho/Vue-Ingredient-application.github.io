<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../stores';
import Mealitem from '../components/Mealitem.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // 創建包含英文字母的字母陣列
const meals = computed(() => store.state.mealsByLetter);

// 監視路由變化，當路由參數 'letter' 改變時觸發搜索
watch(route, ( )=>{
  store.dispatch('searchMealsByLetter', route.params.letter)
});

// 在元件加載後執行的代碼
onMounted(() => {
  // 初始化頁面時進行一次搜尋
  store.dispatch('searchMealsByLetter', route.params.letter);
});
</script>

<template>
    <div class="flex justify-center gap-1 mt-2">
      <!-- 使用v-for指令生成字母按鈕，每個按鈕對應不同的路由參數 -->
      <RouterLink
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </RouterLink>
    </div>
  
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-6">
      <Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal" ></Mealitem>
    </div>
</template>
