<template>
  <div>
    <!-- Hero -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5"></div>
      <div class="container mx-auto px-4 relative">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="mb-6 text-5xl font-semibold text-slate-900 lg:text-6xl">
            {{ $t('contact.hero.title') }}
          </h1>
          <p class="text-xl leading-relaxed text-slate-600">
            {{ $t('contact.hero.subtitle') }}
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
            <div class="rounded-2xl flex flex-col justify-between border border-green-100 bg-green-50 p-8 text-center">
              <div>
                <MessageCircle class="mx-auto mb-4 size-8 text-green-500" />
              <h3 class="mb-2 text-xl font-bold text-slate-900">{{ $t('contact.whatsapp.title') }}</h3>
              <p class="mb-6 leading-relaxed text-slate-600">
                {{ $t('contact.whatsapp.description') }}
              </p>
              </div>
              <div>
                <a :href="getWhatsAppUrl()" target="_blank" rel="noopener" class="inline-flex w-full items-center justify-center rounded-lg bg-green-500 px-6 py-3 font-medium text-white hover:bg-green-600 transition-colors" @click="trackWhatsAppClick">
                  <MessageCircle class="mr-2 h-5 w-5" />
                  {{ $t('contact.whatsapp.button') }}
                </a>
              </div>
            </div>

            <!-- Email -->
            <div class="rounded-2xl flex justify-between flex-col border border-orange-100 bg-orange-50 p-8 text-center">
              <div>
                <Mail class="mx-auto mb-4 size-8 text-orange-500" />
                <h3 class="mb-2 text-xl font-bold text-slate-900">{{ $t('contact.email.title') }}</h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  {{ $t('contact.email.description') }}
                </p>

              </div>
              <div>
                <a href="mailto:timothyalcaide+zamzamxp@gmail.com" class="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-6 py-3 font-medium text-white hover:opacity-90 transition-opacity" @click="trackEmailClick">
                  <Mail class="mr-2 h-5 w-5" />
                  {{ $t('contact.email.button') }}
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form - Temporarily disabled -->
          <!-- <ContactForm /> -->

          <!-- Additional Contact Info -->
          <div class="mt-12 grid gap-6 md:grid-cols-3">
            <div class="text-center">
              <div class="mb-3 text-4xl">📍</div>
              <div class="font-bold text-slate-900">{{ $t('contact.info.locationTitle') }}</div>
              <div class="text-sm text-slate-600">{{ APP_CONFIG.contact.location }}</div>
            </div>

            <div class="text-center">
              <div class="mb-3 text-4xl">⏰</div>
              <div class="font-bold text-slate-900">{{ $t('contact.info.responseTimeTitle') }}</div>
              <div class="text-sm text-slate-600">{{ APP_CONFIG.contact.responseTime }}</div>
            </div>

            <div class="text-center">
              <div class="mb-3 text-4xl">🌐</div>
              <div class="font-bold text-slate-900">{{ $t('contact.info.languagesTitle') }}</div>
              <div class="text-sm text-slate-600">{{ APP_CONFIG.contact.languages }}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { APP_CONFIG } from '~/config/constants'
import { MessageCircle, Mail } from 'lucide-vue-next'

const { getWhatsAppUrl } = useContact()
const { t } = useI18n()

// Track WhatsApp click
const trackWhatsAppClick = () => {
  useTrackEvent('contact_whatsapp', {
    page: 'contact',
    method: 'whatsapp'
  })
}

// Track Email click
const trackEmailClick = () => {
  useTrackEvent('contact_email', {
    page: 'contact',
    method: 'email'
  })
}

useSeoMeta({
  title: () => t('seo.contact.title'),
  description: () => t('seo.contact.description'),
  ogTitle: () => t('seo.contact.ogTitle'),
  ogDescription: () => t('seo.contact.ogDescription'),
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
      email: "timothyalcaide+zamzamxp@gmail.com",
      availableLanguage: ["English", "French"],
    },
  }),
])

// Form component available at ~/components/ContactForm.vue
// Uncomment the <ContactForm /> line above when ready to use
</script>
