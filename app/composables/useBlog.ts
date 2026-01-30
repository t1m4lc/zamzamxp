export const useBlog = () => {
  const { locale } = useI18n();

  /**
   * Fetch all published blog posts for the current locale
   * @param limit - Optional number of posts to return (default: all posts)
   */
  const fetchBlogPosts = async (limit?: number) => {
    const allPosts = await queryCollection("blog" as any).all();

    const posts = allPosts
      .filter((post: any) => {
        // Check if draft is explicitly true, otherwise consider it published
        const isDraft = post.draft === true;
        return !isDraft && post.locale === locale.value;
      })
      .sort((a: any, b: any) => {
        // Sort by date, newest first
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    return limit ? posts.slice(0, limit) : posts;
  };

  /**
   * Fetch a single blog post by slug for the current locale
   */
  const fetchBlogPostBySlug = async (slug: string) => {
    try {
      const allPosts = await queryCollection("blog" as any).all();

      const post = allPosts.find((item: any) => {
        return (
          item.locale === locale.value &&
          item.draft !== true &&
          item.path?.endsWith(`/${slug}`)
        );
      });

      return post || null;
    } catch (error) {
      console.error(
        `Blog post not found: ${slug} in locale ${locale.value}`,
        error,
      );
      return null;
    }
  };

  /**
   * Fetch blog posts by tag for the current locale
   */
  const fetchBlogPostsByTag = async (tag: string) => {
    const allPosts = await queryCollection("blog" as any).all();

    const posts = allPosts
      .filter((post: any) => {
        return (
          post.draft !== true &&
          post.locale === locale.value &&
          post.tags?.includes(tag)
        );
      })
      .sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    return posts;
  };

  /**
   * Get all unique tags from published blog posts
   */
  const fetchBlogTags = async () => {
    const allPosts = await queryCollection("blog" as any).all();

    const tags = new Set<string>();
    allPosts
      .filter(
        (post: any) => post.draft !== true && post.locale === locale.value,
      )
      .forEach((post: any) => {
        post.tags?.forEach((tag: string) => tags.add(tag));
      });

    return Array.from(tags).sort();
  };

  /**
   * Get related blog posts based on tags or return recent posts
   */
  const getRelatedPosts = async (
    currentSlug: string,
    tags?: string[],
    limit: number = 3,
  ) => {
    const allPosts = await queryCollection("blog" as any).all();

    // Filter posts by locale and exclude current post
    let posts = allPosts
      .filter((post: any) => {
        const postSlug = post.path?.split("/").pop()?.replace(".md", "");
        return (
          post.draft !== true &&
          post.locale === locale.value &&
          postSlug !== currentSlug
        );
      })
      .sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    // If tags provided, prioritize posts with matching tags
    if (tags && tags.length > 0) {
      const postsWithMatchingTags = posts.filter((post: any) => {
        return post.tags?.some((tag: string) => tags.includes(tag));
      });

      if (postsWithMatchingTags.length > 0) {
        // Sort by number of matching tags
        postsWithMatchingTags.sort((a: any, b: any) => {
          const aMatches =
            a.tags?.filter((tag: string) => tags.includes(tag)).length || 0;
          const bMatches =
            b.tags?.filter((tag: string) => tags.includes(tag)).length || 0;
          return bMatches - aMatches;
        });

        return postsWithMatchingTags.slice(0, limit);
      }
    }

    // Return recent posts if no matching tags found
    return posts.slice(0, limit);
  };

  return {
    fetchBlogPosts,
    fetchBlogPostBySlug,
    fetchBlogPostsByTag,
    fetchBlogTags,
    getRelatedPosts,
  };
};
