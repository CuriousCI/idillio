<script lang="ts">
	import { Align } from '$lib/util';

	export let text: string = '',
		justify: Align = Align.CENTER,
		align: Align = Align.END;

	let show: boolean = false;
</script>

<span
	on:focus={() => {}}
	on:blur={() => {}}
	on:mouseover={() => (show = true)}
	on:mouseout={() => (show = false)}
	class="relative"
>
	<slot />
	{#if show}
		<span
			class:top-full={align == Align.END}
			class:bottom-full={align == Align.START}
			class="z-10 whitespace-nowrap absolute w-min m-1 left-1/2 -translate-x-1/2 py-2 px-4 rounded-lg bg-b-03 text-c-1"
		>
			{text}
		</span>
	{/if}
</span>

<!-- #474747 -->

<!-- 
class:top-full={align == Align.END}
class:bottom-full={align == Align.START}
class:left-full={justify == Align.END}
class:right-full={justify == Align.START} 
-->
