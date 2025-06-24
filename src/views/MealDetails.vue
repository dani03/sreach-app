<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Meal Details</h1>
    <div
      v-if="meal"
      class="bg-white rounded-2xl shadow-xl overflow-hidden transition-all"
    >
      <img
        :src="meal.strMealThumb"
        alt="Meal Image"
        class="w-full h-64 object-cover"
      />
      <div class="p-6 space-y-4">
        <h2 class="text-2xl font-semibold text-gray-900">{{ meal.strMeal }}</h2>
        <p class="text-gray-700 leading-relaxed">{{ meal.strInstructions }}</p>
        <div class="grid grid-cols-2 gap-6">
          <div>
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide">Category</h3>
            <p class="text-gray-800">{{ meal.strCategory }}</p>
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide">Area</h3>
            <p class="text-gray-800">{{ meal.strArea }}</p>
          </div>
        </div>
        <div v-if="meal.strTags">
          <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide">Tags</h3>
          <p class="text-gray-800">{{ meal.strTags }}</p>
        </div>
        <div v-if="meal.strSource">
          <a
            :href="meal.strSource"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block mt-2 text-indigo-600 hover:underline font-medium"
          >
            View Source →
          </a>
        </div>
      </div>
    </div>
    <div class="mt-8 text-center">
      <button
        @click="$router.push('/')"
        class="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition"
      >
        Back to Home
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";

import axiosClient from "../axiosClient";
import { useRoute } from "vue-router";

const route = useRoute();
const meal = ref({});

onMounted(async () => {
  const mealId = route.params.id;
  try {
    const response = await axiosClient.get(`/lookup.php?i=${mealId}`);
    meal.value = response.data.meals[0];
  } catch (error) {
    console.error("Error fetching meal details / impossible de recuperer les details:", error);
  }
});
</script>
