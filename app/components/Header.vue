<template>
  <header class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
    <div class="container mx-auto flex h-20 items-center justify-between px-6">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2 transition-opacity hover:opacity-80">
        <span class="text-2xl font-semibold text-slate-900">Zamzam

          <FlipWords :words="['experience', 'adventure', 'tours', 'traveling']" :duration="5000" class="text-sm font-mono text-slate-700" />
        </span>

      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden items-center space-x-1 lg:flex">
        <NavigationMenu v-model="activeMenu">
          <NavigationMenuList>
                        <!-- Blog with Dropdown -->
            <NavigationMenuItem value="blog">
              <NavigationMenuTrigger class="h-10 cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50 hover:text-slate-900">
                {{ $t('nav.blog') }}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ClientOnly>
                <div class="w-[400px]">
                  <div class="grid gap-3 p-3">
                    <!-- Recent posts list (limited to 3) -->
                    <div class="space-y-2">
                      <!-- Posts list (show max 3) -->
                      <template v-if="recentPosts && recentPosts.length > 0">
                        <NuxtLink
                          v-for="post in recentPosts"
                          :key="post.path"
                          :to="$localePath(`/blog/${extractSlug(post.path)}`)"
                          class="flex items-center gap-3 group rounded-lg p-2 hover:bg-slate-50 transition-colors"
                          @click="closeBlogMenu"
                        >
                          <!-- Image or fallback -->
                          <BlogImageCard
                            :src="post.image"
                            :alt="post.title"
                            :title="post.title"
                            size="xs"
                            aspect-ratio="aspect-square"
                            rounded="rounded-lg"
                            :hover-scale="false"
                            class="flex-shrink-0 w-16 h-16"
                          />
                          <div class="flex-1 min-w-0 flex flex-col justify-center">
                            <div class="font-medium text-sm text-slate-900 group-hover:text-orange-600 line-clamp-2 leading-snug mb-1">
                              {{ post.title }}
                            </div>
                            <div class="text-xs text-slate-400">
                              {{ formatDate(post.date) }}
                            </div>
                          </div>
                        </NuxtLink>
                      </template>
                      
                      <!-- No posts message -->
                      <div v-else class="text-xs text-slate-400 text-center py-2">
                        {{ $t('blog.noPosts.description') }}
                      </div>
                    </div>
                  </div>

                  <!-- View all link -->
                  <div class="border-t px-3 py-2 bg-slate-50">
                    <NuxtLink
                      to="/blog"
                      class="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                      @click="closeBlogMenu"
                    >
                      {{ $t('blog.viewAll') }}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
                </ClientOnly>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <!-- Destinations -->
            <NavigationMenuItem>
              <NavigationMenuLink as-child>
                <NuxtLink to="/destinations" class="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50">
                  {{ $t('nav.destinations') }}
                </NuxtLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <!-- About -->
            <NavigationMenuItem>
              <NavigationMenuLink as-child>
                <NuxtLink to="/about" class="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50">
                  {{ $t('nav.about') }}
                </NuxtLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <!-- CTA Button -->
        <Button as-child class="ml-4 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-6 py-2.5 text-sm font-medium text-white hover:from-[#FF5520] hover:to-[#E8820F] transition-all shadow-sm hover:shadow">
          <NuxtLink to="/contact">
            {{ $t('nav.contact') }}
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
          <NuxtLink to="/destinations" class="block rounded-xl px-4 py-3 font-semibold text-slate-900 hover:bg-slate-100" @click="mobileMenuOpen = false">
            {{ $t('nav.destinations') }}
          </NuxtLink>

          <!-- Blog -->
          <NuxtLink to="/blog" class="block rounded-xl px-4 py-3 font-semibold text-slate-900 hover:bg-slate-100" @click="mobileMenuOpen = false">
            {{ $t('nav.blog') }}
          </NuxtLink>

          <!-- Other Links -->
          <NuxtLink to="/about" class="block rounded-xl px-4 py-3 font-semibold text-slate-900 hover:bg-slate-100" @click="mobileMenuOpen = false">
            {{ $t('nav.about') }}
          </NuxtLink>

          <!-- Mobile CTA -->
          <Button as-child class="w-full rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] py-6 text-base font-medium text-white">
            <NuxtLink to="/contact" @click="mobileMenuOpen = false">
              {{ $t('nav.contact') }}
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
const activeMenu = ref<string>()
const { locale } = useI18n()
const { fetchBlogPosts } = useBlog()

// Fetch recent blog posts for navigation menu (lazy load to avoid blocking)
const { data: recentPosts } = useLazyAsyncData(
  `header-blog-posts-${locale.value}`,
  async () => {
    try {
      return await fetchBlogPosts(3)
    } catch (error) {
      console.error('Error fetching blog posts for header:', error)
      return []
    }
  },
  {
    watch: [locale]
  }
)

// Extract slug from path
const extractSlug = (path: string) => {
  const parts = path.split('/')
  const filename = parts[parts.length - 1]
  return filename ? filename.replace('.md', '') : ''
}

// Format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

// Close blog dropdown menu
const closeBlogMenu = () => {
  activeMenu.value = undefined
}

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
