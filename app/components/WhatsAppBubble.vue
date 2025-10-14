<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-50"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-50"
    >
      <a
        v-if="isVisible"
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="fixed bottom-4 right-6 z-50  flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl md:hidden"
        aria-label="Chat on WhatsApp"
      >
        <Icon name="mdi:whatsapp" class="h-12 w-12" />
      </a>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { APP_CONFIG } from '~/config/constants'

const route = useRoute()
const isVisible = ref(false)

// Show WhatsApp bubble after scrolling down
onMounted(() => {
  const handleScroll = () => {
    // Show after scrolling 300px down
    isVisible.value = window.scrollY > 300
  }

  // Initial check
  handleScroll()

  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

const whatsappUrl = computed(() => {
  const phoneNumber = APP_CONFIG.company.whatsapp
  let message = 'Hi! I\'m interested in your tours'

  // Dynamic message based on current page
  const { country, activity, slug } = route.params

  if (slug && country && activity) {
    // On experience detail page
    const title = String(slug).split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
    message = `Hi! I'm interested in ${title}`
  } else if (activity && country) {
    // On activity list page
    const activityName = String(activity).charAt(0).toUpperCase() + String(activity).slice(1)
    const countryName = String(country).charAt(0).toUpperCase() + String(country).slice(1)
    message = `Hi! I'm interested in ${activityName} in ${countryName}`
  } else if (country) {
    // On country page
    const countryName = String(country).charAt(0).toUpperCase() + String(country).slice(1)
    message = `Hi! I'm interested in ${countryName} adventures`
  }

  // Use api.whatsapp.com for better mobile redirect
  return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
})
</script>


