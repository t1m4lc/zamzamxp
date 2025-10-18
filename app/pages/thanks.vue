<template>
 <div class="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
  <div class="flex flex-col items-center gap-6 overflow-hidden">
   <h1 class="text-3xl font-bold text-center text-gray-900 dark:text-white">{{ $t('thanks.title') }}</h1>
   <div class="overflow-hidden rounded-xl shadow-lg flex items-center justify-center bg-white dark:bg-gray-800" style="width:320px;height:240px;">
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXRuZTBoZTl2eGU0eWM4ZXA2cTE4cmVtYTAyZDg0MnVoZXFvZGNkdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2wJsC23ikJg9xe/giphy.gif" alt="Merci GIF" class="w-full h-full object-contain" />
   </div>
   <p class="text-lg text-center text-gray-600 dark:text-gray-300 max-w-xl">
    {{ $t('thanks.description') }}
   </p>
   <div class="flex gap-4 mt-4">
    <Button class="cursor-pointer" as-child>
     <NuxtLink to="/">
      {{ $t('thanks.home') }}
     </NuxtLink>
    </Button>

    <Button class="cursor-pointer" as-child variant="secondary">
     <NuxtLink to="/destinations">
      {{ $t('thanks.explore') }} </NuxtLink>
    </Button>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
import Button from '~/components/ui/button/Button.vue';

</script>
