<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>What is FAQ Schema? | AxelBase Blog</title>
  <meta name="description" content="FAQ Schema is structured data that helps Google display rich FAQ snippets, boosting SEO clicks by 20-30%. Learn how it works." />
  <meta property="og:title" content="What is FAQ Schema? | AxelBase Blog" />
  <meta property="og:description" content="FAQ Schema is structured data that helps Google display rich FAQ snippets, boosting SEO clicks by 20-30%. Learn how it works." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>What is FAQ Schema?</p>
  </div>
  
  <article class="prose">
    <h1>What is FAQ Schema?</h1>
    <p class="post-meta">Published: October 15, 2025</p>
    
    <p>FAQ Schema is structured data markup that tells search engines your page contains Frequently Asked Questions. When implemented correctly, Google displays these as rich snippets—expandable FAQ sections directly in search results. Studies show FAQ rich snippets increase click-through rates by 20-30%.</p>
    
    <h2>How FAQ Schema Works</h2>
    <p>Using JSON-LD format, FAQ Schema follows <a href="https://schema.org/FAQPage" target="_blank">schema.org/FAQPage</a> standards. Each question-answer pair becomes a clickable accordion in Google's SERPs, giving users instant answers without clicking through to your site.</p>
    
    <h3>Rich Snippet Example</h3>
    <ul>
      <li><strong>Visual:</strong> Bold questions + expandable answers</li>
      <li><strong>Position:</strong> Above organic results</li>
      <li><strong>CTR Boost:</strong> 25% average increase</li>
      <li><strong>Eligibility:</strong> 2+ questions minimum</li>
    </ul>
    
    <h2>Business Benefits</h2>
    <p>FAQ Schema reduces bounce rates by answering queries instantly. E-commerce sites see 15% higher conversions. Local businesses gain 18% more calls. Content sites enjoy 22% longer dwell time. It's SEO's highest ROI tactic in 2025.</p>
    
    <h3>Who Should Use It?</h3>
    <ul>
      <li>E-commerce product pages</li>
      <li>Service business websites</li>
      <li>Blog posts with common questions</li>
      <li>Landing pages for lead gen</li>
    </ul>
    
    <h2>Technical Requirements</h2>
    <p>Valid JSON-LD with "@type": "FAQPage". Questions: 10-150 characters. Answers: 20-500 characters. No duplicate questions. Mobile-friendly markup. Google's Rich Results Test must pass 100%.</p>
    
    <h2>FAQ</h2>
    <details>
      <summary>Does FAQ Schema guarantee rich snippets?</summary>
      <p>Google decides based on quality and relevance. 85% valid implementations appear within 7 days.</p>
    </details>
    <details>
      <summary>Can I use FAQ Schema on every page?</summary>
      <p>Yes, but only add relevant questions users actually ask.</p>
    </details>
    <details>
      <summary>How many FAQs for rich snippets?</summary>
      <p>Minimum 2, optimal 5-8 questions per page.</p>
    </details>
    
    <p class="italic-note">Start with our free FAQ Schema Generator—create valid markup in 60 seconds!</p>
  </article>
</div>

<style>
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