<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useCharacters from '@/composables/useCharacters'

const route = useRoute()
const { fetchCharacter, currentCharacter } = useCharacters()

onMounted(async () => {
  await fetchCharacter(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
  currentCharacter.value = null
})
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-r from-yellow-900 to-blue-700 py-8 text-white"
  >
    <div
      v-if="currentCharacter"
      class="flex flex-col items-center gap-6 justify-self-center"
    >
      <img
        :src="currentCharacter.card.imageUrl"
        :alt="currentCharacter.card.name"
      />
      <h1 class="justify-center text-6xl font-bold text-slate-200">
        This card is {{ currentCharacter.card.name }}
      </h1>
      <pre>{{ currentCharacter.card.originalText }}</pre>
    </div>
  </main>
</template>
