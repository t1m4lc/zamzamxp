<template>
  <div class="p-8 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-6 text-center">Inspira UI + Motion Demo</h2>
    
    <!-- Motion-v demo -->
    <div class="mb-8">
      <h3 class="text-lg font-semibold mb-4">Motion-v Animations</h3>
      <button 
        @click="isVisible = !isVisible"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        Toggle Animation
      </button>
      
      <Transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 transform scale-95 translate-y-4"
        enter-to-class="opacity-100 transform scale-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 transform scale-100 translate-y-0"
        leave-to-class="opacity-0 transform scale-95 translate-y-4"
      >
        <div 
          v-if="isVisible"
          class="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg"
        >
          <p>🎉 This uses Vue transitions with Inspira UI styling!</p>
        </div>
      </Transition>
    </div>

    <!-- Inspira UI styling demo -->
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">Inspira UI Styling</h3>
      
      <div class="p-4 bg-card border border-border rounded-lg">
        <p class="text-card-foreground">This card uses Inspira UI's CSS variables</p>
      </div>
      
      <button class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
        Primary Button
      </button>
      
      <button class="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity">
        Secondary Button
      </button>
      
      <div class="p-3 bg-muted text-muted-foreground rounded-lg text-sm">
        💡 This uses Inspira UI's color system with CSS variables
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isVisible = ref(false)
</script>