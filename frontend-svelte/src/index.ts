/* Add JavaScript code here! */
// @ts-ignore
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});
// @ts-ignore
window.app = app;

export default app;