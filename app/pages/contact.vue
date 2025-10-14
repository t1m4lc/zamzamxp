<template>
  <div>
    <!-- Hero -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5"></div>
      <div class="container mx-auto px-4 relative">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="mb-6 text-5xl font-semibold text-slate-900 lg:text-6xl">
            Let's Chat!
          </h1>
          <p class="text-xl leading-relaxed text-slate-600">
            Planning your adventure? We're here to help!
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Options -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <div class="mb-16 grid gap-8 md:grid-cols-2">
            <!-- WhatsApp -->
            <Card class="rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all hover:shadow-lg">
              <Icon name="mdi:whatsapp" class="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h2 class="mb-4 text-xl font-semibold text-slate-900">WhatsApp</h2>
              <p class="mb-6 leading-relaxed text-slate-600">
                Quick questions? Chat with us instantly on WhatsApp. We usually respond within 30 minutes!
              </p>
              <Button
                as-child
                size="lg"
                class="w-full rounded-lg bg-green-500 font-medium hover:bg-green-600"
              >
                <a :href="getWhatsAppUrl()" target="_blank" rel="noopener">
                  <Icon name="mdi:whatsapp" class="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </Card>

            <!-- Email -->
            <Card class="rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all hover:shadow-lg">
              <Icon name="mdi:email" class="mx-auto mb-4 h-12 w-12 text-orange-500" />
              <h2 class="mb-4 text-xl font-semibold text-slate-900">Email</h2>
              <p class="mb-6 leading-relaxed text-slate-600">
                Prefer email? Send us your questions and we'll get back to you within 24 hours.
              </p>
              <Button
                as-child
                size="lg"
                class="w-full rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] font-medium"
              >
                <a :href="`mailto:${APP_CONFIG.company.email}`">
                  <Icon name="mdi:email" class="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </Card>
          </div>

          <!-- Contact Form -->
          <Card class="rounded-3xl border-2 border-slate-200 bg-white p-8 lg:p-12">
            <h2 class="mb-8 text-center text-3xl font-black text-slate-900">
              Send Us a Message
            </h2>
            
            <!-- Success Message -->
            <div
              v-if="formState.success"
              class="mb-6 rounded-xl border-2 border-green-200 bg-green-50 p-4 text-center"
            >
              <Icon name="mdi:check-circle" class="mb-2 inline-block h-8 w-8 text-green-500" />
              <p class="font-semibold text-green-800">
                {{ formState.successMessage }}
              </p>
            </div>

            <!-- Error Message -->
            <div
              v-if="formState.error"
              class="mb-6 rounded-xl border-2 border-red-200 bg-red-50 p-4 text-center"
            >
              <Icon name="mdi:alert-circle" class="mb-2 inline-block h-8 w-8 text-red-500" />
              <p class="font-semibold text-red-800">
                {{ formState.errorMessage }}
              </p>
            </div>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label for="name" class="mb-2 block text-sm font-semibold text-slate-900">
                    Your Name *
                  </label>
                  <input
                    v-model="formData.name"
                    type="text"
                    id="name"
                    class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none"
                    placeholder="John Doe"
                    required
                    :disabled="formState.loading"
                  />
                </div>

                <div>
                  <label for="email" class="mb-2 block text-sm font-semibold text-slate-900">
                    Email Address *
                  </label>
                  <input
                    v-model="formData.email"
                    type="email"
                    id="email"
                    class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none"
                    placeholder="john@example.com"
                    required
                    :disabled="formState.loading"
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="mb-2 block text-sm font-semibold text-slate-900">
                  Subject
                </label>
                <input
                  v-model="formData.subject"
                  type="text"
                  id="subject"
                  class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none"
                  placeholder="Planning a trek to Nepal"
                  :disabled="formState.loading"
                />
              </div>

              <div>
                <label for="message" class="mb-2 block text-sm font-semibold text-slate-900">
                  Message *
                </label>
                <textarea
                  v-model="formData.message"
                  id="message"
                  rows="6"
                  class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none"
                  placeholder="Tell us about your dream adventure..."
                  required
                  :disabled="formState.loading"
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                class="w-full rounded-full bg-orange-500 py-6 font-bold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="formState.loading"
              >
                <span v-if="formState.loading">
                  <Icon name="mdi:loading" class="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </span>
                <span v-else>
                  Send Message
                  <Icon name="mdi:send" class="ml-2 h-5 w-5" />
                </span>
              </Button>
            </form>

            <p class="mt-6 text-center text-sm text-slate-500">
              We respect your privacy and will never share your information.
            </p>
          </Card>

          <!-- Additional Contact Info -->
          <div class="mt-12 grid gap-6 md:grid-cols-3">
            <div class="text-center">
              <div class="mb-3 text-4xl">📍</div>
              <div class="font-bold text-slate-900">Location</div>
              <div class="text-sm text-slate-600">{{ APP_CONFIG.contact.location }}</div>
            </div>

            <div class="text-center">
              <div class="mb-3 text-4xl">⏰</div>
              <div class="font-bold text-slate-900">Response Time</div>
              <div class="text-sm text-slate-600">{{ APP_CONFIG.contact.responseTime }}</div>
            </div>

            <div class="text-center">
              <div class="mb-3 text-4xl">🌐</div>
              <div class="font-bold text-slate-900">Languages</div>
              <div class="text-sm text-slate-600">{{ APP_CONFIG.contact.languages }}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { APP_CONFIG } from '~/config/constants'

const { getWhatsAppUrl } = useContact()

useSeoMeta({
  title: "Contact Us - Plan Your Adventure | Zamzam Experience",
  description:
    "Get in touch to plan your adventure. Quick response via WhatsApp or email. Expert advice on trekking in Nepal, surfing in Morocco, and sustainable adventure travel.",
  ogTitle: "Contact Zamzam Experience",
  ogDescription: "Ready to plan your next adventure? Get in touch with our team.",
  ogType: "website",
  robots: "noindex, follow", // Contact pages typically don't need to be indexed
})

useSchemaOrg([
  defineWebPage({
    "@type": "ContactPage",
    name: "Contact Us",
  }),
  defineOrganization({
    name: "Zamzam Experience",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33767503066",
      contactType: "Customer Service",
      email: "hello@zamzamxp.com",
      availableLanguage: ["English", "French"],
    },
  }),
])

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Form state
const formState = ref({
  loading: false,
  success: false,
  error: false,
  successMessage: '',
  errorMessage: ''
})

// Handle form submission
const handleSubmit = async () => {
  // Reset states
  formState.value.success = false
  formState.value.error = false
  formState.value.loading = true

  try {
    const response = await $fetch<{ success: boolean; message: string }>('/api/contact', {
      method: 'POST',
      body: formData.value
    })

    // Show success message
    formState.value.success = true
    formState.value.successMessage = response.message || 'Your message has been sent successfully!'

    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    // Scroll to success message
    setTimeout(() => {
      const successElement = document.querySelector('.border-green-200')
      successElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)

  } catch (error: any) {
    formState.value.error = true
    formState.value.errorMessage = error.data?.statusMessage || 'Something went wrong. Please try again.'
    
    // Scroll to error message
    setTimeout(() => {
      const errorElement = document.querySelector('.border-red-200')
      errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  } finally {
    formState.value.loading = false
  }
}
</script>
