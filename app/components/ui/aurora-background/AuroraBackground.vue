<template>
  <div
    :class="cn(
      'relative flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-bg',
      props.class
    )"
  >
    <div 
      class="absolute inset-0 overflow-hidden"
      :class="props.radialGradient && 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-teal-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-teal-500/10 dark:to-pink-500/10'"
    >
      <div
        :class="cn(
          'aurora-bg absolute -inset-[10px] opacity-50 will-change-transform',
          '[background-image:repeating-linear-gradient(100deg,transparent_0%,transparent_40%,theme(colors.blue.500)_50%,theme(colors.cyan.500)_80%,transparent_100%)]',
          'dark:[background-image:repeating-linear-gradient(100deg,transparent_0%,transparent_40%,theme(colors.blue.800)_50%,theme(colors.cyan.800)_80%,transparent_100%)]',
          '[background-size:300%_300%]',
          '[animation:aurora_60s_linear_infinite]'
        )"
      />
      <div
        :class="cn(
          'aurora-bg absolute -inset-[10px] opacity-50 will-change-transform',
          '[background-image:repeating-linear-gradient(100deg,transparent_10%,transparent_40%,theme(colors.pink.500)_50%,theme(colors.orange.500)_80%,transparent_90%)]',
          'dark:[background-image:repeating-linear-gradient(100deg,transparent_10%,transparent_40%,theme(colors.pink.800)_50%,theme(colors.orange.800)_80%,transparent_90%)]',
          '[background-size:300%_300%]',
          '[animation:aurora_60s_linear_infinite]',
          '[animation-delay:-30s]'
        )"
      />
    </div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'

interface Props {
  class?: string
  radialGradient?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  radialGradient: true
})
</script>

<style scoped>
@keyframes aurora {
  from {
    background-position: 50% 50%, 50% 50%;
  }
  to {
    background-position: 350% 50%, 350% 50%;
  }
}

.aurora-bg {
  background-size: 300% 300%;
  animation: aurora 60s linear infinite;
}
</style>