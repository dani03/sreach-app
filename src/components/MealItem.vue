<template>
  <div class="bg-white min-w-96 shadow-md rounded overflow-hidden">
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded-t-xl h-48 w-full object-cover"
    />
    <h2 class="p-4 text-xl font-bold">{{ meal.strMeal }}</h2>
    <!-- <h3 class="p-3 py-2 font-semibold">{{ meal.strInstructions }}</h3> -->

    <div class="p-4 flex justify-between items-center">
      <YoutubeBtn :href="meal.strYoutube"> Youtube </YoutubeBtn>
      <router-link
        :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        target="_blank"
        class="text-blue-500 border-2 border-gray-200 cursor-pointer rounded-md px-4 py-2 hover:bg-blue-100"
        >Details</router-link
      >
    </div>
  </div>
</template>

<script setup>
import YoutubeBtn from "./YoutubeBtn.vue";

const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>
