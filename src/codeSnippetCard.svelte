<script lang="ts">
	import { CodeBlock, storeHighlightJs } from '@skeletonlabs/skeleton';

	import type { CodeSnippet } from './app';

	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	storeHighlightJs.set(hljs);

	import { deleteSnippet, toggleFavorite } from './snippetStore';

	export let snippet: CodeSnippet = {
		title: '',
		language: '',
		code: '',
		favorite: false
	};

	export let id: number;

</script>

<div class="card">
	<header class="card-header">
		<p class="title">{snippet.title}</p>
		<div class="buttons">
			<button class="favorite-btn" on:click={() => toggleFavorite(id)}>
				<span class="star-icon" style={` color: ${snippet.favorite ? '#f8d700' : 'white'} `}
					>&#9733;</span
				>
			</button>
			<button class="delete-btn" on:click={() => deleteSnippet(id)}> x </button>
		</div>
	</header>

	<section>
		<div class="code-block">
			<CodeBlock language={snippet.language} code={snippet.code} />
		</div>
	</section>
</div>

<style>
	.card {
		padding-bottom: 1rem;
	}
	
	.card-header {
		display: flex;
		padding-bottom: 1rem;
		align-items: center;
	}

	.title {
		font-size: 1.2rem;
		margin-right: auto;
	}

	.buttons {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.favorite-btn,
	.delete-btn {
		padding: 5px;
		border: none;
		border-radius: 3px;
		font-weight: 600;
		cursor: pointer;
		width: 1.5rem;
		height: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
	}

	.favorite-btn {
		background-color: #040607;
		color: #333;
	}

	.star-icon {
		color: #f8d700;
	}

	.delete-btn {
		background-color: rgb(247, 48, 48);
	}

	.code-block {
		background-color: #040607;
		padding: 1rem;
		border-radius: 8px;
	}
</style>
