<script lang="ts">
	import { Align } from '$lib/util';

	export let text: string = '',
		justify: Align = Align.CENTER,
		align: Align = Align.END;

	let hover: boolean = false;

	const justifyToCss = {
		[Align.START]: 'left-0 ml-1',
		[Align.CENTER]: 'left-1/2 -translate-x-1/2',
		[Align.END]: 'right-0 mr-1'
	};

	const alignToCss = {
		[Align.START]: 'bottom-full mb-2',
		[Align.CENTER]: '',
		[Align.END]: 'top-full mt-2'
	};
</script>

<div
	on:focus={() => {}}
	on:blur={() => {}}
	on:mouseover={() => (hover = true)}
	on:mouseout={() => (hover = false)}
	class="relative w-min whitespace-nowrap"
>
	<slot />
	{#if hover}
		<span
			class="
				absolute {alignToCss[align]} {justifyToCss[justify]} 
				z-10 py-2 px-4 box-border
				whitespace-nowrap rounded-lg shadow-md 
				bg-b-03 text-c-1 shadow-c-1
				dark:bg-b-3 dark:text-c-01
			"
		>
			{text}
		</span>
	{/if}
</div>
