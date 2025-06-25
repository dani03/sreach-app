<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full p-4"
      placeholder="sreach for meals"
      @change="getOnSrearch"
    />

    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">

      <MealItem v-for="meal of meals" :meal="meal" :key="meal.idMeal" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import YoutubeBtn from "../components/YoutubeBtn.vue";
import MealItem from "../components/MealItem.vue";

const route = useRoute();

const keyword = ref("");
const meals = computed(() => store.state.sreachedMeals);

function getOnSrearch() {
  store.dispatch("sreachMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.meal;
  if (keyword.value) {
    getOnSrearch();
  }
});
</script>
