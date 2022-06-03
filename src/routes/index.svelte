<script lang="ts">
	import Input from '$lib/input/Input.svelte';
	import Tooltip from '$lib/tooltip/Tooltip.svelte';
	import { Align } from '$lib/util';
</script>

<h1 class="font-bold text-9xl">Idillio</h1>
<img src="logo.svg" alt="logo" />
<Tooltip text="tooltip" justify={Align.END}>This should be the documentation! Coming soon</Tooltip>

<br />

<Tooltip text="Bella, come stai?">ciao!</Tooltip>
<br />
<br />
<br />
<Tooltip text="Hi how are you">test</Tooltip>
<Tooltip text="Hi, how are you!">hey! How are you!!</Tooltip>
<Tooltip>test</Tooltip>
<br />
<br />

<form>
	<Tooltip text="Questo è un input" justify={Align.CENTER}>
		<Input
			name="name"
			label="Name"
			pattern={/^A.*/}
			warningMessage="Avvertenza a caso"
			errorMessage="Deve cominciare con 'A'"
			normalize={(input) => input.toUpperCase()}
			placeholder="Nome tutto maisucolo"
			suggestion="Hi!"
			required
		/>
	</Tooltip>
	<br />
	<input type="submit" value="submit" />
</form>

<div class="h-screen flex flex-col justify-evenly">
	<Tooltip text="top center" align={Align.START}>ciao!</Tooltip>
	<Tooltip text="bottom center" align={Align.END}>ciao!</Tooltip>
	<Tooltip text="bottom left" justify={Align.START}>ciao!</Tooltip>
	<Tooltip text="bottom right" justify={Align.END}>ciao!</Tooltip>
	<Tooltip text="top left" align={Align.START} justify={Align.START}>ciao!</Tooltip>
	<Tooltip text="top right" align={Align.START} justify={Align.END}>ciao!</Tooltip>
	<Tooltip text="something test" align={Align.START}>prova123</Tooltip>
</div>
