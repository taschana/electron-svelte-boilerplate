<script lang="ts">
	import { count } from './stores/store.ts';
    let workingCopy: any[] = [1,2,3,4]
    export let name:string;
</script>

<h1>App {name}</h1>
<p>What is this?</p>
<p>This {name} is working.</p>
<p>{$count}</p>