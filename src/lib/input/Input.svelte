<script lang="ts">
	export let name: string,
		id: string = '',
		error: boolean = false,
		errorMessage: string = '',
		warning: boolean = false,
		warningMessage: string = '',
		suggestion: string = '',
		placeholder: string = '',
		label: string = '',
		pattern: RegExp = /.*/,
		value: string = '',
		required: boolean = false,
		focus: boolean = false,
		normalize: (input: string) => string = (input) => input;

	// TODO: success icon, error icon, warning icon

	$: if (normalize) value = normalize(value);

	$: displayError = !focus && (!pattern.test(value) || error);
	$: displayWarning = !focus && warning;
</script>

<div>
	{#if label}
		<label for={name}>
			{label}
			{#if required}*{/if}
		</label>
	{/if}

	<input
		class="border-2 p-1 box-border"
		class:border-a-red={displayError}
		type="text"
		{name}
		{id}
		{placeholder}
		pattern={pattern.toString().slice(1, -1)}
		title={errorMessage}
		bind:value
		on:focus={() => (focus = true)}
		on:blur={() => (focus = false)}
		{required}
	/>

	<p class="h-min">
		{#if displayError}
			<span class="text-a-red">{errorMessage}</span>
		{:else if displayWarning}
			<span class="text-a-yellow">{warningMessage}</span>
		{:else}
			<span class="text-a-green">{suggestion}</span>
		{/if}
	</p>
</div>
