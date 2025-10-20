<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What is FAQ Schema?', description: 'Learn how FAQ Schema boosts your SEO rankings with structured data.' },
    { href: '/blog/posts/post2', title: 'Why Use FAQ Schema in 2025', description: 'Discover the SEO advantages of FAQ Schema for modern websites.' },
    { href: '/blog/posts/post3', title: 'Setting Up FAQ Schema Fast', description: 'A beginner\'s guide to implementing FAQ Schema in 5 minutes.' },
    { href: '/blog/posts/post4', title: 'Common FAQ Schema Errors', description: 'Avoid these 7 mistakes that break your FAQ rich snippets.' },
    { href: '/blog/posts/post5', title: 'FAQ Schema vs FAQ HTML', description: 'When to use structured data vs traditional FAQ pages.' },
    { href: '/blog/posts/post6', title: 'Bulk FAQ Schema Generation', description: 'Scale your SEO with automated FAQ Schema creation.' },
    { href: '/blog/posts/post7', title: 'Measuring FAQ Schema ROI', description: 'Track clicks, impressions, and rankings from FAQ rich results.' },
  ];
</script>

<svelte:head>
  <title>Blog | AxelBase Insights</title>
  <meta name="description" content="Master FAQ Schema for SEO with tutorials, guides, and updates from AxelBase." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: AxelBase Insights</h1>
    <p class="subtitle">
      Master FAQ Schema SEO with our expert guides. From beginner setup to advanced strategies, 
      explore <a href="https://github.com/axelbase/faq-schema-generator" target="_blank" rel="noopener noreferrer">open-source tools</a> 
      and proven techniques.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article →</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index { padding-top: 2rem; padding-bottom: 4rem; }
  .blog-header { text-align: center; margin-bottom: 3rem; border-bottom: 1px solid var(--border-color); padding-bottom: 2rem; }
  .blog-header h1 { font-size: 2.8rem; margin-bottom: 1rem; }
  .subtitle { font-size: 1.1rem; color: var(--text-secondary); max-width: 700px; margin: 0 auto; line-height: 1.7; }
  .posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
  .post-card { text-decoration: none; display: flex; flex-direction: column; justify-content: space-between; }
  .post-card .card-body { display: flex; flex-direction: column; height: 100%; }
  .post-title { font-size: 1.25rem; color: var(--accent-secondary); margin-bottom: 0.75rem; }
  .post-description { color: var(--text-secondary); flex-grow: 1; margin-bottom: 1rem; }
  .read-more { color: var(--accent-primary); font-weight: 600; align-self: flex-start; transition: var(--transition-fast); }
  .post-card:hover .read-more { transform: translateX(5px); }
</style>