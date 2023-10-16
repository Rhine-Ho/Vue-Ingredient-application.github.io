<script setup>
    
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    import axiosClient from '../axiosClient';

    const route = useRoute();
    const meal = ref({});

    
    onMounted(() => {
        axiosClient.get(`lookup.php?i=${route.params.id}`)
            .then (({data})=>{
                debugger;
                
                meal.value = data.meals[0]|| {}
                //取用meal變數中的第一筆資料 
                //如果資料不存在則顯示空的
        })
});

</script>

<template>
    <div>
     <pre>{{ meal }}</pre>
     //預覽meal變數中的變數資料
    </div>
  </template>
  
  
  