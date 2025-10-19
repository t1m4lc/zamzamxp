<template>
  <NuxtLink :to="activity.link" class="block group">
    <div class="relative">
      <div class="aspect-[4/3] overflow-hidden rounded-2xl mb-3">
        <NuxtImg
          :src="activity.image"
          :alt="activity.title"
          class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="xs:100vw sm:50vw md:50vw lg:33vw xl:33vw"
          placeholder="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter:url(%23b)' href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='/%3E%3C/svg%3E"
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
