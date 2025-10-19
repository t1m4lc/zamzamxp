<template>
  <div v-if="post" class="min-h-screen">
    <!-- Hero Section with Featured Image -->
    <section class="relative h-[50vh] md:h-[60vh] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <NuxtImg
        v-if="post.image && !imageError"
        :src="post.image"
        :alt="post.title"
        class="absolute inset-0 w-full h-full object-cover opacity-60"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw"
        placeholder
        loading="eager"
        @error="handleImageError"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>

      <!-- Title Overlay -->
      <div class="absolute inset-0 flex items-center p-8 text-white">
        <div class="container mx-auto">
          <div class="max-w-4xl">
            <div class="mb-4 hidden md:flex items-center gap-4 text-sm">
              <time :datetime="post.date" class="font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                {{ formatDate(post.date) }}
              </time>
              <span v-if="post.author" class="font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                {{ t('blog.by') }} {{ post.author }}
              </span>
            </div>
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              {{ post.title }}
            </h1>
            <p class="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              {{ post.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tags Bar -->
    <section v-if="post.tags && post.tags.length > 0" class="border-b bg-slate-50 py-4">
      <div class="container mx-auto px-4">
        <div class="flex items-center gap-2">
          <!-- Show max 2 tags on mobile, all on desktop -->
          <Badge
            v-for="tag in post.tags.slice(0, 2)"
            :key="tag"
            variant="secondary"
            class="bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-100 cursor-default"
          >
            {{ tag }}
          </Badge>
          <!-- +n indicator for remaining tags on mobile -->
          <Badge
            v-if="post.tags.length > 2"
            variant="secondary"
            class="bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-100 cursor-default md:hidden"
          >
            +{{ post.tags.length - 2 }}
          </Badge>
          <!-- Show remaining tags on desktop -->
          <Badge
            v-for="tag in post.tags.slice(2)"
            :key="tag"
            variant="secondary"
            class="hidden md:inline-flex bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-100 cursor-default"
          >
            {{ tag }}
          </Badge>
        </div>
      </div>
    </section>

    <!-- Main Content with Sticky Sidebar -->
    <section class="py-8 md:py-12">
      <div class="container mx-auto px-4">
        <div class="grid gap-12 lg:grid-cols-3">
          <!-- Article Content -->
          <div class="lg:col-span-2 pt-0">
            <article class="pt-0 prose md:prose-lg max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-img:rounded-2xl prose-img:shadow-lg">
              <ContentRenderer :value="post" />
            </article>
          </div>

          <!-- Sticky CTA Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-24 space-y-6">
              <!-- Linked Experience CTA (if available) -->
              <Card v-if="linkedExperience" class="overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader class="pb-4">
                  <div class="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                    {{ t('blog.linkedExperience.featured') }}
                  </div>
                  <CardTitle class="text-xl font-bold mb-2 text-slate-900 line-clamp-2">
                    {{ linkedExperience.title }}
                  </CardTitle>
                  <CardDescription class="text-slate-600 text-sm leading-relaxed line-clamp-4">
                    {{ linkedExperience.description }}
                  </CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                  <Button
                    as-child
                    size="lg"
                    variant="outline"
                    class="w-full rounded-lg font-semibold text-sm py-5 shadow-sm hover:shadow-md transition-all"
                  >
                    <NuxtLink :to="getExperienceUrl()">
                      {{ t('blog.linkedExperience.learnMore') }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="ml-2"
                      >
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </NuxtLink>
                  </Button>
                </CardContent>
              </Card>

              <!-- Main CTA Card (only show when no linked experience) -->
              <Card v-else class="overflow-hidden border border-slate-200 bg-white shadow-sm">
                <CardHeader class="pb-4">
                  <CardTitle class="text-xl font-bold text-slate-900">
                    {{ t('blog.cta.title') }}
                  </CardTitle>
                  <CardDescription class="text-slate-600 text-sm">
                    {{ t('blog.cta.description') }}
                  </CardDescription>
                </CardHeader>
                <CardContent class="space-y-3">
                  <Button
                    as-child
                    size="default"
                    class="w-full rounded-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white group"
                  >
                    <NuxtLink :to="localePath('/contact')" class="flex items-center justify-center">
                      <Sparkles :size="18" :stroke-width="2.5" class="mr-2 group-hover:scale-110 transition-transform" />
                      {{ t('blog.cta.startButton') }}
                    </NuxtLink>
                  </Button>

                  <Button
                    as-child
                    size="default"
                    variant="outline"
                    class="w-full rounded-lg font-semibold hover:bg-slate-50 group"
                  >
                    <NuxtLink :to="localePath('/destinations')" class="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 group-hover:scale-110 transition-transform"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {{ t('blog.cta.exploreButton') }}
                    </NuxtLink>
                  </Button>
                </CardContent>
              </Card>

              <!-- Trust Indicators -->
              <Card class="border-slate-200">
                <CardHeader class="pb-3">
                  <CardTitle class="text-lg font-bold text-slate-900">
                    {{ t('blog.sidebar.whyUs') }}
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-sm text-slate-900">{{ t('blog.sidebar.benefit1Title') }}</div>
                      <div class="text-xs text-slate-600">{{ t('blog.sidebar.benefit1Text') }}</div>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-sm text-slate-900">{{ t('blog.sidebar.benefit2Title') }}</div>
                      <div class="text-xs text-slate-600">{{ t('blog.sidebar.benefit2Text') }}</div>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-sm text-slate-900">{{ t('blog.sidebar.benefit3Title') }}</div>
                      <div class="text-xs text-slate-600">{{ t('blog.sidebar.benefit3Text') }}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ready for Your Adventure CTA Section (Always Generic) -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
              {{ t('blog.cta.title') }}
            </h2>
            <p class="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              {{ t('blog.cta.description') }}
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-2xl mx-auto">
              <Button
                as-child
                size="lg"
                class="rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-8 shadow-2xl hover:shadow-orange-500/50 transition-all flex-1 group"
              >
                <NuxtLink :to="localePath('/contact')" class="flex items-center justify-center">
                  <Sparkles :size="22" :stroke-width="2.5" class="mr-3 group-hover:scale-110 transition-transform" />
                  {{ t('blog.cta.startButton') }}
                </NuxtLink>
              </Button>
              
              <Button
                as-child
                size="lg"
                variant="outline"
                class="rounded-2xl font-bold text-lg border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm px-10 py-8 flex-1 transition-all group"
              >
                <NuxtLink :to="localePath('/destinations')" class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-3 group-hover:scale-110 transition-transform"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {{ t('blog.cta.exploreButton') }}
                </NuxtLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Posts Section -->
    <section v-if="relatedPosts && relatedPosts.length > 0" class="py-20 bg-slate-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">
            {{ t('blog.relatedPosts.title') }}
          </h2>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <NuxtLink
              v-for="relatedPost in relatedPosts"
              :key="relatedPost.path"
              :to="localePath(`/blog/${extractSlug(relatedPost.path)}`)"
              class="group"
            >
              <article class="h-full rounded-3xl border-2 border-slate-200 bg-white overflow-hidden transition-all hover:shadow-2xl hover:border-orange-300 hover:-translate-y-1">
                <!-- Image -->
                <BlogImageCard
                  :src="relatedPost.image"
                  :alt="relatedPost.title"
                  :title="relatedPost.title"
                  size="sm"
                />
                
                <!-- Content -->
                <div class="p-6 space-y-3">
                  <div class="flex items-center gap-2 text-xs text-slate-500">
                    <time :datetime="relatedPost.date" class="font-medium">
                      {{ formatDate(relatedPost.date) }}
                    </time>
                  </div>

                  <h3 class="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {{ relatedPost.title }}
                  </h3>

                  <p class="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                    {{ relatedPost.description }}
                  </p>

                  <div class="flex items-center gap-2 text-orange-600 font-semibold text-sm pt-2">
                    <span>{{ t('common.readMore') }}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Share Bar (Fixed Bottom) -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50 safe-area-inset-bottom">
      <div class="flex items-center justify-between gap-3 px-4 py-3">
        <h2 class="text-sm font-semibold text-slate-900 line-clamp-1 flex-1">
          {{ post.title }}
        </h2>
        <Button
          @click="sharePost"
          size="sm"
          variant="outline"
          class="rounded-full flex-shrink-0 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-2"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" x2="12" y1="2" y2="15"/>
          </svg>
          {{ t('blog.share') }}
        </Button>
      </div>
    </div>
  </div>

  <!-- Not Found State -->
  <div v-else class="min-h-screen flex items-center justify-center bg-slate-50">
    <Empty class="my-16">
      <EmptyMedia>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-slate-300"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>{{ t('blog.notFound.title') }}</EmptyTitle>
        <EmptyDescription>
          {{ t('blog.notFound.description') }}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button as-child size="lg" class="rounded-full bg-orange-500 hover:bg-orange-600">
          <NuxtLink :to="localePath('/blog')">
            {{ t('blog.backToList') }}
          </NuxtLink>
        </Button>
      </EmptyContent>
    </Empty>
  </div>
</template>

<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';

const route = useRoute();
const { t, locale } = useI18n();
const localePath = useLocalePath();
const { fetchBlogPostBySlug, getRelatedPosts } = useBlog();
const { fetchActivityBySlug } = useActivitiesByLocale();

const slug = computed(() => route.params.slug as string);

// Image error state
const imageError = ref(false);

// Handle image load error
const handleImageError = () => {
  imageError.value = true;
};

// Fetch blog post
const { data: post } = await useAsyncData(
  `blog-post-${locale.value}-${slug.value}`,
  () => fetchBlogPostBySlug(slug.value)
);

// Fetch linked experience if available
const { data: linkedExperience } = await useAsyncData(
  `blog-experience-${locale.value}-${slug.value}`,
  async () => {
    const experienceSlug = post.value?.relatedExperienceSlug;
    
    if (!experienceSlug || typeof experienceSlug !== 'string') {
      return null;
    }
    
    const parts = experienceSlug.split('/');
    if (parts.length === 3) {
      const [country, activity, expSlug] = parts;
      if (country && activity && expSlug) {
        const experience = await fetchActivityBySlug(country, activity, expSlug);
        return experience;
      }
    }
    
    return null;
  },
  {
    watch: [post]
  }
);

// Fetch related posts
const { data: relatedPosts } = await useAsyncData(
  `blog-related-${locale.value}-${slug.value}`,
  async () => {
    if (!post.value) return [];
    return await getRelatedPosts(slug.value, post.value.tags);
  },
  {
    watch: [post]
  }
);

// Extract slug from path
const extractSlug = (path: string) => {
  const parts = path.split('/');
  const filename = parts[parts.length - 1];
  return filename ? filename.replace('.md', '') : '';
};

// Get experience URL
const getExperienceUrl = () => {
  const experienceSlug = post.value?.relatedExperienceSlug;
  
  if (!experienceSlug || typeof experienceSlug !== 'string') {
    return '/destinations';
  }
  
  const { normalizeCountry, normalizeActivity } = useActivitiesByLocale();
  const parts = experienceSlug.split('/');
  
  if (parts.length === 3) {
    const [country, activity, expSlug] = parts;
    if (country && activity && expSlug) {
      const countryPath = normalizeCountry(country);
      const activityPath = normalizeActivity(activity);
      return localePath(`/${countryPath}/${activityPath}/${expSlug}`);
    }
  }
  
  // If slug is just a simple string without slashes, use it directly
  return localePath(experienceSlug.startsWith('/') ? experienceSlug : `/${experienceSlug}`);
};

// SEO - Comprehensive metadata for blog posts
const siteUrl = 'https://zamzamexperience.com'; // Update with your actual domain
const canonicalUrl = computed(() => post.value ? `${siteUrl}${localePath(`/blog/${slug.value}`)}` : '');

useHead({
  title: post.value?.title || t('blog.notFound.title'),
  meta: [
    // Basic Meta Tags
    { name: 'description', content: post.value?.description || '' },
    { name: 'author', content: post.value?.author || 'Zamzam Experience' },
    { name: 'keywords', content: post.value?.tags?.join(', ') || '' },
    
    // Open Graph Tags
    { property: 'og:title', content: post.value?.title || '' },
    { property: 'og:description', content: post.value?.description || '' },
    { property: 'og:image', content: post.value?.image || `${siteUrl}/og-default.jpg` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:locale', content: locale.value },
    { property: 'og:site_name', content: 'Zamzam Experience' },
    
    // Article Specific Tags
    { property: 'article:published_time', content: post.value?.date || '' },
    { property: 'article:modified_time', content: post.value?.date || '' },
    { property: 'article:author', content: post.value?.author || 'Zamzam Experience' },
    { property: 'article:section', content: 'Travel' },
    ...(post.value?.tags || []).map((tag: string) => ({ property: 'article:tag', content: tag })),
    
    // Twitter Card Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value?.title || '' },
    { name: 'twitter:description', content: post.value?.description || '' },
    { name: 'twitter:image', content: post.value?.image || `${siteUrl}/og-default.jpg` },
    
    // Additional SEO Tags
    { name: 'robots', content: post.value?.published !== false ? 'index, follow' : 'noindex, nofollow' },
    { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
  ],
  script: [
    // JSON-LD Structured Data for Article
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.value?.title || '',
        description: post.value?.description || '',
        image: post.value?.image || '',
        datePublished: post.value?.date || '',
        dateModified: post.value?.date || '',
        author: {
          '@type': 'Person',
          name: post.value?.author || 'Zamzam Experience',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zamzam Experience',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl.value,
        },
        keywords: post.value?.tags?.join(', ') || '',
      }),
    },
    // BreadcrumbList Structured Data
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${siteUrl}${localePath('/blog')}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.value?.title || '',
            item: canonicalUrl.value,
          },
        ],
      }),
    },
  ],
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

const sharePost = async () => {
  const shareData = {
    title: post.value?.title || '',
    text: post.value?.description || '',
    url: canonicalUrl.value,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback: Copy to clipboard
      await navigator.clipboard.writeText(canonicalUrl.value);
      alert(t('blog.linkCopied'));
    }
  } catch (err) {
    if ((err as Error).name !== 'AbortError') {
      console.error('Error sharing:', err);
    }
  }
};
</script>
