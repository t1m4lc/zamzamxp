<template>
  <NuxtLink :to="activity.link" class="block group">
    <div class="relative">
      <div class="aspect-[4/3] overflow-hidden rounded-2xl mb-3">
        <NuxtImg
          :src="activity.image"
          :alt="activity.title"
          class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-semibold text-slate-900">
          {{ activity.title }}
        </h3>
        <p class="text-slate-600 text-sm">
          {{ activity.description }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
} from '~/components/ui/card'
import { Button } from '~/components/ui/button'

interface Activity {
  title: string
  description: string
  link: string
  image: string
  color?: 'orange' | 'sky' | 'emerald' | 'purple'
}

defineProps<{
  activity: Activity
}>()
</script>
