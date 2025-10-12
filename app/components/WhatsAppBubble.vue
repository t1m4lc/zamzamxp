<template>
  <Teleport to="body">
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <Icon name="mdi:whatsapp" class="h-10 w-10" />
    </a>
  </Teleport>
</template>

<script setup lang="ts">
const route = useRoute()

const whatsappUrl = computed(() => {
  const phoneNumber = '1234567890' // Replace with actual WhatsApp number
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

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
})
</script>


