<template>
  <a
    :href="props.href"
    target="_blank"
    class="border-2 border-gray-200 rounded-md px-4 py-2 bg-red-600 text-white hover:bg-red-500"
  >
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: false,
  },
  
});
</script>
