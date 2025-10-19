<template>
  <div 
    :class="[
      'relative overflow-hidden bg-gradient-to-br from-orange-100 to-slate-100',
      aspectRatio,
      rounded
    ]"
  >
    <NuxtImg
      v-if="src && !imageError"
      :src="src"
      :alt="alt"
      :class="[
        'absolute inset-0 w-full h-full object-cover transition-transform duration-500',
        hoverScale ? 'group-hover:scale-110' : ''
      ]"
      :sizes="sizes"
      placeholder
      loading="lazy"
      @error="handleImageError"
    />
    <div v-if="!src || imageError" class="absolute inset-0 flex items-center justify-center">
      <!-- Post Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="iconSize"
        :height="iconSize"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        class="text-orange-400"
      >
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src?: string;
    alt: string;
    title: string;
    aspectRatio?: string;
    rounded?: string;
    sizes?: string;
    hoverScale?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
  }>(),
  {
    aspectRatio: 'aspect-[16/10]',
    rounded: '',
    sizes: 'xs:100vw sm:50vw md:33vw lg:33vw',
    hoverScale: true,
    size: 'md',
  }
);

const imageError = ref(false);

const handleImageError = (event: string | Event) => {
  if (typeof event !== 'string') {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.style.display = 'none';
      imageError.value = true;
    }
  }
};

const firstLetter = computed(() => {
  return props.title.charAt(0).toUpperCase();
});

// Size configurations based on size prop
const iconSize = computed(() => {
  const sizes = {
    xs: 20,
    sm: 40,
    md: 48,
    lg: 64,
  };
  return sizes[props.size];
});

const letterSize = computed(() => {
  const sizes = {
    xs: 'text-xl',
    sm: 'text-4xl',
    md: 'text-5xl',
    lg: 'text-6xl',
  };
  return sizes[props.size];
});
</script>
