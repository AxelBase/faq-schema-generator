<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | AxelBase FAQ Schema Generator</title>
  <meta name="description" content="Review the Terms and Conditions for using AxelBase FAQ Schema Generator, a privacy-first tool by AxelBase." />
  <meta property="og:title" content="Terms & Conditions | AxelBase FAQ Schema Generator" />
  <meta property="og:description" content="Review the Terms and Conditions for using AxelBase FAQ Schema Generator, a privacy-first tool by AxelBase." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Effective Date: October 20, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>AxelBase FAQ Schema Generator</strong> (the "Tool") provided by AxelBase ("we," "us," or "our"), you agree to be bound by these <strong>Terms & Conditions</strong> ("Terms"). If you do not agree, <strong>do not use the Tool</strong>. These Terms apply to all users worldwide.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool is a <strong>free, client-side web utility</strong> for generating FAQ Schema JSON-LD markup. It offers features like single/bulk generation, local validation, CSV import, and JSON downloads. <strong>Everything runs in your browser</strong>—no server processing. We may update the Tool anytime without notice.</p>

    <h2>3. User Obligations</h2>
    <p>You agree to use the Tool for <strong>lawful purposes only</strong>. You must not:</p>
    <ul>
      <li><strong>Upload Malicious Content</strong>: Viruses, malware, or harmful CSV files</li>
      <li><strong>Reverse Engineer</strong>: Extract or modify our source code</li>
      <li><strong>Infringe IP Rights</strong>: Use others' FAQs without permission</li>
      <li><strong>Automated Abuse</strong>: Bots or scraping our interface</li>
    </ul>
    <p>You are <strong>100% responsible</strong> for your generated schema and its use on your websites.</p>

    <h2>4. Intellectual Property</h2>
    <p>The Tool's code, design, and documentation are owned by <strong>AxelBase</strong>. You get a <strong>limited, non-exclusive license</strong> for personal/commercial use. <strong>You own your generated JSON</strong>. You may not:</p>
    <ul>
      <li>Copy or redistribute the Tool</li>
      <li>Sell generated schema as a service</li>
      <li>Remove our branding from downloads</li>
    </ul>

    <h2>5. Disclaimer of Warranties</h2>
    <p>The Tool is provided <strong>"AS IS"</strong> without <strong>any warranties</strong>. We disclaim:</p>
    <ul>
      <li><strong>Schema Accuracy</strong>: Google may reject your markup</li>
      <li><strong>SEO Results</strong>: No guaranteed CTR or rankings</li>
      <li><strong>Error-Free Operation</strong>: Browser compatibility varies</li>
      <li><strong>Merchantability/Fitness</strong>: For any specific purpose</li>
    </ul>

    <h2>6. Limitation of Liability</h2>
    <p><strong>Zero liability</strong> for <strong>any damages</strong> (direct, indirect, consequential) from Tool use—even if advised. <strong>Total liability capped at $0</strong> (free service).</p>

    <h2>7. Indemnification</h2>
    <p>You agree to <strong>indemnify AxelBase</strong> against all claims, losses, or damages from your Tool use or Terms violation.</p>

    <h2>8. Termination</h2>
    <p>We may <strong>suspend/terminate access</strong> anytime for violations, without notice or liability.</p>

    <h2>9. Changes to Terms</h2>
    <p>We may update Terms anytime. <strong>Continued use = acceptance</strong> of changes.</p>

    <h2>10. Contact Us</h2>
    <p>Questions? Email: <strong>support@axelbase.com</strong></p>

    <p class="italic-note"><strong>Free tool. No warranties. Use at your own risk.</strong> These Terms are the complete agreement between you and AxelBase.</p>
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
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>