<script lang="ts">
	import Filters from '$lib/components/filters.svelte'
	import '../instagram.css'

	let optionValue = ''
</script>

<figure class={`filter-${optionValue}`}>
	<img
		src="https://picsum.photos/400/400"
		alt="random picsum asset"
	/>
</figure>

<Filters bind:value={optionValue} />
