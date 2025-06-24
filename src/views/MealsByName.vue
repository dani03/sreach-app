<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full p-4"
      placeholder="sreach for meals"
      @change="getOnSrearch"
    />

    <pre>{{ meals }}</pre>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.sreachedMeals);

function getOnSrearch() {
  store.dispatch('sreachMeals', keyword.value);
}
</script>
