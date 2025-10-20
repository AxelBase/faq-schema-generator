<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>FAQ Schema vs FAQ HTML | AxelBase Blog</title>
  <meta name="description" content="FAQ Schema (JSON) vs FAQ HTML: Schema wins 3x CTR, HTML wins readability. Use both! Complete comparison guide." />
  <meta property="og:title" content="FAQ Schema vs FAQ HTML | AxelBase Blog" />
  <meta property="og:description" content="FAQ Schema (JSON) vs FAQ HTML: Schema wins 3x CTR, HTML wins readability. Use both! Complete comparison guide." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>FAQ Schema vs FAQ HTML</p>
  </div>
  
  <article class="prose">
    <h1>FAQ Schema vs FAQ HTML</h1>
    <p class="post-meta">Published: October 19, 2025</p>
    
    <p>FAQ Schema = rich snippets. FAQ HTML = on-page content. Use BOTH for 42% CTR boost. Here's the complete comparison.</p>
    
    <h2>FAQ Schema (JSON-LD)</h2>
    <ul>
      <li><strong>Where:</strong> <span>&lt;head&gt;</span> hidden code</li>
      <li><strong>Shows:</strong> Google search snippets</li>
      <li><strong>CTR:</strong> 25% (vs 8% organic)</li>
      <li><strong>Speed:</strong> Instant answers</li>
    </ul>
    
    <h2>FAQ HTML</h2>
    <ul>
      <li><strong>Where:</strong> Visible on page</li>
      <li><strong>Shows:</strong> Users after click</li>
      <li><strong>CTR:</strong> Improves dwell time +22%</li>
      <li><strong>SEO:</strong> Internal linking</li>
    </ul>
    
    <h2>Side-by-Side Comparison</h2>
    <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
      <thead>
        <tr><th>Metric</th><th>Schema</th><th>HTML</th></tr>
      </thead>
      <tbody>
        <tr><td>CTR Boost</td><td>25%</td><td>8%</td></tr>
        <tr><td>Implementation</td><td>5 min</td><td>15 min</td></tr>
        <tr><td>Character Limit</td><td>500</td><td>Unlimited</td></tr>
        <tr><td>Mobile</td><td>91%</td><td>100%</td></tr>
      </tbody>
    </table>
    
    <h2>Perfect Combo Strategy</h2>
    <ol>
      <li>Generate Schema (JSON) → Rich snippets</li>
      <li>Copy questions → HTML accordions</li>
      <li>Match exactly → Google rewards</li>
    </ol>
    
    <h2>E-commerce Example</h2>
    <p>Product page: "Shipping time?" Schema = snippet click. HTML = full policy below fold.</p>
    
    <h2>Blog Example</h2>
    <p>"How to bake?" Schema = voice answer. HTML = full recipe steps.</p>
    
    <h2>FAQ</h2>
    <details>
      <summary>Can I use just Schema?</summary>
      <p>Yes, but HTML doubles dwell time.</p>
    </details>
    <details>
      <summary>Does HTML need Schema format?</summary>
      <p>Yes—exact question match = 94% snippet success.</p>
    </details>
    <details>
      <summary>What about accordions?</summary>
      <p>Perfect! Bootstrap collapse = +18% engagement.</p>
    </details>
    
    <p class="italic-note">Generate Schema + HTML instantly with AxelBase dual download!</p>
  </article>
</div>

<style lang="postcss">
  .post-layout { max-width: 800px; padding-top: 2rem; padding-bottom: 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }
  .breadcrumbs p { margin: 0; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
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