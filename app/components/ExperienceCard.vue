<template>
  <NuxtLink
    :to="experiencePath"
    class="block group"
  >
    <div class="relative">
      <div class="aspect-[4/3] overflow-hidden rounded-2xl mb-3">
        <NuxtImg
          :src="experience.image"
          :alt="experience.title"
          class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="xs:100vw sm:50vw md:50vw lg:33vw xl:33vw"
          placeholder
          loading="lazy"
        />
      </div>

      <div class="space-y-2">
        <div class="flex items-start justify-between gap-2">
          <h3 class="text-base font-medium text-slate-900 line-clamp-1">
            {{ experience.title }}
          </h3>
        </div>
        
        <p class="text-sm text-slate-600 line-clamp-2">
          {{ experience.description }}
        </p>
        
        <div class="flex items-baseline gap-1">
          <span class="text-base font-semibold text-slate-900">${{ experience.price }}</span>
          <span class="text-sm text-slate-600">· {{ experience.duration }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
} from '~/components/ui/card'

interface Experience {
  title: string
  description: string
  price: number
  duration: string
  difficulty: string
  groupSize?: string
  image: string
  country: string
  activity: string
  slug: string
}

const props = defineProps<{
  experience: Experience
}>()

const { getExperiencePath } = useLocalizedRoutes()

const experiencePath = computed(() => {
  return getExperiencePath(props.experience.country, props.experience.activity, props.experience.slug)
})
</script>
