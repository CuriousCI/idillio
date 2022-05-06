<script lang="ts">
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a {href} class="">
		<slot name="icon" />
		<slot />
	</a>
{:else}
	<button>
		<slot name="icon" />
		<slot />
	</button>
{/if}
