<script setup>
import { computed, onMounted, ref } from 'vue'; // 引入Vue 3的相關功能
import store from '../stores'; // 引入存儲庫（store）
import axiosClient from '../axiosClient'; // 引入用於發送HTTP請求的客戶端

const ingredients = ref([]); // 創建一個可響應的參考（ref），用於存儲API回應中的食材資訊

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list'); // 發送GET請求以獲取食材列表
  console.log(response.data); // 在控制台中輸出API回應的資料
  ingredients.value = response.data; // 更新ingredients的值為API回應的食材列表
});
</script>

<template>
  <div class="flex flex-col p-8 justify-center">
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
  </div>
</template>
