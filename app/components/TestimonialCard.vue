<template>
  <Card
    class="overflow-hidden rounded-3xl border-2 transition-all duration-300 hover:shadow-xl transform"
    :class="[cardClass, rotationClass]"
    :style="{ transform: `rotate(${rotation}deg)` }"
  >
    <CardContent class="p-6 space-y-4">
      <!-- Rating Stars -->
      <div class="flex space-x-1">
        <Icon
          v-for="i in 5"
          :key="i"
          name="mdi:star"
          class="h-5 w-5"
          :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-slate-200'"
        />
      </div>

      <!-- Quote -->
      <blockquote class="text-base leading-relaxed text-slate-700">
        "{{ testimonial.quote }}"
      </blockquote>

      <!-- Author -->
      <div class="flex items-center space-x-3 pt-2">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-xl font-bold text-white">
          {{ testimonial.initials }}
        </div>
        <div>
          <div class="font-bold text-slate-900">{{ testimonial.name }}</div>
          <div class="text-sm text-slate-500">{{ testimonial.location }}</div>
        </div>
      </div>

      <!-- Adventure Tag -->
      <Badge :variant="badgeVariant" class="font-semibold">
        {{ testimonial.adventure }}
      </Badge>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
} from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'

interface Testimonial {
  name: string
  initials: string
  location: string
  quote: string
  rating: number
  adventure: string
  color: 'orange' | 'sky' | 'emerald' | 'purple' | 'pink'
  rotation?: number
}

const props = defineProps<{
  testimonial: Testimonial
}>()

const rotation = computed(() => props.testimonial.rotation || 0)

const cardClass = computed(() => {
  switch (props.testimonial.color) {
    case 'orange':
      return 'border-orange-200 bg-orange-50 hover:border-orange-300'
    case 'sky':
      return 'border-sky-200 bg-sky-50 hover:border-sky-300'
    case 'emerald':
      return 'border-emerald-200 bg-emerald-50 hover:border-emerald-300'
    case 'purple':
      return 'border-purple-200 bg-purple-50 hover:border-purple-300'
    case 'pink':
      return 'border-pink-200 bg-pink-50 hover:border-pink-300'
    default:
      return 'border-orange-200 bg-orange-50'
  }
})

const rotationClass = computed(() => {
  return 'hover:rotate-0 transition-transform duration-300'
})

const badgeVariant = computed(() => {
  return 'secondary'
})
</script>
