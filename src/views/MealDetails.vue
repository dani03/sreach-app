<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-10">
        🍽️ Meal Details
      </h1>

      <div
        v-if="meal"
        class="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all"
      >
        <img
          :src="meal.strMealThumb"
          alt="Meal Image"
          class="w-full h-80 object-cover transition-transform hover:scale-105 duration-300"
        />
        <div class="p-8 space-y-6">
          <h2 class="text-3xl font-semibold text-gray-900">
            {{ meal.strMeal }}
          </h2>

          <p class="text-gray-700 text-lg leading-relaxed">
            {{ meal.strInstructions }}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t">
            <div>
              <h3 class="text-sm font-semibold text-gray-500 uppercase">
                Category
              </h3>
              <p class="text-gray-900 mt-1">{{ meal.strCategory }}</p>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-gray-500 uppercase">
                Area
              </h3>
              <p class="text-gray-900 mt-1">{{ meal.strArea }}</p>
            </div>
          </div>

          <div v-if="meal.strTags" class="pt-4 border-t">
            <h3 class="text-sm font-semibold text-gray-500 uppercase">Tags</h3>
            <p class="text-gray-900 mt-1">{{ meal.strTags }}</p>
          </div>

          <div v-if="meal.strSource" class="pt-4 border-t">
            <a
              :href="meal.strSource"
              target="_blank"
              rel="noopener noreferrer"
              class="text-indigo-600 hover:underline text-base font-medium"
            >
              View original source →
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center">
        <button
          @click="$router.push('/')"
          class="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition-all"
        >
          ← Back to Home
        </button>
      </div>
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
    console.error(
      "Error fetching meal details / impossible de recuperer les details:",
      error
    );
  }
});
</script>
