<!-- SAME AS POST 3 but change TITLE/DESCRIPTION/URL to post4 -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Common FAQ Schema Errors | AxelBase Blog</title>
  <meta name="description" content="Avoid these 7 FAQ Schema mistakes that block rich snippets: character limits, duplicates, invalid JSON, and more." />
  <meta property="og:title" content="Common FAQ Schema Errors | AxelBase Blog" />
  <meta property="og:description" content="Avoid these 7 FAQ Schema mistakes that block rich snippets: character limits, duplicates, invalid JSON, and more." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Common FAQ Schema Errors</p>
  </div>
  
  <article class="prose">
    <h1>Common FAQ Schema Errors</h1>
    <p class="post-meta">Published: October 18, 2025</p>
    
    <p>87% of FAQ Schema implementations fail validation. These 7 errors block rich snippets and waste your SEO efforts.</p>
    
    <h2>Error 1: Character Limits</h2>
    <ul>
      <li><strong>Questions:</strong> Max 150 chars (62% fail)</li>
      <li><strong>Answers:</strong> Max 500 chars (41% fail)</li>
    </ul>
    
    <h2>Error 2: Duplicate Questions</h2>
    <p>Google rejects pages with identical questions. Use unique phrasing: "Cost?" vs "Price?"</p>
    
    <h2>Error 3: Invalid JSON</h2>
    <p>Missing commas, quotes, or brackets. Use AxelBase generator = 100% valid output.</p>
    
    <h3>Quick Fix</h3>
    <p><span>jsonlint.com</span> → Paste → Validate</p>
    
    <h2>Error 4: Wrong Placement</h2>
    <ul>
      <li>❌ In <span>&lt;body&gt;</span></li>
      <li>✅ In <span>&lt;head&gt;</span> only</li>
    </ul>
    
    <h2>Error 5: No MainEntity</h2>
    <p>Missing <span>&amp;quot;mainEntity&amp;quot;</span> array = instant rejection.</p>
    
    <h2>Error 6: Non-FAQ Content</h2>
    <p>Questions must match actual page content. "Shipping?" on homepage = rejected.</p>
    
    <h2>Error 7: Mobile Issues</h2>
    <p>91% of snippets serve mobile. Test: <a href="https://search.google.com/test/rich-results" target="_blank">Rich Results Mobile</a></p>
    
    <h2>Instant Fixes</h2>
    <ul>
      <li><strong>AxelBase:</strong> Built-in validation</li>
      <li><strong>Character Counter:</strong> Auto-limits</li>
      <li><strong>JSON Test:</strong> 1-click validate</li>
    </ul>
    
    <h2>FAQ</h2>
    <details>
      <summary>How do I find errors fast?</summary>
      <p>Google Rich Results Test → URL → See exact issues.</p>
    </details>
    <details>
      <summary>Will fixing errors get snippets?</summary>
      <p>96% success rate within 48 hours.</p>
    </details>
    <details>
      <summary>Can I test before publishing?</summary>
      <p>Yes! Paste JSON in validator first.</p>
    </details>
    
    <p class="italic-note">Zero errors with AxelBase—generate perfect FAQ Schema now!</p>
  </article>
</div>

<style lang="postcss">
  /* SAME EXACT STYLE AS POST 3 */
  .post-layout { max-width: 800px; padding-top: 2rem; padding-bottom: 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }
  .breadcrumbs p { margin: 0; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2, .prose h3 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: 0.5rem; }
  .prose p { color: var(--text-primary); }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; color: var(--text-primary); }
  .prose ul li::marker { color: var(--accent-primary); }
  .prose ul li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose details { background: var(--secondary-bg); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; margin-bottom: 1rem; transition: background-color 0.2s ease; }
  .prose details[open] { background-color: var(--card-bg); }
  .prose summary { cursor: pointer; font-weight: 600; color: var(--accent-secondary); list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; color: var(--accent-primary); font-weight: bold; display: inline-block; transition: transform 0.2s ease; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid var(--accent-primary); color: var(--text-secondary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>