<script lang="ts">
	import Input from '$lib/input/Input.svelte';
</script>

<h1 class="font-bold text-9xl">Idillio</h1>
<img src="logo.svg" alt="logo" />
<p>This should be the documentation! Coming soon</p>
<br />

<form action="">
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
	<br />
	<input type="submit" value="submit" />
</form>
