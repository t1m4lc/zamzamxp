<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-16 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5"></div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
            {{ t('blog.title') }}
          </h1>
          <p class="text-xl text-slate-600 leading-relaxed">
            {{ t('blog.description') }}
          </p>
        </div>
      </div>
    </section>

    <main class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <!-- Blog Posts Grid -->
        <div v-if="posts && posts.length > 0" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="localePath(`/blog/${extractSlug(post.path)}`)"
            class="group"
          >
            <article class="h-full rounded-3xl border-2 border-slate-200 bg-white overflow-hidden transition-all hover:shadow-2xl hover:border-orange-300 hover:-translate-y-1">
              <!-- Image -->
              <BlogImageCard
                :src="post.image"
                :alt="post.title"
                :title="post.title"
                size="md"
              />
              
              <!-- Content -->
              <div class="p-6 space-y-4">
                <!-- Meta -->
                <div class="flex items-center gap-3 text-xs text-slate-500">
                  <time :datetime="post.date" class="font-medium">
                    {{ formatDate(post.date) }}
                  </time>
                  <span v-if="post.author" class="flex items-center gap-1">
                    <span>·</span>
                    <span>{{ post.author }}</span>
                  </span>
                </div>

                <!-- Title -->
                <h2 class="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {{ post.title }}
                </h2>

                <!-- Description -->
                <p class="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                  {{ post.description }}
                </p>

                <!-- Tags -->
                <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 pt-2">
                  <Badge
                    v-for="tag in post.tags.slice(0, 3)"
                    :key="tag"
                    variant="secondary"
                    class="bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-50 cursor-default"
                  >
                    {{ tag }}
                  </Badge>
                </div>

                <!-- Read More -->
                <div class="flex items-center gap-2 text-orange-600 font-semibold text-sm pt-2">
                  <span>{{ t('common.readMore') }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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

        <!-- Empty State -->
        <Empty v-else class="my-16">
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
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8" />
              <path d="M15 18h-5" />
              <path d="M10 6h8v4h-8V6Z" />
            </svg>
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>{{ t('blog.noPosts.title') }}</EmptyTitle>
            <EmptyDescription>
              {{ t('blog.noPosts.description') }}
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();
const { fetchBlogPosts } = useBlog();

// SEO - Comprehensive metadata for blog index
const siteUrl = 'https://zamzamexperience.com'; // Update with your actual domain
const blogUrl = `${siteUrl}${localePath('/blog')}`;

useHead({
  title: t('blog.title'),
  meta: [
    // Basic Meta Tags
    { name: 'description', content: t('blog.description') },
    { name: 'keywords', content: 'travel blog, adventure travel, Morocco tours, Nepal trekking, travel guides, travel tips' },
    
    // Open Graph Tags
    { property: 'og:title', content: t('blog.title') },
    { property: 'og:description', content: t('blog.description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: blogUrl },
    { property: 'og:locale', content: locale.value },
    { property: 'og:site_name', content: 'Zamzam Experience' },
    
    // Twitter Card Tags
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: t('blog.title') },
    { name: 'twitter:description', content: t('blog.description') },
    
    // Additional SEO Tags
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
  ],
  link: [
    { rel: 'canonical', href: blogUrl },
  ],
  script: [
    // JSON-LD Structured Data for Blog
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: t('blog.title'),
        description: t('blog.description'),
        url: blogUrl,
        publisher: {
          '@type': 'Organization',
          name: 'Zamzam Experience',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
          },
        },
      }),
    },
    // BreadcrumbList
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
            name: t('blog.title'),
            item: blogUrl,
          },
        ],
      }),
    },
  ],
});

// Fetch blog posts
const { data: posts } = await useAsyncData(`blog-posts-${locale.value}`, () => fetchBlogPosts());

// Extract slug from path
const extractSlug = (path: string) => {
  const parts = path.split('/');
  const filename = parts[parts.length - 1];
  return filename ? filename.replace('.md', '') : '';
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};
</script>
