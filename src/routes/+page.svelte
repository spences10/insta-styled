<script lang="ts">
	import Filters from '$lib/components/filters.svelte';
	import '../instagram.css';

	let optionValue = '';
</script>

<figure class={`filter-${optionValue}`}>
	<img src="https://picsum.photos/200/300" alt="" />
</figure>

<Filters bind:value={optionValue} />
