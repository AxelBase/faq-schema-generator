<script lang="ts">
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import '../app.css';

	// --- PayPal Button Logic ---
	const paypalUsername = 'AxelLab427'; // <-- IMPORTANT: Set your PayPal username
	const donationAmounts = [1, 3, 5, 10];
	let isDropdownOpen = false;

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}
	function closeDropdown() {
		isDropdownOpen = false;
	}

	// Action to detect clicks outside an element
	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target as Node)) {
				node.dispatchEvent(new CustomEvent('click_outside'));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<header class="navbar-sticky">
	<div class="navbar-container">
		<div class="navbar-left">
			<a href="{base}/" class="navbar-logo-link" aria-label="Home">
				<img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-logo" />
			</a>
			<a href="{base}/" class="navbar-brand">AxelBase</a>

			<div class="bmac-container" use:clickOutside on:click_outside={closeDropdown}>
				<button class="bmac-button" on:click={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="20"
						height="20"
						fill="currentColor"
					>
						<path
							d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4v-2z"
						/>
					</svg>
					<span>Buy me a coffee</span>
				</button>

				{#if isDropdownOpen}
					<div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
						{#each donationAmounts as amount}
							<a
								href="https://paypal.me/{paypalUsername}/{amount}"
								target="_blank"
								rel="noopener noreferrer"
								on:click={closeDropdown}
							>
								${amount}
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<nav class="navbar-right">
			<ul class="nav-links">
				<li><a href="{base}/">Home</a></li>
				<li><a href="{base}/#about">About</a></li>
				<li><a href="{base}/#how-to-use">How to use</a></li>
				<li><a href="{base}/#faq">FAQ</a></li>
				<li><a href="{base}/blog">Blog</a></li>
			</ul>
		</nav>
	</div>
</header>

<main class="main-content">
	<slot />
</main>

<footer class="footer-fixed">
	<div class="footer-container">
		<span class="footer-copyright">
			&copy; {new Date().getFullYear()} AxelBase - FAQ Schema Generator
		</span>
		<div class="footer-links">
			<a href="{base}/privacy">Privacy Policy</a>
			<a href="{base}/terms">Terms and conditions</a>
		</div>
	</div>
</footer>