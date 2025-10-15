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
            {{ $t('footer.description') }}
          </p>
        </div>

        <!-- Destinations -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-slate-900">{{ $t('footer.destinations') }}</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/nepal"
                class="group flex items-center space-x-2 text-sm text-slate-600 transition-colors hover:text-orange-600"
              >
                <span class="text-lg">🇳🇵</span>
                <span class="group-hover:translate-x-1 transition-transform">Nepal</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/morocco"
                class="group flex items-center space-x-2 text-sm text-slate-600 transition-colors hover:text-orange-600"
              >
                <span class="text-lg">🇲🇦</span>
                <span class="group-hover:translate-x-1 transition-transform">Morocco</span>
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
                <Icon name="mdi:whatsapp" class="h-5 w-5" />
                <span>{{ $t('footer.whatsapp') }}</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@zamzamxp.com"
                class="flex items-center space-x-2 text-sm text-slate-600 transition-colors hover:text-orange-600"
              >
                <Icon name="mdi:email" class="h-5 w-5" />
                <span>hello@zamzamxp.com</span>
              </a>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="flex items-center space-x-2 text-sm text-slate-600 transition-colors hover:text-orange-600"
              >
                <Icon name="mdi:phone" class="h-5 w-5" />
                <span>{{ $t('footer.contactUs') }}</span>
              </NuxtLink>
            </li>
          </ul>

          <!-- Trust Badges -->
          <div class="pt-4 space-y-2">
            <div class="flex items-center space-x-2 text-xs text-slate-500">
              <Icon name="mdi:leaf" class="h-4 w-4 text-green-600" />
              <span>{{ $t('footer.ecoFriendly') }}</span>
            </div>
            <div class="flex items-center space-x-2 text-xs text-slate-500">
              <Icon name="mdi:handshake" class="h-4 w-4 text-green-600" />
              <span>{{ $t('footer.fairPay') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 border-t pt-8">
        <div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p class="text-center text-sm text-slate-500">
            © {{ new Date().getFullYear() }} Zamzam Experience. {{ $t('footer.rights') }}.
          </p>
          <div class="flex items-center space-x-4 text-xs text-slate-400">
            <NuxtLink to="/terms" class="hover:text-slate-600 transition-colors">{{ $t('footer.terms') }}</NuxtLink>
            <span>•</span>
            <NuxtLink to="/privacy" class="hover:text-slate-600 transition-colors">{{ $t('footer.privacy') }}</NuxtLink>
            <span>•</span>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:translate" class="h-4 w-4" />
              <select 
                v-model="locale" 
                @change="handleLocaleChange"
                class="bg-transparent border-none text-xs text-slate-400 hover:text-slate-600 transition-colors cursor-pointer focus:outline-none focus:ring-0"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { APP_CONFIG } from '~/config/constants'

const { locale } = useI18n()
const { saveLocale } = useLocaleStorage()

const handleLocaleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const newLocale = target.value as 'en' | 'fr'
  saveLocale(newLocale)
}
</script>
