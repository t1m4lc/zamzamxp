<template>
  <footer class="border-t bg-white">
    <div class="container mx-auto px-4 py-16">
      <!-- Main Footer Content -->
      <div class="grid gap-12 md:grid-cols-3 lg:grid-cols-3">
        <!-- Brand -->
        <div class="space-y-4">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-2xl font-semibold text-slate-900">Zamzam <span class="text-sm font-mono text-slate-700">experience</span></span>
          </NuxtLink>
          <p class="text-sm leading-relaxed text-slate-600">
            {{ $t('footer.brand.description') }}
          </p>
        </div>

        <!-- Destinations -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-slate-900">{{ $t('footer.destinations') }}</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                :to="getCountryPath('nepal')"
                class="group flex items-center space-x-2 text-sm text-slate-600 transition-colors hover:text-orange-600"
              >
                <span class="text-lg">🇳🇵</span>
                <span class="group-hover:translate-x-1 transition-transform">{{ $t('countries.nepal') }}</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="getCountryPath('morocco')"
                class="group flex items-center space-x-2 text-sm text-slate-600 transition-colors hover:text-orange-600"
              >
                <span class="text-lg">🇲🇦</span>
                <span class="group-hover:translate-x-1 transition-transform">{{ $t('countries.morocco') }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-slate-900">{{ $t('footer.getInTouch') }}</h3>
          <ul class="space-y-3">
            <li>
              <a
                :href="`https://wa.me/${APP_CONFIG.company.whatsapp}`"
                target="_blank"
                rel="noopener"
                class="flex items-center space-x-2 text-sm text-slate-600 transition-colors hover:text-green-600"
              >
                <MessageCircle class="size-3" />
                <span>{{ $t('footer.whatsapp') }}</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@zamzamxp.com"
                class="flex items-center space-x-2 text-sm text-slate-600 transition-colors hover:text-orange-600"
              >
                <Mail class="size-3" />
                <span>hello@zamzamxp.com</span>
              </a>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="flex items-center space-x-2 text-sm text-slate-600 transition-colors hover:text-orange-600"
              >
                <Phone class="size-3" />
                <span>{{ $t('footer.contactUs') }}</span>
              </NuxtLink>
            </li>
          </ul>

          <!-- Trust Badges -->
          <div class="pt-4 space-y-2">
            <div class="flex items-center space-x-2 text-xs text-slate-500">
              <Leaf class="size-3 text-green-600" />
              <span>{{ $t('footer.ecoFriendly') }}</span>
            </div>
            <div class="flex items-center space-x-2 text-xs text-slate-500">
              <Handshake class="size-3 text-green-600" />
              <span>{{ $t('footer.fairRemuneration') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 border-t pt-8">
        <div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p class="text-center text-sm text-slate-500">
            {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
          </p>
          <div class="flex items-center space-x-4 text-xs text-slate-400">
            <NuxtLink to="/terms" class="hover:text-slate-600 transition-colors">{{ $t('common.terms') }}</NuxtLink>
            <span>•</span>
            <NuxtLink to="/privacy" class="hover:text-slate-600 transition-colors">{{ $t('common.privacy') }}</NuxtLink>
          </div>
          
          <!-- Language Selector -->
          <div class="flex items-center gap-2">
            <select
              v-model="currentLocale"
              @change="switchLanguage"
              class="px-3 py-2 text-sm font-medium rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all cursor-pointer"
            >
              <option
                v-for="loc in availableLocales"
                :key="loc.code"
                :value="loc.code"
              >
                {{ loc.flag }} {{ loc.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { APP_CONFIG } from '~/config/constants'
import { MessageCircle, Mail, Phone, Leaf, Handshake } from 'lucide-vue-next'

const { locale, locales, setLocale } = useI18n()
const { getCountryPath } = useLocalizedRoutes()

const availableLocales = computed(() => locales.value)
const currentLocale = computed({
  get: () => locale.value,
  set: (value) => setLocale(value as 'en' | 'fr' | 'nl')
})

const switchLanguage = async (event: Event) => {
  const target = event.target as HTMLSelectElement
  const newLocale = target.value as 'en' | 'fr' | 'nl'
  await setLocale(newLocale)
  
  // Force page reload to fetch content in new locale
  // This is necessary because content is loaded server-side
  if (import.meta.client) {
    window.location.reload()
  }
}
</script>
