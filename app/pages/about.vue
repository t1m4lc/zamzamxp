<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-orange-100 via-sky-50 to-purple-100 py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <div class="mb-6 text-8xl">👋</div>
          <h1 class="mb-6 text-5xl font-black text-slate-900 lg:text-7xl">
            Who We Are
          </h1>
          <p class="text-xl leading-relaxed text-slate-600 lg:text-2xl">
            We're adventure enthusiasts on a mission to create unforgettable experiences while supporting local communities.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl">
          <h2 class="mb-8 text-4xl font-black text-slate-900">Our Story</h2>
          <div class="prose prose-lg space-y-6 text-slate-700">
            <p>
              ZamZam XP started in 2010 when two adventure-seeking friends realized something was missing in the travel industry: authentic, locally-led experiences that truly benefit the communities hosting travelers.
            </p>
            <p>
              We began with a single trekking route in Nepal, guided by local Sherpa friends who knew every mountain path and monastery. Word spread, travelers returned, and something magical happened – a community formed around shared adventures and mutual respect.
            </p>
            <p>
              Today, we operate in Nepal and Morocco, working exclusively with local guides, family-run guesthouses, and community cooperatives. Every adventure we offer creates jobs, preserves culture, and protects the environments we love exploring.
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
            Our Values
          </h2>
          <p class="text-lg text-slate-600">
            What drives everything we do
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card class="rounded-3xl border-2 border-orange-200 bg-white p-8 text-center transition-all hover:shadow-xl hover:scale-105">
            <div class="mb-4 text-6xl">🌍</div>
            <h3 class="mb-3 text-xl font-bold text-slate-900">Authentic Local Experiences</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              Every adventure is designed and led by locals who share their genuine culture, stories, and perspectives.
            </p>
          </Card>

          <Card class="rounded-3xl border-2 border-green-200 bg-white p-8 text-center transition-all hover:shadow-xl hover:scale-105">
            <div class="mb-4 text-6xl">🌱</div>
            <h3 class="mb-3 text-xl font-bold text-slate-900">Sustainable & Responsible Tourism</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              We minimize environmental impact, respect local cultures, and ensure tourism benefits communities long-term.
            </p>
          </Card>

          <Card class="rounded-3xl border-2 border-sky-200 bg-white p-8 text-center transition-all hover:shadow-xl hover:scale-105">
            <div class="mb-4 text-6xl">👥</div>
            <h3 class="mb-3 text-xl font-bold text-slate-900">Small Groups, Big Impact</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              Intimate group sizes mean personalized experiences and deeper connections with places and people.
            </p>
          </Card>

          <Card class="rounded-3xl border-2 border-purple-200 bg-white p-8 text-center transition-all hover:shadow-xl hover:scale-105">
            <div class="mb-4 text-6xl">🛡️</div>
            <h3 class="mb-3 text-xl font-bold text-slate-900">Safety & Quality First</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              Licensed guides, comprehensive insurance, proper equipment, and rigorous safety protocols on every adventure.
            </p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Founder -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-5xl">
          <Card class="overflow-hidden rounded-3xl border-2 border-orange-200">
            <div class="grid gap-12 p-8 lg:grid-cols-2 lg:p-12">
              <div>
                <div class="mb-6 aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-orange-400 to-pink-500">
                  <div class="flex h-full items-center justify-center text-9xl text-white">
                    🧗
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <div class="mb-2 text-sm font-semibold text-orange-600">Founder & Lead Guide</div>
                <h2 class="mb-4 text-4xl font-black text-slate-900">Meet Our Founder</h2>
                <p class="mb-6 leading-relaxed text-slate-700">
                  Born in Kathmandu and raised in the shadow of the Himalayas, our founder has been leading adventures for over 15 years. What started as a passion for sharing Nepal's beauty has grown into a mission to transform tourism into a force for good.
                </p>
                <p class="mb-6 leading-relaxed text-slate-700">
                  "I believe travel should enrich everyone involved—the traveler discovers new perspectives, the guide shares their world with pride, and the community thrives from sustainable, respectful tourism. That's what we build with every adventure."
                </p>
                <div class="flex flex-wrap gap-3">
                  <Badge class="bg-orange-500 px-3 py-2 font-semibold">15+ Years Experience</Badge>
                  <Badge class="bg-sky-500 px-3 py-2 font-semibold">Licensed Guide</Badge>
                  <Badge class="bg-green-500 px-3 py-2 font-semibold">Certified Wilderness First Responder</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Local Partners -->
    <section class="bg-gradient-to-br from-sky-50 to-purple-50 py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="mb-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Our Local Partners
          </h2>
          <p class="mb-12 text-lg leading-relaxed text-slate-600">
            We work exclusively with local guides, family-run tea houses, community cooperatives, and small businesses. When you travel with us, you're directly supporting the people who call these places home.
          </p>

          <div class="grid gap-8 md:grid-cols-3">
            <div class="rounded-3xl bg-white p-8 shadow-lg">
              <div class="mb-4 text-5xl">🏔️</div>
              <h3 class="mb-2 text-xl font-bold text-slate-900">Sherpa Guides</h3>
              <p class="text-sm text-slate-600">
                Born and raised in mountain villages, our Sherpa guides are certified professionals with deep cultural knowledge.
              </p>
            </div>

            <div class="rounded-3xl bg-white p-8 shadow-lg">
              <div class="mb-4 text-5xl">🏄</div>
              <h3 class="mb-2 text-xl font-bold text-slate-900">Surf Instructors</h3>
              <p class="text-sm text-slate-600">
                Local surfers who grew up riding Moroccan waves now share their passion and expertise with travelers.
              </p>
            </div>

            <div class="rounded-3xl bg-white p-8 shadow-lg">
              <div class="mb-4 text-5xl">🏠</div>
              <h3 class="mb-2 text-xl font-bold text-slate-900">Family Guesthouses</h3>
              <p class="text-sm text-slate-600">
                Stay with families who treat guests like relatives, sharing meals, stories, and genuine hospitality.
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
            <h2 class="mb-4 text-4xl font-black text-slate-900 lg:text-5xl">
              Our Commitment to Equity & Impact
            </h2>
            <p class="text-lg text-slate-600">
              Tourism should benefit everyone, especially local communities
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <Card class="rounded-3xl border-2 border-green-200 bg-green-50 p-8">
              <h3 class="mb-4 flex items-center space-x-2 text-2xl font-bold text-slate-900">
                <Icon name="mdi:currency-usd" class="h-7 w-7 text-green-600" />
                <span>Fair Wages</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                All our guides, porters, and staff receive wages above industry standards, with benefits including health insurance and professional development opportunities.
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Porter wages 30% above minimum</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Health insurance for all staff</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Annual training & certifications</span>
                </li>
              </ul>
            </Card>

            <Card class="rounded-3xl border-2 border-orange-200 bg-orange-50 p-8">
              <h3 class="mb-4 flex items-center space-x-2 text-2xl font-bold text-slate-900">
                <Icon name="mdi:account-group" class="h-7 w-7 text-orange-600" />
                <span>Community Investment</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                5% of every booking goes directly to community projects chosen by local residents, from school improvements to environmental conservation.
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                  <span>School infrastructure projects</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                  <span>Clean water initiatives</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                  <span>Reforestation programs</span>
                </li>
              </ul>
            </Card>

            <Card class="rounded-3xl border-2 border-sky-200 bg-sky-50 p-8">
              <h3 class="mb-4 flex items-center space-x-2 text-2xl font-bold text-slate-900">
                <Icon name="mdi:leaf" class="h-7 w-7 text-green-600" />
                <span>Environmental Care</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                We operate carbon-neutral adventures, participate in trail maintenance, and educate travelers on Leave No Trace principles.
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-600" />
                  <span>Carbon offset partnerships</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-600" />
                  <span>Weekly trail cleanups</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-600" />
                  <span>Plastic-free operations</span>
                </li>
              </ul>
            </Card>

            <Card class="rounded-3xl border-2 border-purple-200 bg-purple-50 p-8">
              <h3 class="mb-4 flex items-center space-x-2 text-2xl font-bold text-slate-900">
                <Icon name="mdi:diversity" class="h-7 w-7 text-purple-600" />
                <span>Women Empowerment</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                We actively hire and train women guides, support women-led cooperatives, and create opportunities in traditionally male-dominated fields.
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                  <span>Women guide training program</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                  <span>Partnership with women's cooperatives</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                  <span>Equal opportunity hiring</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 py-20">
      <div class="container mx-auto px-4">
        <div class="grid gap-8 md:grid-cols-4">
          <div class="text-center text-white">
            <div class="mb-2 text-6xl font-black">15</div>
            <div class="text-xl font-semibold">Years Experience</div>
          </div>
          <div class="text-center text-white">
            <div class="mb-2 text-6xl font-black">500+</div>
            <div class="text-xl font-semibold">Happy Travelers</div>
          </div>
          <div class="text-center text-white">
            <div class="mb-2 text-6xl font-black">40+</div>
            <div class="text-xl font-semibold">Local Partners</div>
          </div>
          <div class="text-center text-white">
            <div class="mb-2 text-6xl font-black">$50K+</div>
            <div class="text-xl font-semibold">Community Investment</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="mb-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Join Our Next Adventure
          </h2>
          <p class="mb-10 text-xl leading-relaxed text-slate-600">
            Be part of a travel community that creates positive impact
          </p>
          <Button
            as-child
            size="lg"
            class="rounded-full bg-orange-500 px-12 py-7 text-lg font-bold shadow-xl hover:bg-orange-600 hover:scale-105"
          >
            <NuxtLink to="/contact">
              Get in Touch
              <Icon name="mdi:arrow-right" class="ml-2 h-6 w-6" />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'

useSeoMeta({
  title: 'About Us',
  description: 'Learn about ZamZam XP - our story, values, and commitment to sustainable, community-focused adventure tourism in Nepal and Morocco.',
})
</script>
