<script lang="ts">
	import type { CodeSnippetInput } from '../app';

	import CodeSnippetCard from '../codeSnippetCard.svelte';

	import { addSnippet, snippetStore } from '../snippetStore';

	import type { PageData } from './$types';

	import '../global.css';

	export let data: PageData;

	let formData: CodeSnippetInput = {
		title: '',
		language: 'html',
		code: ''
	};

	snippetStore.set(data.snippets);

</script>

<main class="main-container">
	<h1>Create A Code Snippet</h1>
	<div class="inputs-container">
		<div class="input">
			<label for="snippet-tile" class="label">Snippet title</label>
			<input
				type="text"
				id="snippet-title"
				placeholder="Enter title here..."
				bind:value={formData.title}
			/>
		</div>
		<div class="input">
			<label for="programming-language" class="label">Programming Language</label>
			<select id="programming-language" bind:value={formData.language}>
				<option value="html">HTML</option>
				<option value="css">CSS</option>
				<option value="javascript">Javascript</option>
			</select>
		</div>
		<div class="input">
			<label for="code-snippet" class="label">Code snippet</label>
			<textarea
				id="code-snippet"
				cols="30"
				rows="4"
				placeholder="Enter your snippet code here..."
				bind:value={formData.code}
			></textarea>
		</div>
		<button
			class="add-btn"
			type="button"
			on:click={() => addSnippet(formData)}
			disabled={formData.title === ''}>Create snippet</button
		>
	</div>

	<div class="code-snippets-data">
		<h2>My Code Snippets</h2>

		<div class="cards-container">
			{#each $snippetStore as snippet, index}
				<CodeSnippetCard {snippet} id={index} />
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		padding: 1rem;
		max-width: 600px;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		font-size: 1.5rem;
	}

	h2 {
		font-size: 2rem;
		text-align: center;
	}

	.inputs-container, .cards-container {
		margin-block: 2rem;
		padding: 1rem 2rem;
		border-radius: 10px;
		position: relative;
		background-color: #2c3e50;
	}

	label {
		display: block;
		padding-bottom: 0.5rem;
	}

	.input {
		padding-bottom: 1rem;
		width: 100%;
	}

	input,
	textarea,
	select {
		width: 100%;
		border-radius: 8px;
		padding: 1rem;
		border: none;
		background-color: #517fad97;
		color: white;
		cursor: pointer;
	}

	input::placeholder,
	textarea::placeholder {
		color: white;
		font-size: 1rem;
	}

	input:focus,
	textarea:focus {
		border-color: #5691c8;
	}

	.add-btn {
		border-radius: 8px;
		padding: 0.5rem 1rem;
		background-color: #2980b9;
		color: white;
		font-weight: 600;
		font-size: 1rem;
		border: none;
	}

	.add-btn:hover {
		background-color: #5395d7;
		cursor: pointer;
	}

	.add-btn:disabled {
		background-color: #5b7b9a;
		cursor: none;
	}
</style>
