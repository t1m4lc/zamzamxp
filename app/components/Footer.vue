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
            Connecting travelers with passionate local guides for authentic adventures around the world.
          </p>
        </div>

        <!-- Destinations -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-slate-900">Destinations</h3>
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
          <h3 class="text-lg font-bold text-slate-900">Get in Touch</h3>
          <ul class="space-y-3">
            <li>
              <a
                :href="`https://wa.me/${APP_CONFIG.company.whatsapp}`"
                target="_blank"
                rel="noopener"
                class="flex items-center space-x-2 text-sm text-slate-600 transition-colors hover:text-green-600"
              >
                <MessageCircle class="size-3" />
                <span>WhatsApp</span>
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
                <span>Contact Us</span>
              </NuxtLink>
            </li>
          </ul>

          <!-- Trust Badges -->
          <div class="pt-4 space-y-2">
            <div class="flex items-center space-x-2 text-xs text-slate-500">
              <Leaf class="size-3 text-green-600" />
              <span>Eco-Friendly & Sustainable</span>
            </div>
            <div class="flex items-center space-x-2 text-xs text-slate-500">
              <Handshake class="size-3 text-green-600" />
              <span>Fair Remuneration for Partners</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 border-t pt-8">
        <div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p class="text-center text-sm text-slate-500">
            © {{ new Date().getFullYear() }} Zamzam Experience. All rights reserved.
          </p>
          <div class="flex items-center space-x-4 text-xs text-slate-400">
            <NuxtLink to="/terms" class="hover:text-slate-600 transition-colors">Terms</NuxtLink>
            <span>•</span>
            <NuxtLink to="/privacy" class="hover:text-slate-600 transition-colors">Privacy</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { APP_CONFIG } from '~/config/constants'
import { MessageCircle, Mail, Phone, Leaf, Handshake } from 'lucide-vue-next'
</script>
