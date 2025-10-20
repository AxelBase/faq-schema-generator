<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase FAQ Schema Generator</title>
  <meta name="description" content="Learn how AxelBase FAQ Schema Generator protects your privacy with zero data collection and client-side processing." />
  <meta property="og:title" content="Privacy Policy | AxelBase FAQ Schema Generator" />
  <meta property="og:description" content="Learn how AxelBase FAQ Schema Generator protects your privacy with zero data collection and client-side processing." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: October 20, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to <strong>AxelBase FAQ Schema Generator</strong>, a <strong>client-side web utility</strong> developed by AxelBase ("we," "us," or "our"). This Privacy Policy explains how we handle your information when you use our tool to generate FAQ Schema markup. We operate on a <strong>zero-data-collection principle</strong>. Since everything runs <strong>entirely in your browser</strong>, <strong>we do not collect, store, or process any personal data</strong>. This policy ensures <strong>complete transparency</strong> for your trust.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>Our tool processes <strong>everything locally</strong>. We <strong>never collect</strong>:</p>
    <ul>
      <li><strong>Personal Identifiable Information (PII)</strong>: Names, emails, phone numbers, addresses</li>
      <li><strong>Usage Analytics</strong>: IP addresses, browser data, location, device info</li>
      <li><strong>FAQ Content</strong>: Your questions/answers stay on <strong>your device only</strong></li>
      <li><strong>Tracking Data</strong>: No Google Analytics, cookies, or pixels</li>
    </ul>
    <p><strong>100% client-side</strong> = <strong>zero server transmission</strong>.</p>

    <h2>3. How the Tool Works</h2>
    <p>When generating FAQ Schema:</p>
    <ul>
      <li><strong>Input Processing</strong>: Enter questions/answers → JavaScript validates locally using <code>schema.org</code> rules</li>
      <li><strong>JSON Generation</strong>: Creates JSON-LD markup <strong>in your browser</strong></li>
      <li><strong>Download Only</strong>: Click "Download" → File saves to <strong>your device</strong></li>
      <li><strong>No Uploads</strong>: Bulk CSV processing happens <strong>offline</strong></li>
    </ul>
    <p>Your FAQ data <strong>never leaves your computer</strong>. Temporary browser storage clears on reload.</p>

    <h2>4. Third-Party Services</h2>
    <p><strong>Zero third-party integrations</strong>:</p>
    <ul>
      <li>No ad networks, analytics, or tracking services</li>
      <li>Open-source libraries (local/CDN) with <strong>no user tracking</strong></li>
      <li>Downloads use <strong>browser native features only</strong></li>
    </ul>

    <h2>5. Cookies and Tracking</h2>
    <p><strong>No cookies. No tracking. Stateless sessions.</strong> Your visit leaves <strong>zero footprint</strong>.</p>

    <h2>6. Data Security</h2>
    <p>Since we collect <strong>nothing</strong>, there's <strong>no data to secure</strong>. Protect yourself:</p>
    <ul>
      <li><strong>Secure Browser</strong>: Use updated Chrome/Firefox</li>
      <li><strong>Sensitive FAQs</strong>: Don't download on public WiFi</li>
      <li><strong>Local Files</strong>: Keep generated JSON secure</li>
    </ul>

    <h2>7. Children's Privacy</h2>
    <p><strong>Not for children under 13</strong>. No knowing collection from minors.</p>

    <h2>8. International Compliance</h2>
    <p><strong>GDPR/CCPA compliant by default</strong> (zero data = zero issues).</p>

    <h2>9. Policy Updates</h2>
    <p>Updates posted here with new effective date. Check periodically.</p>

    <h2>10. Contact</h2>
    <p>Questions? Email: <strong>support@axelbase.com</strong></p>

    <p class="italic-note"><strong>Zero data collection = Complete peace of mind.</strong> Generate FAQ Schema confidently with AxelBase.</p>
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