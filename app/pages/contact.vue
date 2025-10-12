<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-orange-100 via-sky-50 to-purple-100 py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center">
          <div class="mb-6 text-8xl">💬</div>
          <h1 class="mb-6 text-5xl font-black text-slate-900 lg:text-7xl">
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
            <Card class="rounded-3xl border-2 border-green-200 bg-green-50 p-8 text-center transition-all hover:shadow-xl hover:scale-105">
              <div class="mb-6 text-7xl">📱</div>
              <h2 class="mb-4 text-2xl font-bold text-slate-900">WhatsApp</h2>
              <p class="mb-6 leading-relaxed text-slate-600">
                Quick questions? Chat with us instantly on WhatsApp. We usually respond within 30 minutes!
              </p>
              <Button
                as-child
                size="lg"
                class="w-full rounded-full bg-green-500 font-bold hover:bg-green-600"
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener">
                  <Icon name="mdi:whatsapp" class="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </Card>

            <!-- Email -->
            <Card class="rounded-3xl border-2 border-orange-200 bg-orange-50 p-8 text-center transition-all hover:shadow-xl hover:scale-105">
              <div class="mb-6 text-7xl">📧</div>
              <h2 class="mb-4 text-2xl font-bold text-slate-900">Email</h2>
              <p class="mb-6 leading-relaxed text-slate-600">
                Prefer email? Send us your questions and we'll get back to you within 24 hours.
              </p>
              <Button
                as-child
                size="lg"
                class="w-full rounded-full bg-orange-500 font-bold hover:bg-orange-600"
              >
                <a href="mailto:hello@zamzamxp.com">
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
            
            <form class="space-y-6">
              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label for="name" class="mb-2 block text-sm font-semibold text-slate-900">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label for="email" class="mb-2 block text-sm font-semibold text-slate-900">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="mb-2 block text-sm font-semibold text-slate-900">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none"
                  placeholder="Planning a trek to Nepal"
                />
              </div>

              <div>
                <label for="message" class="mb-2 block text-sm font-semibold text-slate-900">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none"
                  placeholder="Tell us about your dream adventure..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                class="w-full rounded-full bg-orange-500 py-6 font-bold hover:bg-orange-600"
              >
                Send Message
                <Icon name="mdi:send" class="ml-2 h-5 w-5" />
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
              <div class="text-sm text-slate-600">Kathmandu, Nepal</div>
            </div>

            <div class="text-center">
              <div class="mb-3 text-4xl">⏰</div>
              <div class="font-bold text-slate-900">Response Time</div>
              <div class="text-sm text-slate-600">Within 24 hours</div>
            </div>

            <div class="text-center">
              <div class="mb-3 text-4xl">🌐</div>
              <div class="font-bold text-slate-900">Languages</div>
              <div class="text-sm text-slate-600">English, Nepali, French</div>
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

useSeoMeta({
  title: 'Contact Us',
  description: 'Get in touch with ZamZam XP. Plan your adventure in Nepal or Morocco. Quick response via WhatsApp or email.',
})
</script>
