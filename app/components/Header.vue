<template>
  <header class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
    <div class="container mx-auto flex h-20 items-center justify-between px-6">
      <!-- Logo -->
      <NuxtLink :to="localizedPath('/')" class="flex items-center space-x-2 transition-opacity hover:opacity-80">
        <span class="text-2xl font-semibold text-slate-900">Zamzam

          <FlipWords :words="['experience', 'adventure', 'tours', 'traveling']" :duration="5000" class="text-sm font-mono text-slate-700" />
        </span>

      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden items-center space-x-1 lg:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <!-- Destinations -->
            <NavigationMenuItem>
              <NavigationMenuLink as-child>
                <NuxtLink :to="localizedPath('/destinations')" class="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50">
                  {{ $t('nav.destinations') }}
                </NuxtLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <!-- About -->
            <NavigationMenuItem>
              <NavigationMenuLink as-child>
                <NuxtLink :to="localizedPath('/about')" class="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50">
                  {{ $t('nav.about') }}
                </NuxtLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <!-- CTA Button -->
        <Button as-child class="ml-4 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-6 py-2.5 text-sm font-medium text-white hover:from-[#FF5520] hover:to-[#E8820F] transition-all shadow-sm hover:shadow">
          <NuxtLink :to="localizedPath('/contact')">
            {{ $t('nav.getStarted') }}
          </NuxtLink>
        </Button>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 hover:bg-slate-50 rounded-lg transition-all">
        <Icon v-if="!mobileMenuOpen" name="lucide:menu" class="h-6 w-6 text-slate-700" />
        <Icon v-else name="lucide:x" class="h-6 w-6 text-slate-700" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="mobileMenuOpen" class="border-t bg-white lg:hidden">
        <nav class="container mx-auto space-y-1 px-4 py-4">
          <!-- Destinations -->
          <NuxtLink :to="localizedPath('/destinations')" class="block rounded-xl px-4 py-3 font-semibold text-slate-900 hover:bg-slate-100" @click="mobileMenuOpen = false">
            {{ $t('nav.destinations') }}
          </NuxtLink>

          <!-- Other Links -->
          <NuxtLink :to="localizedPath('/about')" class="block rounded-xl px-4 py-3 font-semibold text-slate-900 hover:bg-slate-100" @click="mobileMenuOpen = false">
            {{ $t('nav.about') }}
          </NuxtLink>

          <!-- Mobile CTA -->
          <Button as-child class="w-full rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] py-6 text-base font-medium text-white">
            <NuxtLink :to="localizedPath('/contact')" @click="mobileMenuOpen = false">
              {{ $t('nav.getStarted') }}
            </NuxtLink>
          </Button>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu'
import { Button } from '~/components/ui/button'
import FlipWords from './ui/flip-words/FlipWords.vue'

const mobileMenuOpen = ref(false)
const { locale } = useI18n()
const { getLocalizedRoute } = useLocaleRoutes()

// Helper to create locale-aware paths with translated route names
const localizedPath = (path: string) => {
  if (path === '/') return '/'
  
  // Extract route key (e.g., '/about' -> 'about')
  const routeKey = path.replace('/', '')
  
  // Get the translated route name
  const translatedRoute = getLocalizedRoute(routeKey)
  
  return `/${translatedRoute}`
}

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
