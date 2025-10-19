<template>
  <div>
    <!-- Hero -->
    <section class="relative py-16 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5"></div>
      <div class="container mx-auto px-4 relative">
        <div class="mx-auto max-w-4xl text-center">
          <h1 class="mb-6 text-4xl font-semibold text-slate-900 lg:text-5xl">
            {{ $t('about.title') }}
          </h1>
          <p class="text-xl leading-relaxed text-slate-600">
            {{ $t('about.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl">
          <h2 class="mb-8 text-3xl font-semibold text-slate-900">{{ $t('about.ourStory') }}</h2>
          <div class="prose prose-lg space-y-6 text-slate-700">
            <p>
              {{ $t('about.storyP1') }}
            </p>
            <p>
              {{ $t('about.storyP2') }}
            </p>
            <p>
              {{ $t('about.storyP3') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="bg-slate-50 py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-4xl font-black text-slate-900 lg:text-5xl">
            {{ $t('about.ourValues') }}
          </h2>
          <p class="text-lg text-slate-600">
            {{ $t('about.valuesDesc') }}
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card class="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
            <h3 class="mb-3 text-lg font-semibold text-slate-900">{{ $t('about.authenticTitle') }}</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              {{ $t('about.authenticDesc') }}
            </p>
          </Card>

          <Card class="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
            <h3 class="mb-3 text-lg font-semibold text-slate-900">{{ $t('about.ecoTitle') }}</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              {{ $t('about.ecoDesc') }}
            </p>
          </Card>

          <Card class="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
            <h3 class="mb-3 text-lg font-semibold text-slate-900">{{ $t('about.fairTitle') }}</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              {{ $t('about.fairDesc') }}
            </p>
          </Card>

          <Card class="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
            <h3 class="mb-3 text-lg font-semibold text-slate-900">{{ $t('about.pricesTitle') }}</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              {{ $t('about.pricesDesc') }}
            </p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Founder -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-5xl">
          <Card class="overflow-hidden rounded-2xl border border-slate-200">
            <div class="grid gap-12 p-8 lg:grid-cols-2 lg:p-12">
              <div>
                <div class="mb-6 aspect-square overflow-hidden rounded-2xl">
                  <NuxtImg 
                    class="rounded-2xl object-cover w-full h-full" 
                    src="/images/pages/timothy-alcaide-founder.jpg" 
                    alt="Profile picture of Timothy Alcaide" 
                    sizes="xs:100vw sm:100vw md:50vw lg:33vw xl:25vw"
                    placeholder="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter:url(%23b)' href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='/%3E%3C/svg%3E"
                    loading="lazy"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-center">
                  <div class="mb-2 text-sm font-medium text-slate-600">{{ $t('about.founder.title') }}</div>
                  <h2 class="mb-4 text-3xl font-semibold text-slate-900">Timothy Alcaide</h2>
                  <p class="mb-4 leading-relaxed text-slate-700">
                    {{ $t('about.founder.bio1') }}
                  </p>
                  <p class="mb-4 leading-relaxed text-slate-700">
                    {{ $t('about.founder.bio2') }}
                  </p>
                  <p class="mb-6 leading-relaxed text-slate-700">
                    {{ $t('about.founder.bio3') }}
                  </p>
                </div>
              </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Local Partners -->
    <section class="bg-slate-50 py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="mb-6 text-3xl font-semibold text-slate-900">
            {{ $t('about.partners.title') }}
          </h2>
          <p class="mb-12 text-lg leading-relaxed text-slate-600">
            {{ $t('about.partners.description') }}
          </p>

          <div class="grid gap-8 md:grid-cols-3">
            <div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 class="mb-2 text-lg font-semibold text-slate-900">{{ $t('about.partners.guidesTitle') }}</h3>
              <p class="text-sm text-slate-600">
                {{ $t('about.partners.guidesDesc') }}
              </p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 class="mb-2 text-lg font-semibold text-slate-900">{{ $t('about.partners.businessTitle') }}</h3>
              <p class="text-sm text-slate-600">
                {{ $t('about.partners.businessDesc') }}
              </p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 class="mb-2 text-lg font-semibold text-slate-900">{{ $t('about.partners.communityTitle') }}</h3>
              <p class="text-sm text-slate-600">
                {{ $t('about.partners.communityDesc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equity & Impact -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <div class="mb-16 text-center">
            <h2 class="mb-4 text-3xl font-semibold text-slate-900">
              {{ $t('about.commitment.title') }}
            </h2>
            <p class="text-lg text-slate-600">
              {{ $t('about.commitment.subtitle') }}
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <Card class="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 class="mb-4 flex items-center space-x-2 text-xl font-semibold text-slate-900">
                <Banknote class="h-6 w-6 text-green-600" />
                <span>{{ $t('about.commitment.fairRemTitle') }}</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                {{ $t('about.commitment.fairRemDesc') }}
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>{{ $t('about.commitment.fairRemBullet1') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>{{ $t('about.commitment.fairRemBullet2') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>{{ $t('about.commitment.fairRemBullet3') }}</span>
                </li>
              </ul>
            </Card>

            <Card class="rounded-3xl border-2 border-slate-200 bg-white/95 backdrop-blur-sm p-8">
              <h3 class="mb-4 flex items-center space-x-2 text-2xl font-bold text-slate-900">
                <Users class="h-7 w-7 text-[#FF6B35]" />
                <span>{{ $t('about.commitment.communityTitle') }}</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                {{ $t('about.commitment.communityDesc') }}
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF6B35]" />
                  <span>{{ $t('about.commitment.communityBullet1') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF6B35]" />
                  <span>{{ $t('about.commitment.communityBullet2') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF6B35]" />
                  <span>{{ $t('about.commitment.communityBullet3') }}</span>
                </li>
              </ul>
            </Card>
            <Card class="rounded-3xl border-2 border-slate-200 bg-white/95 backdrop-blur-sm p-8">
              <h3 class="mb-4 flex items-center space-x-2 text-2xl font-bold text-slate-900">
                <Leaf class="h-7 w-7 text-green-600" />
                <span>{{ $t('about.commitment.envTitle') }}</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                {{ $t('about.commitment.envDesc') }}
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>{{ $t('about.commitment.envBullet1') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>{{ $t('about.commitment.envBullet2') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>{{ $t('about.commitment.envBullet3') }}</span>
                </li>
              </ul>
            </Card>

            <Card class="rounded-3xl border-2 border-slate-200 bg-white/95 backdrop-blur-sm p-8">
              <h3 class="mb-4 flex items-center space-x-2 text-2xl font-bold text-slate-900">
                <UserCheck class="h-7 w-7 text-purple-600" />
                <span>{{ $t('about.commitment.inclusiveTitle') }}</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                {{ $t('about.commitment.inclusiveDesc') }}
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                  <span>{{ $t('about.commitment.inclusiveBullet1') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                  <span>{{ $t('about.commitment.inclusiveBullet2') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                  <span>{{ $t('about.commitment.inclusiveBullet3') }}</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-white/95 backdrop-blur-sm py-20 border-y">
      <div class="container mx-auto px-4">
        <div class="grid gap-8 md:grid-cols-3">
          <div class="text-center">
            <div class="mb-2 text-5xl font-semibold text-slate-900">
              <NumberTicker :value="100" :decimal-places="0" />+
            </div>
            <div class="text-lg text-slate-600">{{ $t('about.stats.customers') }}</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-5xl font-semibold text-slate-900">
              <NumberTicker :value="10" :decimal-places="0" />+
            </div>
            <div class="text-lg text-slate-600">{{ $t('about.stats.partners') }}</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-5xl font-semibold text-slate-900">
              <NumberTicker :value="2" :decimal-places="0" />+
            </div>
            <div class="text-lg text-slate-600">{{ $t('about.stats.countries') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="mb-6 text-4xl font-black text-slate-900 lg:text-5xl">
            {{ $t('about.cta.title') }}
          </h2>
          <p class="mb-10 text-xl leading-relaxed text-slate-600">
            {{ $t('about.cta.subtitle') }}
          </p>
          <Button as-child size="lg" class="rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-12 py-6 text-base font-medium shadow-lg hover:shadow-xl">
            <NuxtLink to="/contact">
              {{ $t('about.cta.button') }}
              <ArrowRight class="ml-2 h-5 w-5" />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { NumberTicker } from '~/components/ui/number-ticker'
import { Banknote, Check, Users, Leaf, UserCheck, ArrowRight } from 'lucide-vue-next'

const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.about.title'),
  description: () => t('seo.about.description'),
  ogTitle: () => t('seo.about.ogTitle'),
  ogDescription: () => t('seo.about.ogDescription'),
  ogType: "website",
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  defineOrganization({
    name: "Zamzam Experience",
    description:
      "Connecting travelers with passionate local guides for authentic adventures around the world",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Timothy Alcaide",
      jobTitle: "Founder",
    },
  }),
  defineWebPage({
    "@type": "AboutPage",
    name: "About Zamzam Experience",
  }),
])
</script>
