// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

interface CodeSnippetInput {
	title: string;
	language: string;
	code: string;
}


interface CodeSnippet {
	title: string;
	language: string;
	code: string;
	favorite: boolean;
}

export {CodeSnippetInput, CodeSnippet};
